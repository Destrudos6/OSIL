// 全站信息：导航、页脚、SEO。改这里即可，不用动组件。
export const site = {
  name: 'OSIL',
  fullName: 'Open Super Intelligence Lab',
  title: 'OSIL — Open Super Intelligence Lab',
  description: 'OSIL（Open Super Intelligence Lab）致力于开源 Super Intelligence 技术的研发与普及，希望超级人工智能普惠每一个人。所有研究成果毫无保留地开源。',
  slogan: '让超级智能，普惠每一个人。',
  domain: 'osil.cn',
  copyright: '© 2026 OSIL. All rights reserved.',
};

export const nav = {
  links: [
    { label: '研究方向', href: '#directions' },
    { label: '为什么是 Agent', href: '#why' },
    { label: '进展', href: '#road' },
    { label: '常见问题', href: '#faq' },
  ],
  cta: { label: '加入实验室', href: '#join' },
};

export const footer = [
  { title: '研究', links: [
    { label: 'Agent Runtime', href: '#directions' },
    { label: 'Applied Agents', href: '#directions' },
    { label: 'Trust & Eval', href: '#directions' },
  ] },
  { title: '实验室', links: [
    { label: '为什么是 Agent', href: '#why' },
    { label: '进展', href: '#road' },
    { label: '常见问题', href: '#faq' },
  ] },
  { title: '加入', links: [{ label: '首批成员招募', href: '#join' }] },
];
