/*
* Wikipedia Utility
* Douglas J. Smith
* 06- 05 - 2017
*/

addModule(isWikiApp, wikipedia_search);

// determines whether wiki app has been called
function isWikiApp(command){
  return command==="wiki";
}

// runs wikipedia search through navigation
function wikipedia_search( params ){
  url="https://en.wikipedia.org/wiki/Special:Search?search=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}

