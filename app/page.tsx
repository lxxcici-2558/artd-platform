'use client';

// 导入所有需要的组件
import Hero from './components/Hero';
import Events from './components/Events'; 
import Gallery from './components/Gallery'; 
import About from './components/About'; 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white">
      
      {/* 1. 英雄区域 */}
      <Hero />

      {/* 2. 内容区域：Events (左) + Gallery (右) */}
      <div className="w-full max-w-7xl mx-auto px-6 py-20">
        
        {/* 强制左右排列（Flex Row）*/}
        <div className="flex flex-row gap-12 items-start">
          
          {/* 左侧：Events (固定 280px 宽度) */}
          <div className="w-[280px] shrink-0">
             <Events /> 
          </div>

         {/* 右侧：Gallery (占据剩余空间) */}
          {/* w-full 和 min-w-[500px] 联合保障了 Gallery 有充足的空间分栏 */}
          <section className="flex-1 w-full min-w-[500px]"> 
             <Gallery />
          </section>

        </div>
      </div>
      
      {/* 3. About 区域 */}
      <About />

    </main>
  );
}