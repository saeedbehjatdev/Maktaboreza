var swiper3 = new Swiper(".headSwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
});
var swiper = new Swiper(".newsSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom",
      prevEl: ".swiper-button-prev-custom",
    },
  });

  var swiper2 = new Swiper(".courseSwiper", {
    loop:true,
    // slidesPerView:1,
    // spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 153,
      }
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next-custom-course",
      prevEl: ".swiper-button-prev-custom-course",
    },
  });
  // Sidebar
  const navOpenBtn = document.querySelector(".nav-icon");
  const navCloseBtn = document.querySelector(".nav-close-btn");
  const nav = document.querySelector(".nav");

  const overlay = document.querySelector(".overlay");
  const overlaycart = document.querySelector(".overlaycart");
  const cart = document.querySelector(".cart");
  const cartOpenBtn = document.querySelector(".cart-icon");
  const cartCloseBtn = document.querySelector(".cart-close-btn");


  function closeNav() {
    nav.classList.remove("sidebar");
    overlay.classList.remove("overlayVisible");
}
  function closeCart() {
    cart.classList.remove("cart-slide");
    overlaycart.classList.remove("overlayVisible");
  }

  navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("sidebar");
    overlay.classList.add("overlayVisible");
    overlay.addEventListener("click", closeNav)
  })
  cartOpenBtn.addEventListener("click",()=> {
    cart.classList.remove("cart-slide");
    overlaycart.classList.add("overlayVisible");
    overlaycart.addEventListener("click", closeCart)
  })
navCloseBtn.addEventListener("click", closeNav);
cartCloseBtn.addEventListener("click", closeCart);