export function navbar() {
  return {
    scrolled: false,
    height: 60,
    mobileOpen: false,
    scroll() {
      let scrollValue = window.scrollY;
      if (scrollValue >= this.height) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }
    },
    isFiltersOpen: false,
    activeFilterTab: 'tab-1',
    openFilters() {
      this.isFiltersOpen = true
    },
    closeFilters() {
      this.isFiltersOpen = false
    },
  };
}
