'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer 
      className="w-full bg-black pb-12"
      // 保持你刚才满意的顶部间距
      style={{ paddingTop: '100px' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* === 第一部分：链接与版权 === */}
        <div 
          className="flex flex-col items-end text-right space-y-12 mb-20"
          
          // 🔥🔥🔥 这里是你需要调整的地方！🔥🔥🔥
          // paddingRight: 控制内容离屏幕右边缘的距离
          // 现在的 '120px' 意味着：往左推 120 像素
          // 👉 想要更靠左？ 把 120 改大 (比如 '200px')
          // 👉 想要更靠右？ 把 120 改小 (比如 '50px')
          style={{ paddingRight: '100px' }}
        > 
          
          {/* Links */}
          <div className="flex flex-wrap justify-end gap-12 md:gap-20">
            
            {/* Platform */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Platform</h4>
              <ul className="space-y-1.5 text-xs text-gray-500 font-light flex flex-col items-end">
                <li><Link href="/#gallery" className="hover:text-cyan-400 transition-colors">Gallery</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">Artists</Link></li>
                <li><Link href="#" className="hover:text-cyan-400 transition-colors">AI Tools</Link></li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Social</h4>
              <ul className="space-y-1.5 text-xs text-gray-500 font-light flex flex-col items-end">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter / X</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Little Red Book</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">Contact</h4>
              <ul className="space-y-1.5 text-xs text-gray-500 font-light flex flex-col items-end">
                <li><a href="mailto:hello@artd.co" className="hover:text-cyan-400 transition-colors">hello@artd.co</a></li>
                <li className="text-gray-700 select-none">Beijing, CN</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="space-y-2">
            <h2 className="text-lg font-bold tracking-tighter text-white">ArTD</h2>
            <p className="text-[10px] text-gray-600 font-mono leading-relaxed">
              © 2025 ArTD Platform. All rights reserved.<br />
              <span className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors">PRIVACY POLICY</span> 
              <span className="mx-2 text-gray-800">|</span> 
              <span className="text-gray-800 hover:text-gray-500 cursor-pointer transition-colors">TERMS OF USE</span>
            </p>
          </div>

        </div>

        {/* === 第二部分：底部居中 Logo === */}
        <div className="pt-12 flex justify-center items-center">
          <img 
            src="/logo lxx 00.png" 
            alt="ArTD Bottom Logo"
            style={{ height: '60px', width: 'auto' }}
            className="opacity-40 hover:opacity-100 transition-opacity duration-500" 
          />
        </div>
        
        {/* 底部署名 */}
        <div className="text-center mt-4">
           <span className="text-[9px] text-gray-800 font-mono">DESIGNED BY ArTD LAB</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;