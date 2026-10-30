# OSIL 官网（Astro）

## 目录
- `src/data/site.ts`：导航、页脚、站点信息
- `src/data/home.ts`：首页所有文案和数据（包括控制台示意里的全部文字：面板标题、侧边栏菜单、状态角标、图例等），改字只改这里；组件里不写死文字，只留占位符
- `src/styles/tokens.css`：颜色、字体、圆角、阴影等设计变量（改风格只改这里）
- `src/styles/global.css`：全站通用样式
- `src/components/ui/`：可复用的基础组件（Button、Card、Eyebrow、SectionHeading、Section、Accordion、Brand、Mark、Segmented）
- `src/components/console/`：首页控制台示意的各个小组件
- `src/components/art/`：研究方向卡片里的插图
- `src/components/sections/`：页面区块（Nav、Hero、Pipeline、Directions……）
- `src/pages/index.astro`：首页，按顺序拼装区块

## 常用命令
- `npm run dev`：本地预览（改了自动刷新）
- `npm run build`：生成静态网站到 `dist/`，服务器直接托管 `dist/`
