/* cspell:ignore Nishadi */
import React, { useEffect, useState } from 'react';
import { User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const About: React.FC<{}> = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mouse movement handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // IntersectionObserver for visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#2a2e5a] via-[#1a1e3a] to-[#0a0f1f] relative overflow-hidden">
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
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.5, 1, 0.5] }}
            transition={{ duration: Math.random() * 5 + 5, repeat: Infinity, delay: Math.random() * 2, ease: 'easeInOut' }}
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              background: `linear-gradient(45deg, ${index % 2 === 0 ? '#00f5ff' : '#ff007f'}60, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px)'
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
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {/* Enhanced Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
                className="text-center mb-20"
              >
                <div className="inline-block mb-6">
                  <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
                    <User className="w-16 h-16 text-[#00f5ff] mx-auto" />
                  </motion.div>
                </div>
                <h1 
                  className="text-6xl font-black bg-gradient-to-r from-[#00f5ff] to-[#ff007f] bg-clip-text text-transparent mb-6"
                  style={{ backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite' }}
                >
                  About Me
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  A passionate professional dedicated to technology and business growth
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeInOut' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(0, 245, 255, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-[#0a0f1f]/50 backdrop-blur-md rounded-3xl p-8 border border-white/10"
              >
                {/* Left: Text Content */}
                <div className="w-full lg:w-2/3 space-y-6 text-center lg:text-left">
                  <div>
                    <p className="text-gray-300 leading-relaxed text-sm">
                     A passionate and detail-oriented Software Engineer eager to apply academic knowledge and project experience in real-world applications. Skilled in Java, HTML, CSS, and JavaScript with a strong foundation in software development principles. Quick learner with a problem-solving mindset and a drive to contribute to innovative projects while continuously expanding technical expertise. 
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[#00f5ff] font-semibold">Current Role: Business Promotion Officer at Allianz Lanka Insurance (Pvt) Ltd (2024 - Present)</p>
                    <p className="text-gray-300 text-sm">Experienced Business Promotion Officer with a demonstrated history of
                    working in the insurance industry. Skilled in developing marketing strategies,
                    promoting business services, and increasing client engagement. Proven track
                    record of driving business growth through targeted promotional campaigns
                    and excellent communication skills.</p>
                    <p className="text-[#00f5ff] font-semibold">Education Highlights:</p>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
                      <li>Pursuing BSc (Hons) in Software Engineering at Cardiff Metropolitan University, UK (via ICBT, Sri Lanka)</li>
                      <li>Higher Diploma in Computing and Software Engineering (2023-2024)</li>
                      <li>Diploma in Information Technology and English (2021-2022)</li>
                      <li>Industrial/Enterprise Software Development Program (Java SE/JavaEE ,Python & Industrial Frameworks CJI Institute</li>
                    </ul>
                  </div>
                  <div>
                    <motion.a
                      href="/CV.pdf?v=1"
                      download="CV.pdf"
                      target="_self"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-gradient-to-r from-[#00f5ff] to-[#ff007f] text-[#0a0f1f] font-bold py-3 px-6 rounded-full hover:from-[#ff007f] hover:to-[#00f5ff] transition-all duration-300"
                    >
                      Download CV
                    </motion.a>
                  </div>
                </div>

                {/* Right: Small Profile Pic */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: 'easeInOut' }}
                  className="w-full lg:w-1/3 flex justify-center lg:justify-end"
                >
                  <motion.div 
                    className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-lg overflow-hidden border-4"
                    animate={{ borderColor: ['#00f5ff', '#ff007f', '#00f5ff'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src="/profile.png?v=1"
                      alt="H.D.T. Nishadi"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(3deg); }
          50% { transform: translateY(-5px) rotate(-3deg); }
          75% { transform: translateY(-7px) rotate(2deg); }
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

export default About;