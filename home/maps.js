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
let locations = [
{
  lat:17.6586752,long:83.165184
}
        
];

function initMap() {
    // The location of Uluru
    
      
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(17.6586752,83.165184),
        // mapTypeId: google.maps.MapTypeId.ROADMAP
      });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;
    
    const ref_obj = firebase.firestore().collection("donations");
    
    ref_obj.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
           let docdata=doc.data()
           locations.push({lat:docdata.latitude,long:docdata.longitude})
        })
        for (i = 0; i < locations.length; i++) { 
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i].lat, locations[i].long),
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
     })

     
    
  }
   
  window.initMap = initMap;

  $(document).ready(function () {
    getLocation();
  });


  function getLocation(){
    const ref_obj = firebase.firestore().collection("donations");
    
    ref_obj.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
           let docdata=doc.data()
           locations.push({lat:docdata.latitude,long:docdata.longitude})
        })
        
     })
      
  }

