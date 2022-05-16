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

function gotoHome() {
  window.location.href = "/home/landing.html";
}

function redirectResult() {
  var PcallBack = function(result){
    sessionStorage.setItem("user", JSON.stringify(result.user));
    gotoHome();
  };

  var NcallBack = function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage);
    window.alert('there is an internal error please contact administrator\n' + errorMessage + '/n' + errorCode);
  };

  firebase.auth().getRedirectResult().then(PcallBack).catch(NcallBack);
}

function loginUser() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  firebase.auth().signInWithRedirect(provider).then(e=>redirectResult());
}

function checkUser() {

  firebase.auth().onAuthStateChanged( (user) => {
    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));
      gotoHome();
    } else {
      loginUser();
    }
  });
}
window.onload = function() {
  checkUser();
}