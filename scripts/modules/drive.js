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
  if ( params.length>0 ){
    navigate( "https://drive.google.com/drive/u/"+args[0]+"/" );
  } else {
    navigate( "https://drive.google.com/drive/u/0/" );
  }
}
