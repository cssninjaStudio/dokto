import Swiper from "swiper";

export function swiper() {
  return {
    swiper: null,
    init() {
      this.swiper = new Swiper(this.$refs.container, {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".carousel-pagination",
          type: "bullets",
        },
        breakpoints: {
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      });
    },
  };
}
