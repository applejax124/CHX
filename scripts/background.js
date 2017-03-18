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
