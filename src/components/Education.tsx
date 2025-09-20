import { useState, useEffect } from 'react';
import { GraduationCap, BookOpen, Award, Calendar, Star, Trophy, Brain, Code, FileCode, FileText, File, Braces, Coffee } from 'lucide-react';

interface Education {
  id: number;
  title: string;
  institution: string;
  campus: string;
  period: string;
  status: 'Current' | 'Completed';
  description: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  skills: string[];
  color: string;
  gradient: string;
  level: 'degree' | 'program' | 'diploma' | 'secondary';
}

interface StatusBadgeProps {
  status: 'Current' | 'Completed';
}

interface SkillTagProps {
  skill: string;
  color: string;
}

const Education: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techSkills = [
    { name: 'C++', icon: FileCode, color: '#00f5ff' },
    { name: 'HTML', icon: FileText, color: '#ff007f' },
    { name: 'CSS', icon: File, color: '#00f5ff' },
    { name: 'JS', icon: Braces, color: '#ff007f' },
    { name: 'Java', icon: Coffee, color: '#00f5ff' },
  ];

  const educations: Education[] = [
    {
      id: 1,
      title: 'BSc (Hons) Software Engineering',
      institution: 'Cardiff Metropolitan University, UK',
      campus: 'via ICBT, Sri Lanka',
      period: '2025 - Following',
      status: 'Current',
      description: 'Pursuing a Bachelor of Science in Software Engineering with an emphasis on advanced software development, programming, and engineering principles. The program focuses on equipping students with strong theoretical foundations and practical skills in designing, developing, and managing modern software systems.',
      icon: GraduationCap,
      skills: ['Software Architecture', 'System Design', 'Advanced Programming', 'Project Management','Web Development'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'degree'
    },
    {
      id: 2,
      title: 'Industrial/Enterprise Software Development',
      institution: 'CJI Institute',
      campus: '',
      period: '2025 - Following',
      status: 'Current',
      description: 'Program focused on enterprise software development using Java SE/EE, Python, and industrial frameworks, with emphasis on scalable applications and real-world engineering practices.',
      icon: Code,
      skills: ['Java Enterprise', 'Python', 'Industrial Frameworks'],
      color: '#ff007f',
      gradient: 'from-[#ff007f] to-[#00f5ff]',
      level: 'program'
    },
    {
      id: 3,
      title: 'Higher Diploma in Computing',
      institution: 'Cardiff Metropolitan University, UK',
      campus: 'via ICBT, Sri Lanka',
      period: '2023 - 2024',
      status: 'Completed',
      description: 'Advanced diploma focusing on computing fundamentals, software design, and engineering practices.',
      icon: Brain,
      skills: ['Computing Fundamentals', 'Software Design', 'Engineering Practices', 'Problem Solving','Fundamental in Programming','Database Management System','Web Development','Business Analysis'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'diploma'
    },
    {
      id: 4,
      title: 'Diploma in Information Technology',
      institution: 'ESOFT Metro Campus',
      campus: 'Kalutara',
      period: 'Oct 2021 - Apr 2022',
      status: 'Completed',
      description: 'Foundational diploma in IT concepts, programming, and technology applications.',
      icon: Trophy,
      skills: ['IT Concepts', 'Programming Basics', 'Technology Applications'],
      color: '#ff007f',
      gradient: 'from-[#ff007f] to-[#00f5ff]',
      level: 'diploma'
    },
    {
      id: 5,
      title: 'Diploma in English',
      institution: 'ESOFT Metro Campus',
      campus: 'Kalutara',
      period: 'Oct 2021 - Apr 2022',
      status: 'Completed',
      description: 'Diploma program designed to strengthen English language proficiency, focusing on effective communication, grammar, and professional usage in academic and workplace contexts.',
      icon: BookOpen,
      skills: ['English Proficiency', 'Communication', 'Writing Skills'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'diploma'
    },
    {
      id: 5,
      title: 'Certificate in Web Development',
      institution: 'LinkedIn Learning',
      campus: 'Online',
      period: 'July 2024',
      status: 'Completed',
      description: 'Completed an intensive web development certification covering front-end and back-end fundamentals. Gained practical skills in building responsive websites, working with HTML, CSS, JavaScript, and exploring modern development practices.',
      icon: BookOpen,
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development Fundamentals'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'diploma'
    },
    {
      id: 6,
      title: 'Certificate in Generative AI for Digital Marketers',
      institution: 'LinkedIn Learning',
      campus: 'Online',
      period: 'July 2024',
      status: 'Completed',
      description: 'Completed a professional certification focused on applying generative AI tools and strategies in digital marketing. Covered AI-driven content creation, personalization, campaign optimization, and the use of advanced tools to enhance engagement and marketing effectiveness.',
      icon: BookOpen,
      skills: ['Generative AI', 'Digital Marketing', 'Content Creation', 'AI Tools', 'Campaign Optimization', 'Marketing Strategy'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'diploma'
    },
    {
      id: 7,
      title: 'G.C.E. Advanced Level',
      institution: 'E.W. Adikaram College',
      campus: 'Commerce Stream',
      period: '2021',
      status: 'Completed',
      description: 'Advanced Level examination in Commerce Stream at E.W. Adikaram College, Matugama.',
      icon: Star,
      skills: ['Accounting', 'Business Studies', 'Economics'],
      color: '#ff007f',
      gradient: 'from-[#ff007f] to-[#00f5ff]',
      level: 'secondary'
    },
    {
      id: 8,
      title: 'G.C.E. Ordinary Level',
      institution: 'WP/MT/Ovitigala M.V.',
      campus: '',
      period: '2021',
      status: 'Completed',
      description: 'Ordinary Level with grades: 3As, 2Bs, 3Cs & 2Ss.',
      icon: Award,
      skills: ['General Education', 'Academic Foundation', 'Multi-disciplinary'],
      color: '#00f5ff',
      gradient: 'from-[#00f5ff] to-[#ff007f]',
      level: 'secondary'
    },
  ];

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
      status === 'Current' ? 'bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/30' : 
      'bg-[#ff007f]/20 text-[#ff007f] border border-[#ff007f]/30'
    }`}>
      <div className={`w-2 h-2 rounded-full mr-2 ${
        status === 'Current' ? 'bg-[#00f5ff] animate-pulse' : 'bg-[#ff007f]'
      }`} />
      {status}
    </div>
  );

  const SkillTag: React.FC<SkillTagProps> = ({ skill, color }) => (
    <span 
      className="inline-block px-3 py-1 text-xs rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 hover:scale-105 transition-transform duration-200"
      style={{ borderColor: `${color}30` }}
    >
      {skill}
    </span>
  );

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#0a0f1f] via-[#1a1e3a] to-[#2a2e5a] relative overflow-hidden">
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
              background: `linear-gradient(45deg, ${educations[index % educations.length]?.color}40, transparent)`,
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

      <div className="relative z-10 container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6" style={{ animation: 'bounce 2s infinite' }}>
            <GraduationCap className="w-16 h-16 text-[#00f5ff] mx-auto" />
          </div>
          <h1 
            className="text-6xl font-black bg-gradient-to-r from-[#00f5ff] to-[#ff007f] bg-clip-text text-transparent mb-6"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}
          >
            Educational Journey
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive path through technology, innovation, and continuous learning
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((edu, index) => (
            <div
              key={edu.id}
              className="relative bg-[#0a0f1f]/50 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:scale-105 transition-all duration-300"
              style={{ animation: `fadeIn 0.8s ease-out ${index * 0.2}s forwards` }}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className="p-3 rounded-xl bg-gradient-to-br"
                    style={{ background: `linear-gradient(135deg, ${edu.color}20, ${edu.color}40)` }}
                  >
                    <edu.icon 
                      className="w-6 h-6" 
                      style={{ 
                        color: edu.color,
                        animation: 'pulse 2s infinite'
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {edu.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{edu.period}</p>
                  </div>
                </div>
                <StatusBadge status={edu.status} />
              </div>

              {/* Institution Info */}
              <div className="mb-4">
                <p className="font-semibold text-gray-200">{edu.institution}</p>
                {edu.campus && (
                  <p className="text-sm text-gray-400">{edu.campus}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {edu.description}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {edu.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex} skill={skill} color={edu.color} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Degrees', value: '2', icon: GraduationCap },
            { label: 'Diplomas', value: '3', icon: Award },
            { label: 'Programs', value: '1', icon: Code },
            { label: 'Years', value: '4+', icon: Calendar }
          ].map((stat, statIndex) => (
            <div key={statIndex} className="text-center group">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#00f5ff]/30 transition-all duration-300 hover:scale-105">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-[#00f5ff] group-hover:animate-spin" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Skills Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#ff007f] mb-6">
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techSkills.map((tech, techIndex) => (
              <div
                key={techIndex}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 hover:scale-105 transition-transform duration-200"
                style={{ borderColor: `${tech.color}30` }}
              >
                <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                <span className="text-sm font-medium">{tech.name}</span>
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

export default Education;