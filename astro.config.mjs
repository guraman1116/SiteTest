import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  // 静的サイトとしてビルド（デフォルト）
  output: 'static',
});
