/*
* DuckDuckGo search utility
* Douglas J. Smith
* 06 - 05 - 2017
*/

addModule(duckduckgo_search,
[
"duckduckgo",
"ddg"
]);

// duckduckgo search
function duckduckgo_search( params ){
  url="https://duckduckgo.com/?q=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}
