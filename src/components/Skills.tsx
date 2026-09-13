import { useState, useEffect, useMemo } from 'react';
import { skillsData } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp, Award, ChevronRight, Star,
  Play, Pause, RotateCcw, Layers, Grid3X3, Orbit,
  Trophy, Clock, Briefcase, MousePointer2
} from 'lucide-react';
import { useResponsive } from '../hooks/useResponsive';

// ============================================
// PREMIUM BACKGROUND - FULLY RESPONSIVE
// ============================================
const PremiumBackground = () => {
  return (
    <>
      {/* Animated mesh gradient - Mobile/Tablet/Desktop */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[300px] md:w-[500px] lg:w-[800px] h-[300px] md:h-[500px] lg:h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-[60px] md:blur-[90px] lg:blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[400px] lg:w-[600px] h-[250px] md:h-[400px] lg:h-[600px] rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-[50px] md:blur-[70px] lg:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Premium grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:48px_48px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      {/* Floating orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-400/30"
          style={{
            left: `${15 + i * 20}%`,
            top: `${20 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

// ============================================
// SKILL DETAILS PANEL - COMPACT PROFESSIONAL DESIGN
// ============================================
const SkillDetailsPanel = ({ skill, category }: any) => {
  if (!skill) {
    return (
      <div className="h-full min-h-[280px] flex flex-col items-center justify-center p-4 text-center border border-slate-800/50 backdrop-blur-md rounded-xl relative overflow-hidden group">
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <category.icon className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
          </div>
        </div>

        <h3 className="relative z-10 text-base font-bold text-white mb-1">Select Technology</h3>
        <p className="relative z-10 text-slate-500 text-xs max-w-[180px]">
          Click on any skill to view details
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      key={skill.name}
      className="relative h-full min-h-[280px] bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-xl border border-slate-700/50 overflow-hidden shadow-2xl"
    >
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(0.5)">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" className="text-blue-400" />
        </svg>
      </div>

      {/* Top accent bar */}
      <div className={`h-0.5 bg-gradient-to-r ${category.gradient}`} />

      <div className="p-4 relative z-10 h-auto flex flex-col">
        {/* Compact Header */}
        <div className="flex items-center gap-2.5 mb-3 pb-3 border-b border-slate-700/50">
          {/* Logo container */}
          <div className="relative w-11 h-11 flex-shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg rotate-45 border border-slate-700/50" />
            <div className={`absolute inset-0.5 bg-gradient-to-br ${category.gradient} opacity-10 rounded-lg rotate-45`} />
            <div className="absolute inset-0 flex items-center justify-center">
              {skill.logo ? (
                <img src={skill.logo} alt={skill.name} className="w-7 h-7 object-contain drop-shadow-lg" />
              ) : (
                <span className="text-base font-bold text-white">{skill.name.substring(0, 2)}</span>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-black text-white truncate mb-0.5">{skill.name}</h3>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 rounded text-[8px] font-bold bg-slate-800/80 text-slate-400 border border-slate-700/50 uppercase tracking-wide">
                {category.title}
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-2 h-2 ${i < Math.floor(skill.level / 20) ? 'fill-yellow-500 text-yellow-500' : 'fill-slate-800 text-slate-800'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compact Proficiency Display */}
        <div className="mb-3">
          <div className="flex items-end justify-between mb-1.5">
            <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider">Proficiency</span>
            <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {skill.level}%
            </span>
          </div>
          <div className="relative h-1.5 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/30">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: "circOut" }}
              className={`h-full bg-gradient-to-r ${category.gradient} relative`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Compact Stats - Inline */}
        <div className="grid grid-cols-2 gap-2.5 mb-3">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30 group hover:bg-slate-800/50 transition-all">
            <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-bold text-white leading-none mb-0.5">{skill.years}</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-wide font-semibold">Years</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30 group hover:bg-slate-800/50 transition-all">
            <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" />
            </div>
            <div className="min-w-0">
              <div className="text-base font-bold text-white leading-none mb-0.5">{skill.projects}+</div>
              <div className="text-[8px] text-slate-400 uppercase tracking-wide font-semibold">Projects</div>
            </div>
          </div>
        </div>

        {/* Compact Tags/Badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-[9px] font-semibold text-blue-400">
            Production Ready
          </span>
          <span className="px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[9px] font-semibold text-green-400">
            {skill.level >= 80 ? 'Expert' : skill.level >= 60 ? 'Advanced' : 'Intermediate'}
          </span>
          <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[9px] font-semibold text-purple-400">
            Active
          </span>
        </div>

        {/* Compact Footer */}
        <div className="mt-auto pt-2.5 border-t border-slate-700/30">
          <p className="text-[10px] text-slate-400 leading-relaxed">
            <span className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient} mr-1.5`} />
            Proven expertise in building scalable solutions
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ============================================
// ============================================
// SKILL PLANET - MOBILE/TABLET/DESKTOP
// ============================================
const SkillPlanet = ({
  skill,
  index,
  totalSkills,
  onHover,
  onClick,
  gradient,
  orbitRadius,
  rotationAngle,
  planetSize = 28
}: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const angle = (index / totalSkills) * 360 + rotationAngle;
  const radians = (angle * Math.PI) / 180;

  const x = Math.cos(radians) * orbitRadius;
  const y = Math.sin(radians) * orbitRadius;

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
        x: x - planetSize,
        y: y - planetSize,
      }}
      onMouseEnter={() => {
        setIsHovered(true);
        onHover(skill);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onHover(null);
      }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(skill);
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative"
      >
        {isHovered && (
          <motion.div
            className={`absolute -inset-2 md:-inset-3 lg:-inset-4 rounded-full bg-gradient-to-r ${gradient} blur-lg md:blur-xl opacity-30`}
          />
        )}

        <div
          style={{ width: `${planetSize * 2}px`, height: `${planetSize * 2}px` }}
          className={`
            relative rounded-xl md:rounded-2xl cursor-pointer
            bg-black/60 backdrop-blur-xl transition-all duration-300
            flex items-center justify-center overflow-hidden
            border ${isHovered ? 'border-white/30' : 'border-white/10'}
          `}
        >
          {isHovered && (
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}
            />
          )}

          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 72 72">
            <circle cx="36" cy="36" r="35" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            <motion.circle
              cx="36"
              cy="36"
              r="35"
              fill="none"
              stroke="url(#planetGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${skill.level * 2.2} 220`}
              initial={{ strokeDasharray: "0 220" }}
              animate={{ strokeDasharray: `${skill.level * 2.2} 220` }}
              transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="planetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 p-1">
            {skill.logo ? (
              <motion.img
                src={skill.logo}
                alt={skill.name}
                className="w-5 h-5 xs:w-6 xs:h-6 md:w-7 md:h-7 lg:w-9 lg:h-9 object-contain"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <span className="text-xs xs:text-sm md:text-base lg:text-xl font-bold text-white">
                {skill.name.substring(0, 2)}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ============================================
// PREMIUM ORBIT VIEW
// ============================================
const PremiumOrbitView = ({ category, onHoverSkill, onSkillClick }: any) => {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);
  const { width, isMobile, isTablet } = useResponsive();

  const orbitRadius = useMemo(() => {
    if (width < 380) return 72;
    if (isMobile) return 85;
    if (isTablet) return 120;
    return 165;
  }, [width, isMobile, isTablet]);

  const planetSize = useMemo(() => {
    if (width < 380) return 20;
    if (isMobile) return 24;
    if (isTablet) return 28;
    return 34;
  }, [width, isMobile, isTablet]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 16);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleSkillHover = (skill: any) => {
    setHoveredSkill(skill);
    onHoverSkill(skill);
    if (skill) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  return (
    <div className="relative w-full h-[280px] xs:h-[320px] md:h-[400px] lg:h-[500px]">
      <OrbitRings />
      <PremiumCentralHub category={category} hoveredSkill={hoveredSkill} />
      {category.skills.map((skill: any, index: number) => (
        <SkillPlanet
          key={skill.name}
          skill={skill}
          index={index}
          totalSkills={category.skills.length}
          onHover={handleSkillHover}
          onClick={onSkillClick}
          gradient={category.gradient}
          orbitRadius={orbitRadius}
          rotationAngle={rotationAngle}
          planetSize={planetSize}
        />
      ))}
    </div>
  );
};

// ============================================
// CENTRAL HUB
// ============================================
const PremiumCentralHub = ({ category, hoveredSkill }: any) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={hoveredSkill?.name || category.id}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <div className={`absolute -inset-4 md:-inset-6 lg:-inset-8 rounded-full bg-gradient-to-r ${category.gradient} opacity-20 blur-xl md:blur-2xl`} />

          <div className={`
            relative w-[100px] h-[100px] md:w-[140px] md:h-[140px] lg:w-[200px] lg:h-[200px] rounded-full
            border border-white/10 bg-black/40 backdrop-blur-2xl flex flex-col items-center justify-center overflow-hidden
          `}>
            <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10`} />

            <div className="relative z-10 text-center px-2 md:px-3 lg:px-4">
              {hoveredSkill ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  {hoveredSkill.logo ? (
                    <img
                      src={hoveredSkill.logo}
                      alt={hoveredSkill.name}
                      className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 object-contain mb-1.5 md:mb-2 lg:mb-3 drop-shadow-md"
                    />
                  ) : (
                    <div className={`w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-1.5 md:mb-2 lg:mb-3`}>
                      <span className="text-base md:text-xl lg:text-2xl font-bold text-white">{hoveredSkill.name.substring(0, 2)}</span>
                    </div>
                  )}
                  <h3 className="text-xs md:text-base lg:text-xl font-bold text-white mb-0.5 md:mb-1 line-clamp-1 max-w-full">{hoveredSkill.name}</h3>
                  <div className="flex items-center gap-1 md:gap-2">
                    <span className="text-[10px] md:text-xs lg:text-sm font-bold text-slate-300">{hoveredSkill.level}%</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-2 md:mb-3 lg:mb-4 opacity-90`}>
                    <category.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg lg:text-2xl font-bold text-white mb-0.5 md:mb-1">{category.title}</h3>
                  <p className="text-[10px] md:text-xs lg:text-sm text-slate-400">{category.skills.length} Technologies</p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// ============================================
// ORBIT RINGS
// ============================================
const OrbitRings = () => {
  return (
    <>
      <div className="absolute inset-[15%] rounded-full border border-white/5" />
      <div className="absolute inset-[25%] rounded-full border border-white/5" />
      <div className="absolute inset-[35%] rounded-full border border-white/5" />
    </>
  );
};

// ============================================
// CATEGORY CARD
// ============================================
const CategoryCard = ({ category, isActive, onClick, index }: any) => {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.05)" }}
      className={`
        group relative w-full min-w-[180px] md:min-w-[220px] lg:min-w-0 
        p-3 md:p-3.5 lg:p-4 rounded-xl transition-all duration-300 text-left backdrop-blur-xl border
        ${isActive
          ? 'bg-white/[0.05] border-white/10 shadow-lg'
          : 'bg-white/[0.02] border-white/5 hover:border-white/10'
        }
      `}
    >
      {isActive && (
        <motion.div
          layoutId="activeCategoryLine"
          className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 md:w-1 h-8 rounded-r-full bg-gradient-to-b ${category.gradient}`}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}

      <div className="flex items-center gap-2.5 md:gap-3 lg:gap-4">
        <div className={`
          w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg 
          flex items-center justify-center transition-all duration-300 flex-shrink-0
          ${isActive ? `bg-gradient-to-br ${category.gradient}` : 'bg-white/[0.05] group-hover:bg-white/[0.1]'}
        `}>
          <category.icon className={`w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-white'}`} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className={`text-sm md:text-base font-bold transition-colors duration-300 truncate ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
            {category.title}
          </h4>
          <div className="flex items-center gap-1.5 md:gap-2 mt-0.5 md:mt-1">
            <span className={`text-xs md:text-sm transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
              {category.skills.length} skills
            </span>
          </div>
        </div>

        <ChevronRight className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 flex-shrink-0 ${isActive
          ? 'text-white translate-x-0.5 md:translate-x-1'
          : 'text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 md:group-hover:translate-x-1'
          }`} />
      </div>
    </motion.button>
  );
};

// ============================================
// STATS DASHBOARD - COMPACT VERSION
// ============================================
const StatsDashboard = ({ category }: any) => {
  const stats = useMemo(() => {
    const totalProjects = category.skills.reduce((a: number, b: any) => a + b.projects, 0);
    const avgLevel = Math.round(category.skills.reduce((a: number, b: any) => a + b.level, 0) / category.skills.length);
    const topSkill = category.skills.reduce((a: any, b: any) => a.level > b.level ? a : b);

    return [
      { label: 'Total Skills', value: category.skills.length, icon: Layers },
      { label: 'Avg Level', value: `${avgLevel}%`, icon: TrendingUp },
      { label: 'Projects', value: `${totalProjects}+`, icon: Award },
      { label: 'Top Skill', value: topSkill.name, icon: Trophy, small: true },
    ];
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2.5"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -2 }}
          className="group relative"
        >
          <div className="relative p-3 md:p-3.5 rounded-xl backdrop-blur-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">{stat.label}</p>
              <stat.icon className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
            <p className={`font-black text-white ${stat.small ? 'text-lg md:text-xl truncate' : 'text-xl md:text-2xl'}`}>
              {stat.value}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// GRID VIEW
// ============================================
const SkillsGridView = ({ skills, gradient }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-2.5 lg:gap-3"
    >
      {skills.map((skill: any, index: number) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.03 }}
          whileHover={{ y: -4, scale: 1.05 }}
          className="group"
        >
          <div className="relative p-3 md:p-3.5 lg:p-4 rounded-xl md:rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800/60 transition-all duration-300 text-center">
            <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            <div className="relative z-10 mb-2 md:mb-2.5 lg:mb-3">
              {skill.logo ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 mx-auto rounded-lg md:rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                  <span className="text-xs md:text-sm font-bold text-white">{skill.name.substring(0, 2)}</span>
                </div>
              )}
            </div>

            <h5 className="relative z-10 text-[10px] md:text-xs font-medium text-slate-300 group-hover:text-white transition-colors truncate mb-1.5 md:mb-2">
              {skill.name}
            </h5>

            <div className="relative z-10 h-0.5 md:h-1 bg-slate-700/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.03 }}
                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ============================================
// CONTROL BAR
// ============================================
const ControlBar = ({ isPlaying, onTogglePlay, onReset, viewMode, onViewModeChange }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5"
    >
      <div className="flex items-center p-0.5 md:p-1 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
        {[
          { id: 'orbit', icon: Orbit, label: 'Orbit' },
          { id: 'grid', icon: Grid3X3, label: 'Grid' },
        ].map((view) => (
          <button
            key={view.id}
            onClick={() => onViewModeChange(view.id)}
            className={`
              flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all duration-300
              ${viewMode === view.id
                ? 'bg-blue-500 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
              }
            `}
          >
            <view.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-medium">{view.label}</span>
          </button>
        ))}
      </div>

      {viewMode === 'orbit' && (
        <div className="flex items-center gap-1.5 md:gap-2 p-0.5 md:p-1 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
          <button
            onClick={onTogglePlay}
            className={`
              flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-md md:rounded-lg transition-all duration-300
              ${isPlaying
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-slate-700/50 text-slate-400 hover:text-white'
              }
            `}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 md:w-4 md:h-4" /> : <Play className="w-3.5 h-3.5 md:w-4 md:h-4" />}
            <span className="text-xs md:text-sm font-medium hidden sm:inline">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <button
            onClick={onReset}
            className="p-1.5 md:p-2 rounded-md md:rounded-lg bg-slate-700/50 text-slate-400 hover:text-white transition-all duration-300"
          >
            <RotateCcw className="w-3.5 h-3.5 md:w-4 md:h-4" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-1.5 md:gap-2 px-3 md:px-3.5 lg:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50">
        <span className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-slate-500'}`} />
        <span className="text-xs md:text-sm text-slate-400 hidden sm:inline">
          {isPlaying ? 'Auto' : 'Paused'}
        </span>
      </div>
    </motion.div>
  );
};

// ============================================
// MAIN SKILLS COMPONENT - COMPACT HEADER
// ============================================
export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'orbit' | 'grid'>('orbit');

  const activeCategory = skillsData.categories[activeCategoryIndex];

  useEffect(() => {
    if (!isPlaying || isPaused) return;
    const interval = setInterval(() => {
      setActiveCategoryIndex((prev) => (prev + 1) % skillsData.categories.length);
      setSelectedSkill(null);
    }, 10000);
    return () => clearInterval(interval);
  }, [isPlaying, isPaused]);

  const handleCategorySelect = (index: number) => {
    setActiveCategoryIndex(index);
    setSelectedSkill(null);
  };

  const handleReset = () => {
    setActiveCategoryIndex(0);
    setIsPlaying(true);
    setSelectedSkill(null);
  };

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
  };

  return (
    <section id="skills" className="relative py-10 md:py-16 lg:py-24 overflow-hidden min-h-screen">
      <PremiumBackground />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Title */}
        <div className="space-y-3">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none">
            My
            <span className=" mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#5AA8D6] via-[#00bfff] to-[#3066be] bg-[length:200%_auto] animate-gradient-x">
              Skills
            </span>
          </h2>

          <div className="flex items-center gap-3 mt-4">

          </div>
        </div>

        <div className="mb-5 md:mb-8">
          <ControlBar
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying(!isPlaying)}
            onReset={handleReset}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5 md:gap-8 lg:gap-10 mb-8 md:mb-12">
          <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-x-visible pb-2 xl:pb-0 scrollbar-hide">
            {skillsData.categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={activeCategoryIndex === index}
                onClick={() => handleCategorySelect(index)}
                index={index}
              />
            ))}
          </div>

          <div className="space-y-5 md:space-y-6">
            <StatsDashboard category={activeCategory} />

            {viewMode === 'orbit' ? (
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
                <div
                  className="flex-1"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <PremiumOrbitView
                    category={activeCategory}
                    onHoverSkill={() => {}}
                    onSkillClick={handleSkillClick}
                  />

                  <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500">
                    <div className="hidden md:flex items-center gap-2">
                      <MousePointer2 className="w-3.5 h-3.5" />
                      <span>Click skills to view details • Hover to pause</span>
                    </div>
                    <div className="flex md:hidden items-center gap-2">
                      <MousePointer2 className="w-3.5 h-3.5" />
                      <span>Tap skills to view details</span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[340px] xl:w-[380px]">
                  <SkillDetailsPanel skill={selectedSkill} category={activeCategory} />
                </div>
              </div>
            ) : (
              <SkillsGridView skills={activeCategory.skills} gradient={activeCategory.gradient} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
