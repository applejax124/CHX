/*
* Google Keep Utility
* Douglas J. Smith
* 7-018-2017
*/
addModule(keepUtility,
[
  "keep"
]);
// Handles commands associated with Google Keep.
function keepUtility(params){
  if(params<1){
    navigate("https://keep.google.com",[]);
  }
}
