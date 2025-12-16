// 1. 定义数据结构
export type EventItem = {
  id: number;
  date: string;
  title: string;
  type: 'WORKSHOPS' | 'NEWS & EVENTS' | 'AWARDS'; 
  status: 'OPEN' | 'FULL' | 'SOON';
  description: string; // 📝 新增：详情页的文字介绍
  image: string;       // 🖼️ 新增：详情页的配图
  registerLink: string;// 🔗 新增：详情页里的最终报名链接
};

// 2. 你的活动数据库
export const EVENTS_DATA: EventItem[] = [
  { 
    id: 1, 
    date: 'DEC 15, 2025', 
    title: 'Generative AI Masterclass', 
    type: 'WORKSHOPS', 
    status: 'OPEN',
    description: 'Explore the boundaries of creativity with our intensive Generative AI Masterclass. Learn from industry leaders about Stable Diffusion, Midjourney workflows, and how to integrate AI into your design process. This 3-day workshop covers everything from prompt engineering to fine-tuning models.',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485', // 示例配图
    registerLink: 'https://lu.ma/example-workshop'
  },
  { 
    id: 2, 
    date: 'JAN 20, 2026', 
    title: 'Future Media Awards Gala', 
    type: 'AWARDS', 
    status: 'SOON',
    description: 'Celebrating the most innovative minds in digital art and interactive media. Join us for a night of inspiration, networking, and recognition. Categories include Best Immersive Experience, AI Artistry, and Interactive Installation.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865',
    registerLink: '#' 
  },
  { 
    id: 3, 
    date: 'MAR 10, 2026', 
    // 👇 修改点：这里的标题改得很长，用来测试自动换行
    title: 'Global Design Summit Report: The Future of Human-Computer Interaction & AI Aesthetics', 
    type: 'NEWS & EVENTS', 
    status: 'FULL',
    description: 'A comprehensive review of this years Global Design Summit...',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
    registerLink: '#' 
  },
];