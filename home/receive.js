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

function gotoLogin() {
  window.location.href = "/";
}

function setHome() {
  let d = document.getElementById('name');
  let u = sessionStorage.getItem('user');
  u = JSON.parse(u);
  d.innerHTML =  u.displayName;
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

window.onload = function() {
  checkUser();
}
function receive()
{
  
  var organizationName=document.getElementById("organization-name").value;
  var organizationType=document.getElementById('organization-type').value;
  var capacity=document.getElementById('capacity').value;
  var location = document.getElementById('location').value;
  var city = document.getElementById('city').value;
  var mobileNumber=document.getElementById('mobile-number').value;


  let u = sessionStorage.getItem('user');
   u=JSON.parse(u);
  
  var id=u.email;
  id=id.substring(0,id.length-4);
  var dt=new Date().getTime();
  id=id+dt;

  console.log(organizationName,organizationType,capacity,city,location,mobileNumber)
  const ref_obj = firebase.firestore().collection("receive").doc();
        ref_obj.set({
            "organizationName": organizationName,
            "organizationType":organizationType,
            "capacity":capacity,
            "location":location,
            "city":city,
            "mobileNumber":mobileNumber,

    
        });
        
      // window.location.reload();
}