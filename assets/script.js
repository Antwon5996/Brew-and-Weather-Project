$(document).foundation();

let map;

// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2EfrBUaD7asCKQFjq3GIBI_80dD8KTgU&callback=initMap';
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  console.log("Print Map");
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

};

// Append the 'script' element to 'head'
document.head.appendChild(script);
      

