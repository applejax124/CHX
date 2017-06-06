/*
* Gmail utility
* Douglas J. Smith
* 06-06-2017
*/
addModule(isGmailApp, launchGmail);

// verifies Gmail
function isGmailApp(command){
  return command==='gmail';
}
// launches gmail
function launchGmail(params){
  if ( params.length>0 ){
    navigate( "https://mail.google.com/mail/u/"+args[0]+"/" );
  }	else {
    navigate( "https://mail.google.com/mail/u/0/" );
  }
}

