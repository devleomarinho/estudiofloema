let time = 2500,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img"),
    max = images.length;

function nextImage(){

    images[currentImageIndex].classList.remove("selected");
    
    currentImageIndex++
    if(currentImageIndex >= max)
        currentImageIndex = 0;

    images[currentImageIndex].classList.add("selected")

}

function start(){
    setInterval(()=>{
        nextImage()
    }, time)

}

window.addEventListener("load", start);

// MENU RESPONSIVO

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  // VIDEO DA SEÇÃO "PROCESSOS"

    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
    
    setTimeout(function(){
        document.getElementById('myVideo').play();
    }, 2000);
}


// BOTTOM NAVIGATION BAR

let navbar = document.querySelector(".navbar-bottom");
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0 || currentScroll < 468){
    navbar.classList.remove("show");
  }
  if(currentScroll > 468){
    navbar.classList.add("show");
  }
  if (currentScroll > 11100){
    navbar.classList.remove('show');
  }

  lastScroll = currentScroll;

})

// OVERLAY SCREEN

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
} 

// Botão whatsapp

let whats = document.querySelector(".whatsapp");
let lastScrollw = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll <= 0 || currentScroll < 468){
    whats.classList.remove("show");
  }
  if(currentScroll > 468){
    whats.classList.add("show");
  }
 

  lastScrollw = currentScroll;

})

// Ação de clique nos projetos


