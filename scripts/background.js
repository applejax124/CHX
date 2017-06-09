//Shared output for recursive functions/code
var stdOut="";

//Read omnibox input to parser
chrome.omnibox.onInputEntered.addListener( function(text){
  parse(text);
});

// All functions for checking whether a command is valid and the function to 
// execute if it is are stored in this object
// USAGE:
//  modules = {
//    string key : function()
//  }

var modules = {};

// Function for adding modules by mapping a function to a list of keys
//  Inputs:
//    @exec() - a function that will be executed to run the module
//    @checks[] - a list of keys that the function protoype will be stored in
function addModule(exec, checks){
  for(var a=0; a<checks.length; ++a){
    modules[checks[a]] = exec;
  }
}


// Function to parse commands
// Indexed through each module, call checker, and if it returns true call its exec function
// INPUT:
//   str - raw text of the command
// OUTPUT: 
//   NONE - commands are executed in their own way
function parse( str ){
  // Stores function indexed to command
  var func;
  args = str.split(" ");
  // Command always comes first
  com = args.shift();
  // Access the function keyed to this command
  func = modules[com];
  // If a function wasn't accessed, then call the fail state
  if(func===undefined){
    alert("ERROR. Command not found.");
  } else {
    func(args);
  }
}

// UTILITY FUNCTIONS //////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//function to change chrome's browser to specified window
function navigate( loc ){
  //sets current tab url to loc
  chrome.tabs.update({"url":loc});
}




