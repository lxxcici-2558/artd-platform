import Link from 'next/link';
import { EVENTS_DATA } from '../../data/eventsData'; 
import { notFound } from 'next/navigation';

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  
  const { id } = await params;
  const event = EVENTS_DATA.find(e => e.id.toString() === id);

  if (!event) {
    notFound();
  }

  return (
    // 🔥 核心修改：pt-[160px] 
    // 强制给顶部留出 160像素 的空白，绝对不会再叠在一起了
    <main className="min-h-screen bg-black text-white flex flex-col items-center pt-[160px] pb-20 px-6">
      
      {/* 顶部导航：返回首页 */}
      <div className="w-full max-w-4xl mb-10 z-10 relative">
        <Link href="/" className="text-gray-400 hover:text-cyan-400 font-mono text-sm transition-colors flex items-center gap-2 w-fit">
          <span>←</span> BACK TO HOME
        </Link>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-0">
        
        {/* === 左侧：文字信息 === */}
        <div className="space-y-8">
          
          <div className="flex items-center gap-4">
             <span className="text-xs font-bold px-2 py-1 bg-white/10 rounded text-cyan-400 border border-cyan-500/30">
               {event.type}
             </span>
             <span className="text-xs font-mono text-gray-400">{event.date}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ textShadow: '0 0 20px rgba(34,211,238,0.3)' }}>
            {event.title}
          </h1>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base opacity-90">
            {event.description}
          </p>

          <div className="pt-4">
             {event.status === 'FULL' ? (
                <button disabled className="px-8 py-3 bg-gray-800 text-gray-500 font-bold rounded cursor-not-allowed">
                  REGISTRATION CLOSED
                </button>
             ) : (
                <a 
                  href={event.registerLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
                >
                  REGISTER NOW →
                </a>
             )}
          </div>
        </div>

        {/* === 右侧：配图 === */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>

      </div>
    </main>
  );
}