// Initialize and add the map
const firebaseConfig = {
    apiKey: "AIzaSyCNf2t6f1OJhDyhDn1t4ut4UDLNP0pAYW0",
    authDomain: "utilizing-food-waste.firebaseapp.com",
    projectId: "utilizing-food-waste",
    storageBucket: "utilizing-food-waste.appspot.com",
    messagingSenderId: "818033346815",
    appId: "1:818033346815:web:a68a5e834391db533f64ca",
    measurementId: "G-7P2XDB3X4X"
  };

firebase.initializeApp(firebaseConfig);
firebase.analytics();
let lat=sessionStorage.getItem("lat")
let long=sessionStorage.getItem("long")
function initMap() {
    // The location of Uluru
    let lat=sessionStorage.getItem("lat")
    let long=sessionStorage.getItem("long")
      
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: new google.maps.LatLng(lat,long),
        // mapTypeId: google.maps.MapTypeId.ROADMAP
      });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    
    console.log(lat,long,"latlong");
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat,long),
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/library_maps.png",
        map: map
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));

     
    
  }
   
  window.initMap = initMap;

  

