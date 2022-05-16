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

$(document).ready(function () {
    const ref_obj = firebase.firestore().collection("donations");
    
    ref_obj.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
        let data=doc.data();
        var item=`
        <div class="donation">
            <div class="heading">
                ${data.name}
            </div>
            <div class="row">
                <div class="left">
                    
                    <span>Food Item</span>
                    <span>Quantity</span>
                    <span>Meeting Point</span>
                    <span>Pick up Date</span>
                    <span>Expiration Date</span>
                    <span>Food Type</span>
                    <span>City</span>
                    <span>Mobile Number</span>
                </div>
                <div class="right">
                    <span>${data.food}</span>
                    <span>${data.quantity}</span>
                    <span>${data.meetingPoint}</span>
                    <span>${data.pickupDate}</span>
                    <span>${data.expitationDate}</span>
                    <span>${data.vegetarian?"vegetarian":"nonVegetarian"}</span>
                    <span>${data.city}</span>
                    <span>${data.mobileNumber}</span>
                </div>
            </div>
            <div class="locateMe" onclick="goToLocation(${data.latitude},${data.longitude})">
                <span>Locate Me</span>
            </div>
        </div>
        
        `
        $('#donationList').append(item);
        })
        
     })
  });

  function goToLocation(lat,long){
    sessionStorage.setItem("lat",lat)
    sessionStorage.setItem("long",long)
    window.location.href="http://localhost:8080/home/locateme.html"
  }