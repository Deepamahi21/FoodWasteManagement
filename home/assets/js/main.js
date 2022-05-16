const firebaseConfig = {
    apiKey: "AIzaSyCNf2t6f1OJhDyhDn1t4ut4UDLNP0pAYW0",
    authDomain: "utilizing-food-waste.firebaseapp.com",
    projectId: "utilizing-food-waste",
    storageBucket: "utilizing-food-waste.appspot.com",
    messagingSenderId: "818033346815",
    appId: "1:818033346815:web:a68a5e834391db533f64ca",
    measurementId: "G-7P2XDB3X4X"
  };
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
/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== MOUSEMOVE HOME IMG =====*/
document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})
