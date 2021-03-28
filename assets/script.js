$(document).foundation();

var res = localStorage.getItem("openBreweryDBResults");
var resParse = JSON.parse(res);
console.log(resParse);
var location = fetch("https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Minneapolis&inputtype=textquery&fields=geometry&key=AIzaSyA2EfrBUaD7asCKQFjq3GIBI_80dD8KTgU")
// .then(response => response.json())
// .then(data => location = data.candidates[0].geometry.location)

let map;

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2EfrBUaD7asCKQFjq3GIBI_80dD8KTgU&callback=initMap';
script.async = true;
// Append the 'script' element to 'head'
document.head.appendChild(script);

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  var lat = resParse[0].city;
  var lng = resParse[0].state;
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.7540524, lng: -77.4302414 },
    zoom: 8,
  });

//   var marker = new google.maps.Marker({
//       position: {lat: parseFloat(resParse[0].latitude), lng: parseFloat(resParse[0].longitude)},
//       map: map
//   });

//   var infoWindow = new google.maps.InfoWindow({
//       content: resParse[0].name
//   });

//   marker.addListener('click', function(){
//       infoWindow.open(map,marker);
//   });
  //   addMarker({lat: parseFloat(resParse[0].latitude), lng: parseFloat(resParse[0].longitude)});
  //   addMarker({lat: parseFloat(resParse[1].latitude), lng: parseFloat(resParse[1].longitude)});
  //   function addMarker(coords){
  //     var marker = new google.maps.Marker({
  //     position: coords,
  //     map: map
  // });
  //   }

};




