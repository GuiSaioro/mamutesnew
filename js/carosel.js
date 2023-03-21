
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    perPage: 3,
    autoScroll: {speed: 0.5,},
    //autoScroll: false,
    snap:true,
    isNavigation:true,
    
  } ).mount( window.splide.Extensions );
  splide.mount();
} );
