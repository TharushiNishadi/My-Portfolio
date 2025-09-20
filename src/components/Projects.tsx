/* cspell:ignore Nishadi */
import React, { useEffect, useState } from 'react';
import { Code, Smartphone, Globe, Database, Shirt, Book } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  images: string[];
  githubLink: string;
}

const Projects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openModalProjectId, setOpenModalProjectId] = useState<number | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Pahana Edu Bookshop Management System',
      type: 'E-commerce',
      description: 'Developed a web-based Edu Bookshop Management System to streamline bookstore operations and enhance customer experience. The project digitizes internal processes for staff and administrators, leveraging modern technologies to improve efficiency, customer satisfaction, and market reach.',
      icon: Book,
      color: '#ff007f',
      images: [
        '/Bookshop/AP1.png',
        '/Bookshop/AP2.png',
        '/Bookshop/AP3.png',
        '/Bookshop/AP4.png',
      ],
      githubLink: 'https://github.com/TharushiNishadi/Pahana-edu-bookshop-main',
    },
    {
      id: 2,
      title: 'Aura Fashion Clothing System',
      type: 'E-commerce',
      description: 'An e-commerce platform for Aura Fashion, transitioning from a physical store to a digital hub with real-time inventory, automated invoices, CRM integration, and personalized recommendations for enhanced customer engagement.',
      icon: Shirt,
      color: '#ff007f',
      images: [
        '/AuraFashion/FP1.png',
        '/AuraFashion/FP2.png',
        '/AuraFashion/FP3.png',
        '/AuraFashion/FP4.png',
      ],
      githubLink: 'https://github.com/TharushiNishadi/aura-fashion-main',
    },
    {
      id: 3,
      title: 'Footwear Management System',
      type: 'Management System',
      description: 'A system for DD shoe company, evaluating Monolithic vs. Service-Oriented Architecture (SOA) to balance simplicity, scalability, and integration with vendors, aligning with DD’s expansion goals in Sri Lanka.',
      icon: Database,
      color: '#00f5ff',
      images: [
        '/FootWear/SOP1.png',
        '/FootWear/SOP2.png',
        '/FootWear/SOP3.png',
        '/FootWear/SOP4.png',
      ],
      githubLink: 'https://github.com/TharushiNishadi/Footwear-Management-System',
    },
    {
      id: 4,
      title: 'Bakery Shop App',
      type: 'Mobile App',
      description: 'The "Sprinkles Bakery" mobile application focuses on selecting optimal mobile operating systems, development tools, and technologies to support admin and member levels, ensuring a robust and user-friendly platform for bakery operations.',
      icon: Smartphone,
      color: '#00f5ff',
      images: [
        '/Bakeryshop/BP1.png',
        '/Bakeryshop/BP2.png',
        '/Bakeryshop/BP3.png',
        '/Bakeryshop/BP4.png',
      ],
      githubLink: 'https://github.com/TharushiNishadi/The-Bakery-Shop-System',
    },
    {
      id: 5,
      title: 'SAVOY Cinema',
      type: 'Web Development',
      description: 'A modern web platform for Savoy Cinema in Colombo, featuring state-of-the-art facilities like digital projection and 3D movies. It hosts film festivals and premieres, blending historical charm with cutting-edge technology for a vibrant cultural experience.',
      icon: Globe,
      color: '#ff007f',
      images: [
        '/SavoyCinema/WP1.png',
        '/SavoyCinema/WP2.png',
        '/SavoyCinema/WP3.png',
        '/SavoyCinema/WP4.png',
      ],
      githubLink: 'https://github.com/TharushiNishadi/Savoy-Cinema-Online-Ticket-Booking-System',
    }, 
  ];

  const handleImageClick = (projectId: number) => {
    setOpenModalProjectId(projectId);
  };

  const handlePreviewClick = (image: string) => {
    setPreviewImage(image);
  };

  const closeModal = () => {
    setOpenModalProjectId(null);
    setPreviewImage(null);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#1a1e3a] to-[#2a2e5a] relative overflow-hidden">
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
              background: `linear-gradient(45deg, ${projects[index % projects.length].color}40, transparent)`,
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
            <Code className="w-12 h-12 text-[#00f5ff] mx-auto" />
          </div>
          <h1 
            className="text-4xl font-black bg-gradient-to-r from-[#00f5ff] to-[#ff007f] bg-clip-text text-transparent mb-6"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          >
            Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of innovative solutions in technology and business
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300 h-[400px] flex flex-col"
              style={{ animation: `fadeIn 0.8s ease-out ${index * 0.2}s forwards` }}
            >
              {/* Project Image */}
              <div 
                className="h-48 w-full rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project.id)}
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Project Details */}
              <div className="flex-1 flex flex-col justify-between mt-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/30">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#00f5ff]" />
                      {project.type}
                    </div>
                  </div>
                  <p className="text-base text-gray-300 leading-relaxed">{project.description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-gradient-to-r from-[#00f5ff] to-[#ff007f] text-[#0a0f1f] font-bold py-2 px-4 rounded-full hover:from-[#ff007f] hover:to-[#00f5ff] transition-all duration-300"
                  >
                    Source Code
                  </motion.a>
                  <div 
                    className="p-2 rounded-lg bg-gradient-to-br"
                    style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
                  >
                    <project.icon 
                      className="w-5 h-5" 
                      style={{ 
                        color: project.color,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Grid */}
        {openModalProjectId !== null && (
          <div className="fixed inset-0 bg-[#0a0f1f]/70 backdrop-blur-xl flex items-center justify-center z-50" style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <div className="relative bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 max-w-2xl w-full">
              <button
                className="absolute top-4 right-4 text-gray-300 hover:text-[#00f5ff] transition-colors"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-xl font-bold text-[#00f5ff] mb-6 text-center">
                {projects.find(p => p.id === openModalProjectId)?.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {projects.find(p => p.id === openModalProjectId)?.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project ${openModalProjectId} Image ${index + 1}`}
                    className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-all duration-300"
                    onClick={() => handlePreviewClick(image)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Full-Screen Image Preview */}
        {previewImage && (
          <div className="fixed inset-0 bg-[#0a0f1f]/90 flex items-center justify-center z-50" style={{ animation: 'fadeIn 0.3s ease-out' }}>
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-[#00f5ff] transition-colors bg-[#0a0f1f]/50 backdrop-blur-sm rounded-full p-2"
              onClick={closeModal}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={previewImage}
              alt="Full-screen preview"
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>
        )}
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

export default Projects;