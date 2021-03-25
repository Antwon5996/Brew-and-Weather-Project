
$(document).foundation();

var getBreweriesForm = document.querySelector("#getBreweriesForm");

function handleSearchFormSubmit(event) 
{  
    event.preventDefault();

    // Get city
    var city = document.getElementById("city").value;

    if (city == null || city.length < 1)
    {
        alert("Please enter a city.");
        return;
    }
        
    // Get state
    var states = document.querySelector("#states");

    if (states.selectedIndex > 0)
    {
        var statesStr = states.options[states.selectedIndex].text;
    }
    else
    {
        alert("Please select a State.");
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
      console.log(locRes);
    })
    .catch(function (error) 
    {
      console.error(error);
    });
}

getBreweriesForm.addEventListener('submit', handleSearchFormSubmit);