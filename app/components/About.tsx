'use client';

const STATS = [
  { label: 'Years Experience', value: '05+' },
  { label: 'Projects Completed', value: '40+' },
  { label: 'Design Awards', value: '12' },
  { label: 'Happy Clients', value: '100%' },
];

const About = () => {
  return (
    <section 
      id="about" 
      className="relative w-full scroll-mt-40 bg-gradient-to-b from-black to-[#050505]"
      style={{ 
        paddingTop: '150px', 
        paddingBottom: '50px' 
      }}
    >
      
      {/* 背景光效 */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div 
        className="max-w-[1400px] mx-auto relative z-10"
        style={{ 
            paddingLeft: '100px', 
            paddingRight: '100px' 
        }}
      >
        
        {/* 上部分：文字介绍 */}
        <div className="mb-20 space-y-8 max-w-4xl">
          
          {/* 白色短线 */}
          <div 
            style={{
              width: '140px',       
              height: '2px',        
              backgroundColor: '#ffffff', 
              marginBottom: '24px', 
              opacity: 0.8          
            }}
          />

          <span className="text-cyan-400 font-mono tracking-widest text-sm block">
            // Who is ArTD?
          </span>
          
          {/* 🔥🔥🔥 核心修改区 🔥🔥🔥 */}
          <h2 
            className="font-extrabold leading-tight text-white"
            style={{
              // ✅ 1. 字体大小控制 (在这里改！)
              // 这里改了之后，下面两行字都会一起变大变小
              fontSize: '24px', 
            }}
          >
            {/* 第一行：保持纯白，为了衬托下面的渐变 */}
            Bridging the gap between <br />
            
            {/* 第二行：高亮渐变 */}
            <span 
              style={{
                // ✅ 2. 经典的青紫渐变 (恢复以前的配色)
                // 只有这部分是渐变的，对比度最强！
                backgroundImage: 'linear-gradient(to right, #22d3ee, #d8b4fe)',
                
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                // 加一点发光，让它看起来像霓虹灯
                filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.5))'
              }}
            >
              Art & Technology.
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            我们是一个专注于新媒体艺术与设计教育的先锋平台。ArTD 不仅仅展示作品，更致力于探索代码与美学的边界。通过 Arduino、TouchDesigner 和 AI 技术，我们将想象力转化为可感知的数字现实。
          </p>

          <div className="pt-4">
            <p className="font-handwriting text-2xl text-white/90 italic">
              "Code is the new brush, Screen is the new canvas."
            </p>
          </div>
        </div>

        {/* 下部分：Stats 数据展示 */}
        <div 
          className="w-full rounded-3xl p-12 md:p-20 transition-all duration-500"
          style={{ 
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(40px)', 
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)'
          }}
        >
          {/* 布局保持不变 */}
          <div className="grid grid-cols-2 gap-16 md:gap-24">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-5xl md:text-7xl font-bold text-white font-mono tracking-tighter" style={{ textShadow: '0 0 20px rgba(255,255,255,0.1)' }}>
                  {stat.value}
                </h3>
                <div className="h-0.5 w-12 bg-cyan-500/50 rounded-full"></div>
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;