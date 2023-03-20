import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import Unfonts from 'unplugin-fonts/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    Unfonts({
      google: {
        families: [
          'Inter',
        ],
      },
    })
  ]
});
