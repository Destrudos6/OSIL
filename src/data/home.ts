// 首页文案与数据。标题里的 <b>…</b> 会显示为加粗的无衬线强调字。
export const hero = {
  pill: { tag: '2026', text: 'OSIL 实验室正式启动，首批成员招募中' },
  title: '我们构建能 <b>把事做完</b> 的智能体',
  lead: 'OSIL 致力于开源 Super Intelligence 技术的研发与宣传。我们相信超级人工智能应该普惠每一个人——所以研究成果，毫无保留开源。',
  // Linear 式 hero 右下角“新”链接：粗体标签 + 灰字 + 箭头
  more: { tag: '新', label: '进展', href: '#road' },
  primary: { label: '看看我们在做什么', href: '#directions' },
  secondary: { label: '和我们聊聊', href: '#join' },
  note: '界面为概念示意，展示 OSIL 正在构建的多 Agent 协作形态。',
};

export const consoleDemo = {
  // ── TopBar.astro（顶部栏）──
  title: '实验室总览',
  subtitle: '最近 24 小时 · 4 个 Agent 协作',
  search: '搜索任务',            // 搜索框占位文字
  searchKey: '⌘K',               // 搜索框右侧快捷键
  avatar: 'OS',                  // 右上角头像字母
  // ── Sidebar.astro（侧边栏）──
  brand: 'OSIL Lab',             // 侧边栏品牌名（图标 Mark 在组件里）
  menu: [                        // 侧边栏菜单，icon 对应组件里的 SVG
    { icon: 'grid', label: '总览' },
    { icon: 'list', label: '任务' },
    { icon: 'clock', label: '运行记录' },
  ],
  agentsHeading: 'Agents',       // Agent 列表上方的小标题
  statusAll: '全部 Agent 运行中', // 底部状态条主文字
  statusUpdated: '刚刚更新',      // 底部状态条次要文字
  // ── ActivityChart.astro（折线图图例）──
  legend: [
    { label: '已交付', color: 'var(--fg)' },
    { label: '已开始', color: 'var(--blue)' },
  ],
  // ── Console.astro（面板标题/说明与分段选项）──
  panels: {
    activity: { title: 'Agent 活动', desc: '开始的任务 vs. 已交付' },
    tasks: { title: '最近任务', desc: '每个结果都附带可检查的过程' },
  },
  ranges: ['24h', '7d', '30d'],  // 活动图的时间范围切换
  ariaLabel: 'OSIL Agent 控制台示意',
  // ── TaskList.astro（状态角标文字，键对应 tasks 里的 status）──
  taskStatus: { done: '完成', run: '运行中', review: '待审' },
  // ── 数据 ──
  agents: [
    { name: 'Planner', status: 'ok' },
    { name: 'Researcher', status: 'ok' },
    { name: 'Coder', status: 'busy' },
    { name: 'Reviewer', status: 'ok' },
  ],
  kpis: [
    { label: '完成任务', count: 128, trend: '↑ 今日 +17' },
    { label: '工具调用', count: 2416, trend: '↑ 平稳' },
    { label: '一次通过率', count: 91, suffix: '%', trend: '↑ 3.2%' },
    { label: '平均交付', value: '4.6', unit: ' 分钟', trend: '↓ 0.8' },
  ],
  tasks: [
    { icon: 'RS', title: '整理 12 篇论文，写成带引用的综述', agent: 'Researcher', status: 'done' },
    { icon: 'CD', title: '给微信接入层补上会话隔离与测试', agent: 'Coder', status: 'run' },
    { icon: 'PL', title: '把“部署 Agent 服务”拆成 9 个子任务', agent: 'Planner', status: 'done' },
    { icon: 'RV', title: '检查数据分析脚本的结论是否成立', agent: 'Reviewer', status: 'review' },
  ],
  // [样式, 命令, 内容]；样式：c 注释 / k 蓝色 / ok 绿色 / '' 普通
  log: [
    ['c', '# coder · 会话隔离', ''],
    ['k', 'plan  ', '拆分为 4 步'],
    ['', 'read  ', 'src/channels/weixin/*.mjs'],
    ['', 'edit  ', 'session-map.mjs (+42 −7)'],
    ['', 'run   ', 'npm test'],
    ['ok', 'pass  ', '31 / 31 测试通过'],
    ['k', 'check ', '回归检查：无破坏性改动'],
    ['ok', 'done  ', '已提交，等待 Reviewer'],
  ],
};

export const strip = {
  eyebrow: '一个实验室，三条研究主线',
  names: ['Agent Runtime', 'Applied Agents', 'Trust & Eval'],
};

export const pipeline = {
  title: '从一句话需求，到 <b>完成的工作</b>',
  // 区块头右侧描述（FeatureHead 用）
  desc: '从理解、规划到交付，每一步都被记录：过程可回放、中间产物可检查、失败自动换路重试。',
  steps: [
    { title: '理解', desc: '弄清目标、约束<br>和“做完”的标准' },
    { title: '规划', desc: '拆成可执行、<br>可回滚的步骤' },
    { title: '行动', desc: '调用代码、搜索、<br>文件与外部工具' },
    { title: '校验', desc: '自查结果，<br>失败就换路重试' },
    { title: '交付', desc: '给出文件和结论，<br>而不只是建议' },
  ],
};

