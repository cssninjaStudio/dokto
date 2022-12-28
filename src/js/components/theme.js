export function theme() {
  return {
    toggleTheme() {
      this.$store.app.isDark = !this.$store.app.isDark;
    },
  };
}
