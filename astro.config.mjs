import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://guraman1116.github.io',
  // プロジェクトページは /SiteTest/ 配下で配信されるため base が必要
  base: '/SiteTest',
  // 静的サイトとしてビルド（デフォルト）
  output: 'static',
});
