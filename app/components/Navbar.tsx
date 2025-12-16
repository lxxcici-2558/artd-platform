'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
// 🔥 1. 引入 Clerk 的组件
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `/#${id}`);
    }
  };

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw', 
        height: '80px', 
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.9)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      
      {/* === 左侧 Logo === */}
      <div 
        style={{
          position: 'absolute',
          left: '40px',
          top: '50%',
          transform: 'translateY(-50%)', 
          zIndex: 20
        }}
      >
        <Link href="/">
          <img 
            src="/logo lxx 00.png" 
            alt="ArTD Logo" 
            style={{ height: '70px', width: 'auto' }} 
          />
        </Link>
      </div>

      {/* === 中间 导航链接 === */}
      <div 
        className="hidden md:flex" 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '100px',
          zIndex: 18
        }}
      >
        <Link 
          href="/" 
          style={{ color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 'bold', letterSpacing: '2px' }}
        >
          首页 HOME
        </Link>
        
        <a 
          href="/#gallery" 
          onClick={(e) => scrollToSection(e, 'gallery')}
          style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' }}
        >
          案例 GALLERY
        </a>
        
        <a 
          href="/#about" 
          onClick={(e) => scrollToSection(e, 'about')}
          style={{ color: '#fff', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', letterSpacing: '2px', cursor: 'pointer' }}
        >
          关于 ABOUT
        </a>
      </div>

      {/* === 右侧 登录按钮 (Clerk 接管区域) === */}
      <div 
        style={{
          position: 'absolute',
          right: '40px', 
          top: '50%',
          transform: 'translateY(-50%)', 
          zIndex: 20
        }}
      >
        {/* 情况 A: 用户未登录 (SignedOut) -> 显示登录按钮 */}
        <SignedOut>
            {/* mode="modal" 表示点击后弹窗，不跳转页面 */}
            <SignInButton mode="modal">
                <button 
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'transform 0.2s', // 加个小动画
                  }}
                  // 鼠标放上去稍微变大一点
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  登录 Login
                </button> 
            </SignInButton>
        </SignedOut>

        {/* 情况 B: 用户已登录 (SignedIn) -> 显示用户头像 */}
        <SignedIn>
            {/* UserButton 是 Clerk 自带的圆圆的头像，点击可以退出登录 */}
            <UserButton 
                appearance={{
                    elements: {
                        avatarBox: "w-9 h-9 border border-white/20" // 稍微调一下样式匹配我们的黑金风
                    }
                }}
            />
        </SignedIn>

      </div>

    </nav>
  );
};

export default Navbar;