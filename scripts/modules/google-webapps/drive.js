/*
* Google Drive utility
* Douglas J. Smith
* 06-05-2017
*/
addModule(launchDrive,
[
  "drive"
]);

// launches drive application
function launchDrive(params){
  navigateGoogleWebapp("https://drive.google.com/u/",params);
}
