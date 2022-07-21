$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
