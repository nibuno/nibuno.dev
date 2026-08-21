import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://nibuno.dev",
  output: "static",
  integrations: [
    sitemap({
      // つくったものの一覧は projects.ts の hasProjectsIndex が false のあいだ
      // サイトのどこからもリンクしていない。出していない導線を検索結果に載せない
      filter: (page) => page !== "https://nibuno.dev/projects/",
    }),
  ],
});