export const directions = {
  eyebrow: '研究方向',
  title: '三条主线，<b>一个目标</b>：<br>让 Agent 真正可用',
  sub: '我们不做又一个需要人盯着的聊天工具。每条主线都围绕同一件事：给 Agent 一个目标，拿回一个可以直接用的结果。',
  items: [
    { art: 'runtime', title: 'Agent Runtime', desc: '规划、长期记忆、工具调用与多 Agent 协作。把能让 Agent 稳定跑上几小时的底层能力做扎实。', tag: '框架 · 工具链' },
    { art: 'applied', title: 'Applied Agents', desc: '把 Agent 用到学习、科研、开发和日常自动化里：写综述、跑分析、修代码、管服务器，解决身边真实的问题。', tag: '落地 · 场景' },
    { art: 'trust', title: 'Trust & Eval', desc: '让 Agent 的每一步可控、可解释、可评估。我们搭评测集、记录轨迹，用数据说明它什么时候值得信任。', tag: '可靠 · 安全 · 评测' },
  ],
} as const;

export const compare = {
  eyebrow: '为什么是 Agent', // 当前未渲染（Statement 无小标题），保留备用
  title: '聊天工具给你建议，<br><b>Agent 给你结果。</b>',
  prompt: '帮我把这学期的实验数据分析一下，出个报告',
  chat: {
    label: '普通聊天助手',
    replies: ['好的！你可以先用 pandas 读取数据，然后做描述统计，再用 matplotlib 画图。下面是一些示例代码……'],
    after: '（剩下的，还得你自己来）',
  },
  agent: {
    label: 'OSIL 想做的 Agent',
    replies: ['读完 6 个数据文件，清洗了 38 条异常记录，跑了回归和显著性检验，图表和结论都写进报告了。第 3 组样本偏少，结论里标注了。'],
    files: ['report.pdf', 'charts.zip', 'analysis.ipynb'],
  },
};

export const letters = {
  eyebrow: '关于名字',
  title: '四个字母，<b>就是我们的路线图</b>',
  items: [
    { letter: 'O', word: 'Open', desc: '研究成果毫无保留，代码、数据、踩过的坑，全部开源。' },
    { letter: 'S', word: 'Super', desc: '不止于能用，持续抬高能力上限。' },
    { letter: 'I', word: 'Intelligence', desc: '理解目标，自主规划，自己行动。' },
    { letter: 'L', word: 'Lab', desc: '小步快跑，用实验而不是口号说话。' },
  ],
};

export const roadmap = {
  eyebrow: '进展',
  title: '刚刚起步，<br><b>目标很具体</b>',
  sub: '我们是个小团队，刚刚起步，但相信只要有热爱，困难不会阻拦我们的进步。这里写的是正在做和接下来要做的事，完成一项更新一项。',
  // active: true 表示当前阶段，会高亮并显示 badge
  stages: [
    { key: 'STAGE 0', title: '搭好自己的 Agent 基础设施', desc: '部署可长期运行的 Agent 环境，打通模型接口、工具与多渠道接入。', active: true, badge: '进行中' },
    { key: 'STAGE 1', title: '第一个开源项目', desc: '完成至少 1 个可公开演示的 Agent 项目，代码在 GitHub 开源。' },
    { key: 'STAGE 2', title: '评测与文档', desc: '为自己的 Agent 建评测集，整理开发文档与经验总结。' },
    { key: 'STAGE 3', title: '分享与成长', desc: '举办技术分享，让更多同学一起动手做 Agent。' },
  ],
};

export const faq = {
  title: '常见问题',
  sub: '还有别的想问的？直接来找我们聊。',
  items: [
    { q: 'OSIL 是什么？', a: 'OSIL（Open Super Intelligence Lab）致力于开源 Super Intelligence 技术的研发与宣传，希望超级人工智能普惠每一个人。所有研究成果，我们都会毫无保留地开源。', open: true },
    { q: '名字怎么读？', a: '读作 “OH-sil”。SI 是 Super Intelligence；我们觉得再加一个 AI 有点多余。' },
    { q: '谁可以加入？', a: '写代码的、做产品和设计的、喜欢研究的，或者单纯对 Agent 好奇的都可以。有热爱、愿意动手，剩下的可以边做边学。' },
    { q: '需要什么基础？', a: '会一点 Python 或 JavaScript 会更顺手，但不是门槛。我们更看重好奇心和把事情做完的习惯，剩下的可以边做边学。' },
    { q: '做出来的东西开源吗？', a: '毫无保留地开源。代码、数据、文档和经验总结都会公开，名字里的 O 就是这个意思。' },
    { q: '用的是哪些模型？', a: '我们不绑定单一模型，会在 DeepSeek、Qwen、GLM、Kimi 等模型之间按任务选择，并用评测数据决定哪个更合适。' },
  ],
};

export const finalCta = {
  title: '一起构建 <b>会干活的软件</b>',
  sub: 'OSIL 首批成员招募中。无论你擅长什么，只要有热爱、想亲手做出真正有用的 Agent，就来聊聊。',
  // Linear 式双按钮：主（深色）+ 次（浅色）。邮箱是占位，换成真实地址。
  buttons: {
    primary: { label: '和我们聊聊', href: 'mailto:hello@osil.cn' },
    secondary: { label: '了解更多', href: '#faq' },
  },
};
