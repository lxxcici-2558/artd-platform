'use client';

import Link from 'next/link';
import { GALLERY_DATA } from '../data/galleryData'; 

const Gallery = () => {
  return (
    // 1. 容器：保持 flex-1 和 min-w-0，这是防止布局崩坏的关键
    <section className="flex-1 min-w-0"> 
      
      {/* === 头部 === */}
      <div className="flex justify-between items-end mb-8 py-2">
         <div>
            <h2 
              id="gallery" 
              className="text-2xl font-bold tracking-widest mb-2 text-white scroll-mt-32"
              style={{ textShadow: '0 0 10px rgba(34,211,238,0.5)' }}
            >
              SELECTED WORKS
            </h2>
            <p className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">
              Curated Digital Experiences
            </p>
         </div>

         <span className="text-xs text-gray-500 font-mono mb-1 hidden sm:block">
            SCROLL TO EXPLORE ↓
         </span>
      </div>

      {/* === 网格内容区 === */}
      {/* 🔥 核心修复：
         删掉了 'grid-cols-1 sm:grid-cols-2'
         直接改回代码 A 的 'grid-cols-2'
         👉 这就是“死命令”，强制两列！
      */}
      <div className="grid grid-cols-2 gap-8">
        
        {GALLERY_DATA.map((item) => (
          <Link key={item.id} href={`/work/${item.id}`} className="block group">
            <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-colors rounded-sm">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-cyan-400 text-sm font-mono translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.artist}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Gallery;