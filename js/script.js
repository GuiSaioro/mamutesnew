const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuTrigger = document.querySelector('.menu-mobile-trigger');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
   if (!menu.classList.contains('active')) {
      return;
   }

   if (e.target.closest('.menu-item-has-children')) {
      const hasChildren = e.target.closest('.menu-item-has-children');
      showSubMenu(hasChildren);
   }
});

menuArrow.addEventListener('click', () => {
   hideSubMenu();
});

menuTrigger.addEventListener('click', () => {
   toggleMenu();
});

menuClosed.addEventListener('click', () => {
   toggleMenu();
});

menuOverlay.addEventListener('click', () => {
   toggleMenu();
});

function toggleMenu() {
   menu.classList.toggle('active');
   menuOverlay.classList.toggle('active');
}

function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector('.menu-subs');
   subMenu.classList.add('active');
   subMenu.style.animation = 'slideLeft 0.5s ease forwards';
   const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
   menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
   menu.querySelector('.menu-mobile-header').classList.add('active');
}

function hideSubMenu() {
   subMenu.style.animation = 'slideRight 0.5s ease forwards';
   setTimeout(() => {
      subMenu.classList.remove('active');
   }, 300);

   menu.querySelector('.menu-mobile-title').innerHTML = '';
   menu.querySelector('.menu-mobile-header').classList.remove('active');
}

window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains('active')) {
         toggleMenu();
      }
   }
};

/*----------------Header fixed----------------------- */

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var fixo = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= fixo) {
    navbar.classList.add("fixo");
  } else {
    navbar.classList.remove("fixo");
  }
  if(window.innerWidth<992){
   navbar.classList.remove("fixo");
  }
}
window.addEventListener('scroll', function() {
   var navbar = document.querySelector('#navbar');
   var section = document.querySelector('.text-mainbanner');
   if (window.pageYOffset >= section.offsetTop) {
     navbar.classList.add('navbar-color');
   } else {
     navbar.classList.remove('navbar-color');
   }
 });
 function abrirLink(link) {
	setTimeout(function() {
		window.open(link, '_blank');
	}, 1200); // delay de 1,2 segundos

   }

/*----------------------------------------*/
