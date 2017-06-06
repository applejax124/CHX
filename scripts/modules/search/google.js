/*
* Google search utility
* Douglas J. Smith
* 06 - 05 - 2017
*/

addModule();

// verifies google search command
function isGoogleCommand(command){
  return command==='google';
}

// google search
function google_search( params ){
  url="https://www.google.com/search?site=&source=hp&q=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}
