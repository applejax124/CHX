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
  navigate("https://drive.google.com",params);
}
