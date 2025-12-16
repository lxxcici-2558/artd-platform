export type GalleryItem = {
  id: number;
  title: string;
  artist: string;
  image: string;
  // 详情页新增字段
  description: string;
  techStack: string[];
  duration: string;
  client: string;
  videoUrl?: string; // 可选的视频链接
};

// 包含 6 个案例的清单
export const GALLERY_DATA: GalleryItem[] = [
  { 
    id: 1, 
    title: 'Neural Landscape', 
    artist: 'Team Lab Clone', 
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b',
    description: "《神经景观》是一项大型沉浸式装置，利用生成对抗网络（GANs）实时渲染流动的、非欧几里得的数字景观。参观者通过肢体动作与光线互动，改变环境的色彩和形态，达到人机共生的审美体验。",
    techStack: ['TouchDesigner', 'GAN (StyleGAN)', 'Kinect V2'],
    duration: '2025.01 - 2025.03',
    client: 'Future Art Museum'
  },
  { 
    id: 2, 
    title: 'Data Pulse', 
    artist: 'Ryoji Ikeda Style', 
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    description: "《数据脉冲》通过极简主义的视觉语言，将实时网络数据转化为令人震撼的声光体验。它探讨了信息流的密度和速度对现代感知的影响。",
    techStack: ['Processing', 'Pure Data', 'Custom LED Panel'],
    duration: '2024.11 - 2025.01',
    client: 'Private Collector'
  },
  { 
    id: 3, 
    title: 'Interactive Void', 
    artist: 'UVA', 
    image: 'https://imagedelivery.net/b5EBo9Uo-OK6SM09ZTkEZQ/MVsFBQR9PUfgW7NsiLpm4f/width=3840,quality=80',
    description: "一个黑暗房间内的光影互动体验，利用高性能激光投影和传感器，创造出深邃、无限的视觉错觉空间。",
    techStack: ['Laser Projection', 'Unity', 'Lidar Sensor'],
    duration: '2025.04 - 2025.06',
    client: 'International Design Festival'
  },
  { 
    id: 4, 
    title: 'Generative Flora', 
    artist: 'Refik Anadol Style', 
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853',
    description: "以城市环境数据为输入，通过机器学习算法创造出抽象的、不断进化的数字花卉形态，象征着数字生态的生命力。",
    techStack: ['Python', 'TensorFlow', 'p5.js'],
    duration: '2025.07 - 2025.09',
    client: 'Public Art Commission'
  },
  {
    id: 5,
    title: 'Neon Dreams: Cyberpunk City',
    artist: 'Environmental Design',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086',
    description: "一套赛博朋克风格的建筑投影映射，结合霓虹灯光和动态图形，将普通建筑转化为充满未来感的数字城市景观。",
    techStack: ['MadMapper', 'After Effects', 'Large Format Projectors'],
    duration: '2025.10 - 2025.11',
    client: 'City Development Group'
  },
  {
    id: 6,
    title: 'Future Interfaces Showcase',
    artist: 'UI/UX Concept',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e',
    description: "一个关于人机交互界面的未来概念展示。利用手势识别和增强现实技术，展示下一代无屏幕操作系统的可能性。",
    techStack: ['Unity AR', 'Leap Motion', 'HoloLens'],
    duration: '2025.12 - 2026.02',
    client: 'Tech Innovation Lab'
  }
];

export const getGalleryItemById = (id: number) => {
  return GALLERY_DATA.find(item => item.id === id);
};