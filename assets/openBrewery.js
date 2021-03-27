var getBreweriesForm = document.querySelector("#getBreweriesForm");

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

    // Validate state
    if (states.selectedIndex > 0)
    {
        var statesStr = states.options[states.selectedIndex].text;
    }
    else
    {
      document.querySelector("#errMsgArea").innerHTML = "<p id=\"red\">Please select a state.</p>";
        return;
    }

    // Build URL
    var url = "https://api.openbrewerydb.org/breweries?by_city="
    url += city;
    url += "&by_state=";
    url += statesStr;
        
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

      // Persist array of Strings to localStorage.
      localStorage.setItem("openBreweryDBResults", outputAsJSON);
    })
    .catch(function (error) 
    {
      console.error(error);
    });

}

getBreweriesForm.addEventListener('submit', handleSearchFormSubmit);