/*
* Google Calendar Utility
* Douglas J. Smith
* 06-25-2017
*/
addModule(launchCalendar,
[
  "cal",
  "calendar"
]);

// navigates to google calendar webapp
function launchCalendar(params){
  if ( params.length>0 ){
    navigate("https://calendar.google.com/calendar/b/"+args[0]+"/");
  } else {
    navigate("https://calendar.google.com/calendar/b/0/");
  }
}
