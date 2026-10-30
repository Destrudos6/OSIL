import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// 纯静态输出：构建结果在 dist/，任何静态服务器都能直接托管
export default defineConfig({
  site: 'https://osil.cn',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  adapter: cloudflare(),
});