'use client';

import Link from 'next/link';
import { EVENTS_DATA } from '../data/eventsData';

const Events = () => {
  
  const getTagStyle = (type: string) => {
    if (type === 'WORKSHOPS') return { backgroundColor: '#FCD34D', color: '#000000', boxShadow: '0 0 10px rgba(252, 211, 77, 0.4)' };
    if (type === 'NEWS & EVENTS') return { backgroundColor: '#D8B4FE', color: '#000000', boxShadow: '0 0 10px rgba(216, 180, 254, 0.4)' };
    return { backgroundColor: '#67E8F9', color: '#000000', boxShadow: '0 0 10px rgba(103, 232, 249, 0.4)' };
  };

  return (
    <aside className="w-[280px] min-w-[280px] shrink-0 z-10">
      <div className="sticky top-32 space-y-8">
        
        {/* === 标题区 === */}
        <div className="py-2">
          <h2 className="text-2xl font-bold tracking-widest mb-2 text-white" style={{ textShadow: '0 0 10px rgba(34,211,238,0.5)' }}>
            UPCOMING
          </h2>
          <p className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase">
            Events & Opportunities
          </p>
        </div>
        
        {/* === 列表区 === */}
        <div className="space-y-6">
          {EVENTS_DATA.map((event) => (
            <div 
              key={event.id} 
              className="group relative p-5 rounded-xl border border-white/20 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1 cursor-pointer"
              style={{ 
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)'
              }}
            >
              <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>

              <div 
                className="mb-3"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <span 
                  className="text-[9px] font-bold px-2 py-0.5 rounded uppercase"
                  style={getTagStyle(event.type)}
                >
                  {event.type}
                </span>
                <div style={{ width: '15px' }}></div>
                <span className="text-[10px] text-gray-300 font-mono tracking-wider opacity-80">
                  {event.date}
                </span>
              </div>

              {/* 🔥 核心修改区：标题升级 🔥 */}
              <Link 
                href={`/events/${event.id}`} 
                className="block mb-4 no-underline"
              >
                <h3 
                  className="font-bold transition-all duration-300 leading-relaxed 
                             whitespace-normal break-words
                             origin-left
                             group-hover:!text-[#FCD34D] 
                             group-hover:scale-105 
                             group-hover:drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]"
                  
                  // 👇👇👇 你的控制台 👇👇👇
                  style={{ 
                    color: 'white',    // 1. 锁死白色！不论是否点击过，必须是白
                    fontSize: '16px'   // 2. 只有改这个数字，大小才会变！(比如改成 18px 或 12px)
                  }}
                >
                  {event.title}
                </h3>
              </Link>

              <div className="flex justify-between items-center border-t border-white/10 pt-3">
                <span className={`text-[10px] font-mono ${event.status === 'FULL' ? 'text-red-400' : 'text-cyan-400'}`}>
                  {event.status === 'FULL' ? '● WAITLIST' : '● OPEN'}
                </span>

                <Link 
                  href={`/events/${event.id}`}
                  className="text-[10px] font-bold flex items-center gap-1 px-3 py-1 rounded transition-all border border-white/30 hover:bg-white hover:text-black hover:border-white"
                  style={{ color: '#ffffff' }}
                >
                  MORE INFO →
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Events;