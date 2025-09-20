import React, { useEffect, useState } from 'react';
import { Briefcase, BarChart2, Database } from 'lucide-react';

const Experience: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      title: 'Business Promotion Officer',
      company: 'Allianz Lanka Insurance (Pvt) Ltd',
      period: '2024 - Present',
      description: 'Dynamic Business Promotion Officer with proven expertise in the insurance sector, driving growth through innovative marketing strategies and impactful promotional campaigns. Adept at building strong client relationships, enhancing brand visibility, and delivering measurable business results.Recognized for blending creativity with analytical insight to boost engagement and maximize market opportunities.',
      icon: BarChart2,
      color: '#00f5ff',
    },
    {
      title: 'Data Entry Assistant',
      company: 'Kuweni Tex (Pvt) Ltd',
      period: '2023 Sep',
      description: 'Detail-oriented Data Entry Assistant with proven experience in accurately entering, organizing, and managing large volumes of data. Skilled in using data entry software and productivity tools with a strong focus on accuracy, efficiency, and confidentiality. Recognized for excellent attention to detail, time management, and maintaining data integrity under tight deadlines.',
      icon: Database,
      color: '#ff007f',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#1a1e3a] to-[#2a2e5a] relative overflow-hidden">
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
              background: `linear-gradient(45deg, ${experiences[index % experiences.length].color}40, transparent)`,
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

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6" style={{ animation: 'bounce 2s infinite' }}>
            <Briefcase className="w-16 h-16 text-[#00f5ff] mx-auto" />
          </div>
          <h1 
            className="text-6xl font-black bg-gradient-to-r from-[#00f5ff] to-[#ff007f] bg-clip-text text-transparent mb-6"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          >
            Work Experience
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            My professional journey in business and technology
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Timeline Line */}
          <div className="absolute h-full w-1 bg-gradient-to-b from-[#00f5ff] to-[#ff007f] z-0" />

          <div className="flex flex-col items-center w-full max-w-2xl">
            {experiences.map((exp, index) => (
              <div 
                key={exp.title} 
                className="mb-12 w-full relative"
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#00f5ff] rounded-full border-4 border-[#0a0f1f] z-10"
                  style={{ animation: 'pulse 1.5s infinite' }}
                />

                {/* Job Card */}
                <div 
                  className="mt-8 w-full p-8 bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl border border-white/10 hover:scale-105 transition-all duration-300"
                  style={{ animation: `fadeIn 0.8s ease-out ${index * 0.2}s forwards` }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div 
                      className="p-2 rounded-lg bg-gradient-to-br"
                      style={{ background: `linear-gradient(135deg, ${exp.color}20, ${exp.color}40)` }}
                    >
                      <exp.icon 
                        className="w-8 h-8" 
                        style={{ 
                          color: exp.color,
                          animation: 'pulse 2s infinite'
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-md text-gray-300">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 italic">{exp.period}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
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

export default Experience;