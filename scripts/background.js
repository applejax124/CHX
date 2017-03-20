//Shared output for recursive functions/code
var stdOut="";

//Read omnibox input to parser
chrome.omnibox.onInputEntered.addListener( function(text){
  parse(text);
});


//function to parse commands
//INPUT:
//    str - raw text of the command
//OUTPUT: 
//  NONE - commands are executed in their own way
function parse( str ){
  args = str.split(" ");
  switch ( args.shift() ){
    case "google":
      google_search(args);
      break;
    case "bkmrk":
      bookmark_utility(args);
      break;
    default:
      alert("ERROR: command not found");
  }
  
}

//function that handles bookmark-related commands
//just reads command details and calls the next operation
//INPUT:
//   params - an array of parameters
function bookmark_utility( params ){
  switch ( params.shift() ){
    case "add":
      bu_add(params);
      break;
    case "list":
      bu_list(params);
      break;
  }
}

//List the bookmark tree
// Takes at most one parameter
// IF PARAM: list the bookmark tree under that parameter
// IF NOT PARAM: list bookmark tree of entire hierarchy
function bu_list(params){
  if (params.length > 0){
    for (i in params){
      chrome.bookmarks.getTree(function(result){
        stdOut=params[i]+"\n";
        for(c in result[0].children){
          tree_delve(result[0].children[c],params[i].split("\\"));
        }
        alert(stdOut);
        stdOut="";
      });
    }
  } else {
    chrome.bookmarks.getTree(function(result){
      stdOut="";
      stdOut+="All Bookmarks\n";
      for(c in result[0].children){
        ls(result[0].children[c],1,stdOut);
      }
      //When we're done, print string
      alert(stdOut);
      stdOut="";
    });
  }
}
//Recursively go through a series of given parameters
function tree_delve(folder,params){
  console.log(folder);
  console.log(params);
  dir=params.shift();
  console.log(dir);
  //if this was the end of path, list everythin
  // else continue delving
  if( params.length > 0 ){
    for(c in folder.children){
      if(folder.children[c].title == dir){
        tree_delve(folder.children[c],params);
      }
    }
  } else {
    for(c in folder.children){
      if(folder.children[c].title == dir){
        for(l in folder.children[c].children){
          stdOut+="-|"+folder.children[c].children[l].title+"\n";
        }
      }
    }
  }
}
//recursive look into bookmark object tree
function ls(node, tabOrder, output){
  for(var i=0; i<tabOrder; ++i){
   stdOut+="-|"; 
  }
  stdOut += node.title;
  stdOut += "\n";
  for(c in node.children){
    ls(node.children[c],tabOrder+1,output);
  }
}
//Add a bookmark in a given area
// IF PARAM: then insert it in the hierarchy under param
// IF NOT PARAM: insert in bookmarks bar
function bu_add( params ){
  chrome.bookmarks.getTree(function(result){
    console.log(result);
  });
  if ( params.length === 0 ){
    
  } else {

  }
}

//function to launch a google search
//INPUT: 
//  params - an array of search terms
function google_search( params ){
  url="https://www.google.com/search?site=&source=hp&q=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}
//function to change chrome's browser to specified window
function navigate( loc ){
  //sets current tab url to loc
  chrome.tabs.update({"url":loc});
}
