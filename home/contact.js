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
      window.location.href = '/home'
    }
    
    function login() {
      window.location.href='./login';
    }
    
    function checkUser() {
      var callBack = (user) => {
        if (user) {
          sessionStorage.setItem("user", JSON.stringify(user));
          gotoHome();
        }
      };
      firebase.auth().onAuthStateChanged(callBack);
    }
    
    function run(item)
    {
      //console.log(item);
      window.location.href="/Jobpreview.html";
      sessionStorage.setItem("data",item);
      //console.log(sessionStorage.getItem("data"));
    }
    function logOut() {
        console.log("hello")
        var callBack = (e) => {
          gotoLogin();
        };
        sessionStorage.clear();
        firebase.auth().signOut().finally(callBack);
      }
      function gotoLogin() {
        window.location.href = "/";
      }

      function contact()
      {
        
        var name=document.getElementById("name").value;
        var email=document.getElementById('email').value;
        var message=document.getElementById('message').value;
        console.log(name,email,message)
        const ref_obj = firebase.firestore().collection("contact").doc();
              ref_obj.set({
                  "name": name,
                  "email":email,
                  "message":message

          
              });
              
            //window.location.reload();
      }