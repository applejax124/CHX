/*
* Chrome Settings Utility
* Douglas J. Smith
* 06-05-2017
*/

addModule(isSettingsUtility, settings_load);

// verifies settings pageload call
function isSettingsUtility(){
  return (com==='settings');
}

// loads chrome settings page
function settings_load(){
  url="chrome://settings";
  navigate( url );
}

