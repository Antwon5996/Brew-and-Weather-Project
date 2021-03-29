$(document).foundation();

var getBreweriesForm = document.querySelector("#getBreweriesForm");

function callOpenBreweryDB(city, state)
{
  // Build URL
  var url = "https://api.openbrewerydb.org/breweries?by_city=";
  url += city;
  url += "&by_state=";
  url += state;
        
  fetch(url)
  .then(function (response)
  {
    if (!response.ok)
    {
      throw response.json();
    }

    return response.json();
  })
  .then(function (locRes)
  {
    // Convert array of JSON objects to Strings so that they can be stored.
    var outputAsJSON = JSON.stringify(locRes);

    // Clear cache
    localStorage.removeItem("openBreweryDBResults");
    // Persist array of Strings to localStorage.
    localStorage.setItem("openBreweryDBResults", outputAsJSON);
  })
  .catch(function (error) 
  {
    console.error(error);
  });
}

function callOpenWeatherMap(city, state)
{
  // Build URL
  var url = "https://api.openweathermap.org/data/2.5/weather?q=";
  url += city;
  url += ",";
  url += state;
  url += ",US&units=imperial&appid=a51458addc0e1b5040d589d48c416643"
      
  fetch(url)
  .then(function (response)
  {
    if (!response.ok)
    {
      throw response.json();
    }

    return response.json();
  })
  .then(function (locRes)
  {
    // Convert array of JSON objects to Strings so that they can be stored.
    var outputAsJSON = JSON.stringify(locRes);

    // Clear cache
    localStorage.removeItem("openWeatherMapResults");
    // Persist array of Strings to localStorage.
    localStorage.setItem("openWeatherMapResults", outputAsJSON);
  })
  .catch(function (error) 
  {
    console.error(error);
  });
}
 
function handleSearchFormSubmit(event) 
{  
    event.preventDefault();

    // Clear error message.
    document.querySelector("#errMsgArea").innerHTML = "";

    // Get city
    var city = document.getElementById("city").value;

    // Validate city.
    if (city == null || city.length < 1)
    {        
        document.querySelector("#errMsgArea").innerHTML = "<p id=\"red\">Please enter a city.</p>";
        return;
    }
        
    // Get state
    var states = document.querySelector("#states");
    var statesStr = "";

    // Validate state
    if (states.selectedIndex > 0)
    {
        statesStr = states.options[states.selectedIndex].text;
    }
    else
    {
      document.querySelector("#errMsgArea").innerHTML = "<p id=\"red\">Please select a state.</p>";
        return;
    }

    callOpenBreweryDB(city, statesStr);

    callOpenWeatherMap(city, statesStr); 

    window.location.href = "searchResults.html"
}

getBreweriesForm.addEventListener('submit', handleSearchFormSubmit);