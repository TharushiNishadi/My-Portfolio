/* cspell:ignore Nishadi */
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
const Navbar: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Home', path: '#hero' },
    { name: 'About', path: '#about' },
    { name: 'Experience', path: '#experience' },
    { name: 'Education', path: '#education' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  // Debounce function for scroll events
  const debounce = (func: (...args: unknown[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: unknown[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    // IntersectionObserver for active section detection
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let mostVisibleSection = '';
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });
        if (mostVisibleSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { threshold: [0.2, 0.5, 0.8] }
    );

    // Observe all sections
    navLinks.forEach((link) => {
      const section = document.querySelector(link.path);
      if (section) observer.observe(section);
    });

    // Fallback scroll-based detection
    const handleScroll = debounce(() => {
      let closestSection = '';
      let minDistance = Infinity;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top >= -rect.height / 2 && rect.top <= window.innerHeight / 2) {
            minDistance = distance;
            closestSection = link.path.slice(1);
          }
        }
      });
      if (closestSection) {
        setActiveSection(closestSection);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      navLinks.forEach((link) => {
        const section = document.querySelector(link.path);
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 z-50 w-full backdrop-blur-[12px] bg-white/10 border border-white/20 shadow-[0_8px_32px_rgba(0,245,255,0.12)] rounded-b-2xl"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="text-2xl font-extrabold tracking-wide text-cyan-400 drop-shadow-[0_0_10px_rgba(0,245,255,0.7)] hover:scale-105 transition-transform"
          >
            H.D.T. Nishadi
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <a
                  href={link.path}
                  className={`relative font-medium tracking-wide text-white hover:text-cyan-400 transition-colors duration-300 ${
                    activeSection === link.path.slice(1)
                      ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]'
                      : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-cyan-400 transition-transform duration-300 ${
                      activeSection === link.path.slice(1) ? 'scale-x-100' : 'hover:scale-x-100'
                    }`}
                  />
                </a>
              </motion.div>
            ))}
            <motion.a
              href="/CV.pdf?v=1"
              download="CV.pdf"
              target="_self"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-cyan-400/10 text-cyan-400 border border-cyan-400/40 font-semibold rounded-xl overflow-hidden hover:bg-cyan-400/20 hover:shadow-[0_0_15px_rgba(0,245,255,0.6)] transition-all duration-300 px-4 py-2"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-cyan-400 transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: isOpen ? 0 : '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-[64px] right-0 w-full max-h-[50vh] bg-white/10 backdrop-blur-[12px] border-t border-white/20 shadow-[0_8px_32px_rgba(0,245,255,0.12)] rounded-t-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex flex-col items-center gap-4 px-6 py-6 min-h-fit">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-cyan-400 transition-colors bg-[#0a0f1f]/50 backdrop-blur-sm rounded-full p-2"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
              {/* Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className={`relative font-semibold text-lg py-1 ${
                    activeSection === link.path.slice(1)
                      ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(0,245,255,0.8)]'
                      : 'text-white hover:text-cyan-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <motion.a
                href="/CV.pdf?v=1"
                download="CV.pdf"
                target="_self"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-cyan-400/10 text-cyan-400 border border-cyan-400/40 font-semibold rounded-xl hover:bg-cyan-400/20 hover:shadow-[0_0_15px_rgba(0,245,255,0.6)] transition-all duration-300 px-4 py-2"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;