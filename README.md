## Hardwood Season
  Is an application with the purpose of choosing your favorite NBA team from a field of buttons and displaying the date, time and team names. The application has a secondary feature of a map with a search bar that will let the user search for any location, hopefully your teams arena or just the location of an NBA game!

## Approach
  Alot of online sports magazines have great articles, some will give information on team records and maybe even an upcoming game or two. What I was looking to accomplish was make an easy application that would give the user all of a specific NBA teams games for a season.
	
## Difficulties
  This application was created for the purposes of finding a basketball court near the user using Google Maps API. I hit a roadblock when trying to limit the search results and populate the map with specific information instead of a basketball themed Google Maps page. 
  The snippet below shows the function of map initialization and some options that are hard coded for the user:
  ```javascript
  function initMap() {
  let options = {
    center: { lat: 41.043042, lng: -73.53257 },
    zoom: 15,
    type: ["gym", "park"],
    radius: 1000
  };
  map = new google.maps.Map(document.getElementById("map"), options);
```
  When it became apparent that I was not at the skill level yet to accomplish this task, I pivoted to the application you see now. One of my hang-ups with this new set of code was how to format the date returned by the ajax call.
  ```javascript
  for (let i = 0; i < dates.data.length; i++) {
          scheduleObject = {
            gameDate: dates.data[i].date,
            homeTeam: dates.data[i].home_team.name,
            visitorTeam: dates.data[i].visitor_team.name,
            gameTime: dates.data[i].status
          };

          const gameDate = `${scheduleObject.gameDate}`;

          const newDate = new Date(gameDate);
          //
          teamSchedule.push(scheduleObject);
          //
          // console.log(gameDate);
          //
          const schedule = $("<li>").text(
            `The ${scheduleObject.homeTeam} are playing the ${
              scheduleObject.visitorTeam
            } on ${newDate.toDateString()} at ${scheduleObject.gameTime}`
          );
```
  ##Future Updates
  	A few things that I would like to add to this application would be displaying wins/losses, toggling the season and displaying a mini box score.
	
	
