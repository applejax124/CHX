//Shared output for recursive functions/code
var stdOut="";

//Read omnibox input to parser
chrome.omnibox.onInputEntered.addListener( function(text){
  parse(text);
});

// All functions for checking whether a command is valid and the function to 
// execute if it is are stored in this array
// USAGE:
//  modules = [
//    [
//      function check(),
//      function exec()
//    ]
//  ]
var modules = [];

// function for adding a module to the modules function
// this wrapper should reduce the overhead of including functions from different scripts
function addModule(check,exec){
  modules.push([check,exec]);
}


// Function to parse commands
// Indexed through each module, call checker, and if it returns true call its exec function
// INPUT:
//   str - raw text of the command
// OUTPUT: 
//   NONE - commands are executed in their own way
function parse( str ){
  args = str.split(" ");
  // Command always comes first
  com = args.shift();

  // Start iterating through module checkers
  // First module to return true is executed, which means any keyword used for
  //  only one module is reserved
  for(i in modules){
    if(modules[i][0](com)){
      modules[i][1](args);
      return;
    }
  }
  // Final fail case to execute if no commands check out
  alert("ERROR. Command not found.");
}


// UTILITY FUNCTIONS //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//function to change chrome's browser to specified window
function navigate( loc ){
  //sets current tab url to loc
  chrome.tabs.update({"url":loc});
}




