/*
* Chrome extensions Utility
* Douglas J. Smith 
* 06-05-2017
*/

// Attach module
addModule(extensions_load,
[
  "extensions"
]);

// opens chrome extensions page
function extensions_load(){
  url="chrome://extensions";
  navigate(url);
}
