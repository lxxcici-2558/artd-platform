'use client';

import Link from 'next/link'; 
import { getGalleryItemById } from '../data/galleryData'; 

interface WorkDetailProps {
    workId: number;
}

const WorkDetail = ({ workId }: WorkDetailProps) => {
  const work = getGalleryItemById(workId); 

  if (!work || !work.title) {
    return (
      <div className="text-center py-40 text-red-500 bg-black min-h-screen">
        404: 案例 ID {workId} 未找到。
      </div>
    );
  }

  return (
    <section 
      className="relative w-full min-h-screen bg-black"
      style={{ paddingTop: '200px', paddingBottom: '80px' }}
    >
      
      {/* 背景光效 */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 返回按钮 */}
        <div className="mb-12">
            <Link 
              href="/#gallery" 
              className="inline-flex items-center text-xs font-mono tracking-widest uppercase transition-colors group"
              style={{ color: '#ffffff', fontWeight: 'bold' }} 
            >
              <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
              Back to Gallery
            </Link>
        </div>

        {/* === 头部信息 === */}
        <div className="space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
            {work.title}
          </h1>
          <p className="text-xl text-gray-400 italic font-medium">
            By <span className="text-cyan-200">{work.artist}</span>
          </p>
        </div>

        {/* === 主图 === */}
        <div 
          className="relative aspect-[16/7] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl mb-16"
          style={{ 
            backgroundImage: `url(${work.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* === 详情布局 === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* 左侧：信息卡片 */}
          <div 
            className="lg:col-span-1 p-8 rounded-xl border border-white/10 h-fit"
            style={{ 
              background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {/* 🔥 修改点：移除了 border-b border-white/10 pb-4 */}
            <h3 className="text-lg font-bold text-white mb-6">
              PROJECT INFO
            </h3>
            
            <dl className="space-y-8 text-sm text-gray-300">
              <div>
                <dt className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Timeline</dt>
                <dd className="font-medium text-white">
                  {work.duration || '2025'}
                </dd>
              </div>
              <div>
                <dt className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-2">Client</dt>
                <dd className="font-medium text-white">
                  {work.client || 'Internal Project'}
                </dd>
              </div>
              
              {/* Tech Stack */}
              <div>
                <dt className="text-gray-500 font-mono text-xs tracking-widest uppercase mb-4">
                  Tech Stack
                </dt>
                
                <dd style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}> 
                  {(work.techStack || []).map((tech, index) => (
                    <span 
                        key={index} 
                        className="text-[11px] text-gray-300 font-mono transition-colors hover:bg-white/20"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255, 255, 255, 0.08)', 
                            padding: '6px 12px', 
                            borderRadius: '9999px',
                            cursor: 'default',
                            border: 'none'
                        }}
                    >
                      <span 
                        style={{
                            display: 'block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#22d3ee', 
                            marginRight: '8px', 
                            boxShadow: '0 0 5px #22d3ee' 
                        }}
                      />
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          {/* 右侧：详细描述 */}
          <div className="lg:col-span-2 space-y-8 text-lg text-gray-300 leading-relaxed">
            <h3 className="text-2xl font-bold text-white mb-4">About the Project</h3>
            <p className="whitespace-pre-wrap">
              {work.description || '暂无详细描述...'}
            </p>
            
            {work.videoUrl && (
                 <div className="pt-8">
                    <h3 className="text-xl font-bold text-white mb-4">Process / Demo</h3>
                    <div className="w-full aspect-video bg-gray-900 rounded-lg flex items-center justify-center border border-white/10 text-gray-600">
                        [ Video Placeholder for {work.title} ]
                    </div>
                 </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkDetail;