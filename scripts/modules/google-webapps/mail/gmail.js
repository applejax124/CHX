/*
* Gmail utility
* Douglas J. Smith
* 06-06-2017
*/
addModule(launchGmail,
[
  "gmail",
  "mail"
]);

// launches gmail
function launchGmail(params){
  navigateGoogleWebapp("https://mail.google.com/mail/u/", params);
}

