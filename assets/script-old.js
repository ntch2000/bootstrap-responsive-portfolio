// hides the application details card container
$("#details").hide();

// shows the details of the SearchU project
$("#SearchU").on("click", function () {
  $(".card-deck").hide();
  $(
    "#details"
  ).html(`<h5 class="card-header text-center">Project 1 - SearchU</h5>
  <img
    src="./assets/gifs/search-u-gif.gif"
    class="card-img-top"
    alt="Project 1 - SearchU gif"
  />
  <div class="card-body">
    <h5 class="card-title">Description</h5>
    <p class="card-text">
      Using multiple API calls this application will assist the user
      in finding schools that they are interested in by either
      searching for a specific city or by searching using keywords
      from the school itself. Once the user makes a search they will
      be shown a list of either all of the schools in the city they
      searched or any school matching the keywords that they used if
      searching for schools specifically. The list that is generated
      will have good base information for each school shown. The logo,
      tuition cost, completion rate and a link to the school's website
      will be readily available to the user while scrolling through
      the list. When the user selects a school they will be shown more
      detailed information about that school and will also be shown a
      quality of life table for the city that school is in. If the
      city does not have quality of life information available, the
      user will be notified of this with an on-screen message
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <h5 class="list-group-item">Technologies Used</h5>
    <li class="list-group-item">JavaScript</li>
    <li class="list-group-item">jQuery</li>
    <li class="list-group-item">Bootstrap 4</li>
    <li class="list-group-item">Teleport API</li>
    <li class="list-group-item">College Scorecard API</li>
    <li class="list-group-item">Clearbit Logo API</li>
  </ul>
  
  <div class="card-footer text-center">
  <button class="btn btn-info-color mx-2" id="projects-list">
  Portfolio
                </button>
    <a
      href="https://ntch2000.github.io/searchu-project1/"
      class="btn btn-info-color mx-2" target="_blank"
      >Application</a
    >
    <a
      href="https://github.com/ntch2000/searchu-project1"
      class="btn btn-info-color mx-2" target="_blank"
      >Github Repository</a
    >
  </div>`);
  $("#details").show();
});

// shows the details of the weather dashboard applications
$("#weather-dashboard").on("click", function () {
  $(".card-deck").hide();
  $("#details").html(`<h5 class="card-header text-center">Weather Dashboard</h5>
  <img
  src="./assets/images/weather-dashboard-screenshot.jpg"
  class="card-img-top"
  alt="Weather Dashboard Application Image"
/>
    <div class="card-body">
      <h5 class="card-title">Description</h5>
      <p class="card-text">
      This application allows users to search for a city and obtain the current weather and 5-day forecast for that city. Cities searched are saved in a button list which can be used to obtain the weather information for the city again when clicked.
      </p>
      <p class="card-text">TWeather information included in the dashboard is as follows:</p>
      <ul>
      <li>Weather Icon - Represents the current weather in the city</li>
      <li>Temperature</li>
      <li>Humidity</li>
      <li>Wind Speed</li>
      <li>UV Index</li>
      </ul>
      <p class="card-text">The 5-day forecast information includes:</p>
      <ul>
      <li>Weather Icon - Represents the weather for the specified date
      </li>
      <li>Temperature for the specified date
      </li>
      <li>Humidity for the specified date
      </li>
      </ul>
    </div>
    <ul class="list-group list-group-flush">
      <h5 class="list-group-item">Technologies Used</h5>
      <li class="list-group-item">JavaScript</li>
      <li class="list-group-item">jQuery</li>
      <li class="list-group-item">Bootstrap 4</li>
      
    </ul>
    
    <div class="card-footer text-center">
    <button class="btn btn-info-color mx-2" id="projects-list">
    Portfolio
                </button>
    <a
    href="https://ntch2000.github.io/weather-dashboard/"
    class="btn btn-info-color mx-2" target="_blank"
    >Application</a
  >
  <a
    href="https://github.com/ntch2000/weather-dashboard"
    class="btn btn-info-color mx-2" target="_blank"
    >Github Repository</a
  >
    </div>`);
  $("#details").show();
});

// shows the details of the daily planner applications
$("#daily-planner").on("click", function () {
  $(".card-deck").hide();
  $("#details").html(`<h5 class="card-header text-center">Daily Planner</h5>
  <img
  src="./assets/images/application-screenshot.jpg"
  class="card-img-top"
  alt="Daily Planner Application Image"
/>
      <div class="card-body">
        <h5 class="card-title">Description</h5>
        <p class="card-text">
        This application allows user to create a daily work day scheduler for scheduling activities/events during typical work hours (9AM - 5PM). The application keeps track of activities for each hour and color codes the hours based on the current hour of the day. The application will also display the day and date at the top for user reference. </p>
        <p class="card-text">
        The time-blocks are dynamically generated using jQuery, HTML, and CSS. The date and time is retrieved with the Moment.js library. Each time block time value is generated with the Moment.js library.
        </p>
        </div>
    <ul class="list-group list-group-flush">
      <h5 class="list-group-item">Technologies Used</h5>
      <li class="list-group-item">HTML5</li>
      <li class="list-group-item">CSS3</li>
      <li class="list-group-item">JavaScript</li>
      <li class="list-group-item">Moment.js</li>
      
      
    </ul>
      <div class="card-footer text-center">
      <button class="btn btn-info-color mx-2" id="projects-list">
                    Portfolio
                  </button>
      <a
      href="https://ntch2000.github.io/daily-planner/"
      class="btn btn-info-color mx-2" target="_blank"
      >Application</a
    >
    <a
      href="https://github.com/ntch2000/daily-planner"
      class="btn btn-info-color mx-2" target="_blank"
      >Github Repository</a
    >
      </div>`);
  $("#details").show();
});

// when the projects list button is clicked, the projects cards are shown while the details are hidden
$(document).on("click", "#projects-list", function () {
  $(".card-deck").show();
  $("#details").hide();
});
