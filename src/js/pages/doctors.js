export function doctors() {
  return {
    activeCategory: "all",
    resetScroll() {
      window.scrollTo({ top: 350, behavior: "smooth" });
      return false;
    },
  };
}
