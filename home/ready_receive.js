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
    const ref_obj = firebase.firestore().collection("receive");
    
    ref_obj.get().then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
        let data=doc.data();
        var item=`
        <div class="donation">
            <div class="heading">
                ${data.organizationName}
            </div>
            <div class="row">
                <div class="left">
                    <span>Organization Type</span>
                    <span>Capacity</span>
                    <span>Location</span>
                    <span>City</span>
                    <span>Mobile Number</span>
                </div>
                <div class="right">
                    <span>${data.organizationType}</span>
                    <span>${data.capacity}</span>
                    <span>${data.location}</span>
                    <span>${data.city}</span>
                    <span>${data.mobileNumber}</span>
                </div>
            </div>
        </div>
        
        `
        $('#donationList').append(item);
        })
        
     })
  });