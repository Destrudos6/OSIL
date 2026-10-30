import { defineConfig } from 'astro/config';

// 纯静态输出：构建结果在 dist/，任何静态服务器都能直接托管
export default defineConfig({
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
