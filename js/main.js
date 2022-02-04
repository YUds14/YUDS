const hotelslider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider_button--next',
      prevEl: '.hotel-slider_button--prev',
    }
  });

  const rewiurslider = new Swiper('.rewiur-slider', {
    // Optional parameters
    loop: true,
  

  
    // Navigation arrows
    navigation: {
      nextEl: '.rewiur-slider_button--prev',
      prevEl: '.rewiur-slider_button--next',
    }
  });
  var menuBottom=document.querySelector(".menu-button");
  menuBottom.addEventListener('click',function(){
    console.log("клик по кнопке меню");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom_visible");
  });