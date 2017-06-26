/*
* Inbox utility
* Douglas J. Smith
* 06-12-2017
*/
addModule(launchInbox,
[
  "inbox",
]);

// launches inbox
function launchInbox(params){
  navigate("https://inbox.google.com",params);
}
