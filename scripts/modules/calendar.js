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
  navigateGoogleWebapp("https:calendar.google.com/calendar/b/",params)
}
