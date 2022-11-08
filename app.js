const navButton = document.getElementById('nav-btn');
const navMenu = document.getElementById('nav-menu');
const navButtonContainer = document.querySelector('.nav-menu-btn-container');

const newspaperSpinning = [
    { transform: 'translateX(10%)' },
    { transform: 'translateX(0%)' }
  ];
  
  const newspaperTiming = {
    duration: 200,
    iterations: 1,
  };

let isClosed = true;

navButton.addEventListener('click',(e)=>{
    if(isClosed){
    e.target.src = "./assets/images/icon-menu-close.svg";
    navButtonContainer.style.setProperty("z-index", 3);
    navMenu.style.setProperty("display","block");
    navMenu.animate(newspaperSpinning, newspaperTiming);
    navMenu.classList.add('active');
    isClosed=false;
    }
    else{
        navMenu.style.setProperty("display","none");
        navMenu.classList.remove('active');
        e.target.src = "./assets/images/icon-menu.svg";
        isClosed=true;
    }
});