//Alpine JS and plugins import
import Alpine from "alpinejs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import collapse from "@alpinejs/collapse";
import Iconify from "@iconify/iconify";

window.Alpine = Alpine;
//Init collapse plugin
Alpine.plugin(collapse);
//Init intersect plugin
Alpine.plugin(intersect);
//Init persist plugin
Alpine.plugin(persist);
//Init store
Alpine.store("app", {
  init() {
    this.isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  },
  isDark: Alpine.$persist(false),
  isLoggedIn: Alpine.$persist(false),
});
//Start Alpine JS
Alpine.start();

import "./components";
import "./pages";

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    //Run something globally
    document.querySelectorAll('a[href^="#"]').forEach((trigger) => {
      trigger.onclick = function (e) {
        e.preventDefault();
        let hash = this.getAttribute("href");
        let target = document.querySelector(hash);
        let headerOffset = 100;
        let elementPosition = target.offsetTop;
        let offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      };
    });
  }
};
