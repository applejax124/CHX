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
  
  targetUrl="https://mail.google.com/mail/u/";
  if (params.length>0) {
    // App number is always first.
    navigate(targetUrl+params.shift()+"/");
    while (params.length>0){
      // Command to gmail app.
      com = params.shift();
      navigate(targetUrl+"#"+com);
    }
  } else {
    navigate(targetUrl+"0/");
  }

}

