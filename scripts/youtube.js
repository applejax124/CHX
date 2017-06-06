/*
* YouTube Utility
* Douglas J. Smith
* 06 - 05 - 2017
*/

addModule(isYouTubeCommand, youtube_search);

// function to validate youtube detail
function isYouTubeCommand( command ){
  return (command==='youtube');
}

// function to access youtube search
function youtube_search( params ){
  url="https://www.youtube.com/results?search_query=";
  for (i in params){
    url += params[i]+"+";
  }
  url += '\b';
  navigate(url);
}

