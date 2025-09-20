/* cspell:ignore Nishadi */
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// SocialIcon component
const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00f5ff] hover:text-[#ff007f] transition-all duration-300 transform hover:scale-125 hover:rotate-6"
    aria-label={label}
  >
    <Icon className="w-8 h-8" />
  </a>
);

// Typing animation hook
const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayedText, setDisplayedText] = useState('');
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
    return () => clearInterval(typing);
  }, [text, speed]);
  return displayedText;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const Hero: React.FC<{}> = () => {
  const subtitle = useTypingEffect('Software Engineering Student | Business Promotion Officer', 100);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-16 relative bg-gradient-to-br from-[#0a0f1f] via-[#1a1e3a] to-[#2a2e5a] overflow-hidden w-full">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Orbs */}
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              background: `linear-gradient(45deg, ${index % 2 === 0 ? '#00f5ff' : '#ff007f'}40, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite ${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}

        {/* Mouse Follower Effect */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-[#00f5ff]/20 via-[#ff007f]/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            filter: 'blur(40px)',
          }}
        />
      </div>

      <div className="min-h-screen flex items-center justify-center w-full px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 max-w-7xl mx-auto">
          
          {/* Left: Profile with Animated Rings + Cover */}
          <div className="w-full lg:w-1/3 flex flex-col items-center space-y-6 relative">
            <div className="relative flex items-center justify-center translate-y-[10px]">
              {/* Animated Gradient Rings */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-[#00f5ff] to-[#ff007f] opacity-40 animate-pulse-ring" />
              <div className="absolute w-96 h-96 rounded-full border-4 border-[#00f5ff]/40 animate-spin-slow" />
              <div className="absolute w-[28rem] h-[28rem] rounded-full border-4 border-[#ff007f]/30 animate-reverse-spin" />

              {/* Profile Image */}
              <img
                src="/profile.png?v=1"
                alt="H.D.T. Nishadi"
                className="relative w-72 h-72 lg:w-80 lg:h-80 object-contain z-10 drop-shadow-[0_0_20px_rgba(0,245,255,0.5)]"
              />

              {/* Bottom Cover Animation */}
              <div className="absolute bottom-0 w-72 h-16 lg:w-80 lg:h-20 bg-gradient-to-t from-[#0a0f1f] via-[#0a0f1f]/80 to-transparent rounded-b-full blur-xl animate-cover-fade z-20" />
            </div>
          </div>

          {/* Right: Text, Buttons, Socials, Stats */}
          <div className="w-full lg:w-2/3 space-y-5 text-center lg:text-left lg:pl-12 -translate-y-[35px]">
            {/* Text */}
            <div className="space-y-2 animate-slideInRight">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#ff007f] leading-tight">
                H.D.T. Nishadi
              </h1>
              <h2 className="text-xl lg:text-2xl text-[#00f5ff] font-mono min-h-[2rem]">
                {subtitle}
                <span className="animate-blink">|</span>
              </h2>
              <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
              Passionate Software Engineer skilled in Java, HTML, CSS, and JavaScript. Quick learner with a problem-solving mindset, eager to contribute to innovative projects while continuously growing technical expertise.              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button 
                className="bg-gradient-to-r from-[#00f5ff] to-[#ff007f] text-[#0a0f1f] font-bold py-3 px-6 rounded-full hover:from-[#ff007f] hover:to-[#00f5ff] transition-all duration-500 transform hover:scale-110"
                onClick={() => window.location.href = 'mailto:hewagetn@gmail.com'}
              >
                Hire Me
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-2 border-[#00f5ff] text-[#00f5ff] font-bold py-3 px-6 rounded-full hover:bg-[#00f5ff]/20 hover:shadow-[0_0_15px_#00f5ff] transition-all duration-500 transform hover:scale-110"
              >
                <a href="#contact" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Contact Me
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 justify-center lg:justify-start">
              <SocialIcon href="https://www.linkedin.com/in/tharushi-nishadi-89a137267" icon={FaLinkedin} label="LinkedIn" />
              <SocialIcon href="https://github.com/TharushiNishadi" icon={FaGithub} label="GitHub" />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { label: '1+ Years', sublabel: 'Experience' },
                { label: '5+', sublabel: 'Projects' },
                { label: '10+', sublabel: 'Skills' },
                { label: '100%', sublabel: 'Dedication' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-[#0a0f1f]/90 rounded-full border border-[#00f5ff]/50 hover:border-[#ff007f]/50 hover:bg-[#0a0f1f] transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_15px_#ff007f] animate-fadeIn"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="text-lg font-bold text-[#00f5ff]">{stat.label}</p>
                  <p className="text-sm text-white font-medium">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-20px) rotate(5deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.2; }
          100% { transform: scale(0.8); opacity: 0.4; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes cover-fade {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.6; }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-pulse-ring { animation: pulse-ring 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 12s linear infinite; }
        .animate-cover-fade { animation: cover-fade 4s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}
      </style>
    </section>
  );
};

export default Hero;