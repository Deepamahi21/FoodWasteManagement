const firebaseConfig = {
  apiKey: "AIzaSyCNf2t6f1OJhDyhDn1t4ut4UDLNP0pAYW0",
  authDomain: "utilizing-food-waste.firebaseapp.com",
  projectId: "utilizing-food-waste",
  storageBucket: "utilizing-food-waste.appspot.com",
  messagingSenderId: "818033346815",
  appId: "1:818033346815:web:a68a5e834391db533f64ca",
  measurementId: "G-7P2XDB3X4X"
};

let latitude;
let longitude;
window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    // x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  
  latitude=position.coords.latitude;
  longitude=position.coords.longitude;
  // x.innerHTML = "Latitude: " + position.coords.latitude + 
  // "<br>Longitude: " + position.coords.longitude;
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function gotoLogin() 
{
  window.location.href = "/";
}

function setHome() {
  let d = document.getElementById('name');
  let u = sessionStorage.getItem('user');
  u = JSON.parse(u);
}

function logOut() {
  var callBack = (e) => {
    gotoLogin();
  };
  sessionStorage.clear();
  firebase.auth().signOut().finally(callBack);
}

function checkUser() {
  var callBack = (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      setHome();
    } else {
      gotoLogin();
    }
  };
  firebase.auth().onAuthStateChanged(callBack);
}

$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}});
function donate()
{

  var name=document.getElementById("name").value;
  var food=document.getElementById("food").value;
  var quantity=document.getElementById('quantity').value;
  var meetingPoint=document.getElementById('meeting-point').value;
  var pickupDate = document.getElementById('pickup-date').value;
  var expirationDate = document.getElementById('expiration-date').value;
  var vegetarian=document.querySelector('#vegetarian').checked;
  var nonVegetarian = document.querySelector('#non-vegetarian').checked
  var city = document.getElementById('city').value
  var mobileNumber = document.getElementById('mobile-number').value
  let u = sessionStorage.getItem('user');
   u=JSON.parse(u);
  
  var id=u.email;
  id=id.substring(0,id.length-4);
  var dt=new Date().getTime();
  id=id+dt;

  
  const ref_obj = firebase.firestore().collection("donations").doc(id);
        ref_obj.set({
            "name": name,
            "food": food,
            "quantity":quantity,
            "meetingPoint":meetingPoint,
            "pickupDate":pickupDate,
            "expirationDate":expirationDate,
            "vegetarian":vegetarian,
            "nonVegetarian":nonVegetarian,
            "city":city,
            "mobileNumber":mobileNumber,
            "latitude": latitude,
            "longitude": longitude

    
        });

        
      //  window.location.reload();
}