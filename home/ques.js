  $('document').ready(function () {
    function logOut() {
        var callBack = (e) => {
          gotoLogin();
        };
        sessionStorage.clear();
        firebase.auth().signOut().finally(callBack);
      }
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
    function logOut() {
      var callBack = (e) => {
        gotoLogin();
      };
      sessionStorage.clear();
      firebase.auth().signOut().finally(callBack);
    }
    const data=firebase.firestore().collection('questions').get();
        data.then(querySnapshot => {
          const arr = querySnapshot.docs.map(doc => doc.data())
         
          var item='';
          var len = Object.keys(arr).length;
          var u = sessionStorage.getItem('user');
          u=JSON.parse(u);
          for(var i=0;i<len;i++)
          { var v1=arr[i].email;
            var v2=u.email;
              if(arr[i].email==u.email)
              {
                 
              
              console.log(arr[i]);
            console.log(arr[i]['author']);
          
            item+='<div class="wrapper"><button class="toggle">';
            item+=arr[i].title;
            item+='<i class="fas fa-plus icon"></i></button><div class="content"><p>';
            item+=arr[i].description;
            item+='</p></div></div>';

              }
          }
        $('#accordian').append(item);



        let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");
for (let i = 0; i < toggles.length; i++) {
	toggles[i].addEventListener("click", () => {
		if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
			contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
			toggles[i].style.color = "#0084e9";
			icons[i].classList.remove("fa-plus");
			icons[i].classList.add("fa-minus");
		} else {
			contentDiv[i].style.height = "0px";
			toggles[i].style.color = "#111130";
			icons[i].classList.remove("fa-minus");
			icons[i].classList.add("fa-plus");
		}

		for (let j = 0; j < contentDiv.length; j++) {
			if (j !== i) {
				contentDiv[j].style.height = 0;
				toggles[j].style.color = "#111130";
				icons[j].classList.remove("fa-minus");
				icons[j].classList.add("fa-plus");
			}
		}
	});
}

        });
    
});
function logOut() {
  var callBack = (e) => {
    gotoLogin();
  };
  sessionStorage.clear();
  firebase.auth().signOut().finally(callBack);
}
function gotoLogin() {
  window.location.href = "/";
}





