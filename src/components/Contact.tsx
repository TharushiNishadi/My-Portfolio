import React, { useEffect, useState } from 'react';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactItems = [
    {
      id: 1,
      href: "tel:+94740620533",
      icon: Phone,
      label: "+94 740620533",
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
    },
    {
      id: 2,
      href: "mailto:hewagetn@gmail.com",
      icon: Mail,
      label: "hewagetn@gmail.com",
      color: '#ff007f',
      gradient: 'from-[#ff007f] to-[#00f5ff]',
    },
    {
      id: 3,
      href: "https://github.com/TharushiNishadi",
      icon: Github,
      label: "github.com/yourusername",
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
    },
    {
      id: 4,
      href: "https://linkedin.com/in/tharushi-nishadi-89a137267",
      icon: Linkedin,
      label: "linkedin.com/in/tharushi-nishadi-89a137267",
      color: '#ff007f',
      gradient: 'from-[#ff007f] to-[#00f5ff]',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#1a1e3a] to-[#2a2e5a] relative overflow-hidden">
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
              background: `linear-gradient(45deg, ${contactItems[index % contactItems.length].color}40, transparent)`,
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

      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-6" style={{ animation: 'bounce 2s infinite' }}>
            <Mail className="w-12 h-12 text-[#00f5ff] mx-auto" />
          </div>
          <h1 
            className="text-4xl font-black bg-gradient-to-r from-[#00f5ff] to-[#ff007f] bg-clip-text text-transparent mb-6"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          >
            Contact
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Let’s connect and build something extraordinary together
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Map Card */}
          <div className="relative bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:scale-105 transition-all duration-300 h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7929.751355127334!2d80.1198!3d6.4993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae20c8c6c9f2a3f%3A0x4b1f7a9d5bb5a0e!2sOvitigala%2C%20Mathugama%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1694987654321!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Location"
            />
          </div>

          {/* Contact Widget Card */}
          <div className="relative bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 h-[350px] flex flex-col justify-center">
            <div>
              <h3 className="text-xl font-bold text-[#00f5ff] mb-6 text-center">
                Let’s Connect
              </h3>
              <ul className="space-y-2 mx-auto max-w-md">
                {contactItems.map((item, index) => (
                  <li
                    key={item.id}
                    style={{ animation: `fadeIn 0.8s ease-out ${index * 0.1}s forwards` }}
                  >
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-base text-gray-100 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/20 hover:border-[#00f5ff]/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                      <div 
                        className="p-2 rounded-lg bg-gradient-to-br"
                        style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)` }}
                      >
                        <item.icon 
                          className="w-5 h-5" 
                          style={{ 
                            color: item.color,
                            animation: 'pulse 2s infinite'
                          }}
                        />
                      </div>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
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
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0, 0, 0); }
          40%, 43% { transform: translate3d(0, -30px, 0); }
          70% { transform: translate3d(0, -15px, 0); }
          90% { transform: translate3d(0, -4px, 0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}
      </style>
    </section>
  );
};

export default Contact;