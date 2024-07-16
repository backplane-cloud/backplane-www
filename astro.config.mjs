import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://backplane.dev",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
