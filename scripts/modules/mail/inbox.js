/*
* Inbox utility
* Douglas J. Smith
* 06-12-2017
*/
addModule(launchInbox,
[
  "inbox
]);

// launches inbox
function launchInbox(params){
  if (params.length>0){
    navigate("inbox.google.com/u/"+args[0]+"/");
  } else {
    navigate("https://inbox.google.com/u/0/");
  }
}
