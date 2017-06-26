/*
* Gmail utility
* Douglas J. Smith
* 06-06-2017
*/
addModule(launchGmail,
[
  "gmail"
]);

// launches gmail
function launchGmail(params){
  navigateGoogleWebapp("https://mail.google.com/mail/u/", params);
}

