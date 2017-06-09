/*
* Chrome Settings Utility
* Douglas J. Smith
* 06-05-2017
*/

addModule(settings_load,
[
  "settings"
]);

// loads chrome settings page
function settings_load(){
  url="chrome://settings";
  navigate( url );
}

