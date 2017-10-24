//Ecosia Search Utility
//Cami Carballo
//24 October 2017

addModule(ecosia_search, 
[
"ecosia",
"eco"
]);

//ecosia search
function ecosia_search( params ){

  url = "https://www.ecosia.org/search?q=";
  
  for (i in params){
    url += params[i] + "+";
  }

  url += '\b';
  navigate(url);

}
