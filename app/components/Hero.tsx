'use client';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import Link from 'next/link'; 

const Hero = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black">
      
      {/* 🖼️ 背景层 z-0 */}
      <div className="absolute inset-0 z-0">
        <img 
          src="background0.png"
          alt="Hero Background"
          className="w-full h-full object-cover"
          style={{ opacity: 0.4 }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* ✨ 粒子层 z-10 */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 400, links: { opacity: 1, color: "#FCD34D" } } },
          },
          particles: {
            color: { value: "#FCD34D" },
            links: { color: "#FCD34D", distance: 150, enable: true, opacity: 0.3, width: 1.1 },
            move: { enable: true, speed: 0.9 },
            number: { density: { enable: true, area: 800 }, value: 70 },
            opacity: { value: { min: 0.1, max: 1 }, animation: { enable: true, speed: 2.5 } },
            shadow: { enable: true, color: "#FCD34D", blur: 30 },
            size: { value: { min: 3, max: 6 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-10"
      />

      {/* 📝 内容层 Container z-20 */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center pointer-events-none">
        <div className="pointer-events-auto text-center px-4 group">
          
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-amber-300 text-5xl md:text-8xl font-bold tracking-tighter mb-8 drop-shadow-[0_0_30px_rgba(252,211,77,0.6)]">
            ArTD PLATFORM
          </h1>
          
          <p className="breathing-text text-xl md:text-2xl font-light tracking-[0.2em] max-w-4xl mx-auto cursor-default text-cyan-100 transition-all duration-400">
            让我们一起探索 AI 与 数字艺术 的无限边界
          </p>

          {/* 🔥🔥🔥 修复后的按钮 🔥🔥🔥 */}
          <Link 
            href="/#gallery"
            // ✅ 核心修复：所有 class 合并为一个字符串
            className="relative inline-block mt-16 rounded-full backdrop-blur-md transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_0_30px_rgba(94,234,212,0.8),0_0_60px_rgba(216,180,254,0.6)]"
            
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)', 
              fontSize: '12px',
              padding: '10px 20px',
              color: '#ffffff',
              letterSpacing: '0.1em',
              fontWeight: 500,
              border: 'none', 
            }}
          >
            开始探索 ArTD
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;