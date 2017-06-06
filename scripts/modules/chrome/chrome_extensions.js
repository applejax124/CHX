/*
* Chrome extensions Utility
* Douglas J. Smith 
* 06-05-2017
*/

addModule(isExtensionsUtility, extensions_load);

// verifies extensions command
function isExtensionsUtility(command){
  return command==='extensions';
}

// opens chrome extensions page
function extensions_load(){
  url="chrome://extensions";
  navigate(url);
}
