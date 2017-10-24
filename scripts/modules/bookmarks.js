/*
* Bookmakrs Utility
* Douglas J. Smith
* 7-17-2017
*/

addModule(bookmarksUtility,
[
  "bkmrk",
  "bkmrks",
  "bookmark",
  "bookmarks"
]);

// Coordinates bookmark operation.
function bookmarksUtility(params){
  // If no parameters, then just open bookmarks. Else try commands.
  if(params.length < 1){
    navigate("chrome://bookmarks","");
  }
//  else {
//    navigate("chrome://bookmarks",params)
//  }
}
