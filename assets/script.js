$(document).foundation();

var res = localStorage.getItem("openBreweryDBResults");
var resParse = JSON.parse(res);
console.log(resParse[1].latitude);
console.log(resParse[1]);

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
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 2,
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
    addMarker({lat: parseFloat(resParse[0].latitude), lng: parseFloat(resParse[0].longitude)});
    addMarker({lat: parseFloat(resParse[1].latitude), lng: parseFloat(resParse[1].longitude)});
    function addMarker(coords){
      var marker = new google.maps.Marker({
      position: coords,
      map: map
  });
    }

};




