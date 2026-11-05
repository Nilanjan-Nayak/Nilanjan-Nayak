import { useEffect, useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  FileDown, 
  MapPin, 
  Terminal, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Send,
  Code2,
  ChevronDown
} from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolio';
import HeroBackground from './HeroBackground';

export default function Hero() {
  const [activeProject, setActiveProject] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { featuredProjects } = heroData;

  // Auto-slide featured projects every 4.5s if not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, featuredProjects.length]);

  const currentProj = featuredProjects[activeProject];

  const handleNextProject = () => {
    setActiveProject((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevProject = () => {
    setActiveProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-transparent text-slate-50 overflow-hidden"
    >
      {/* 3D Animated WebGL Nebula/Space Background */}
      <HeroBackground />

      {/* Atmospheric Contrast Overlay for perfect accessibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02000d]/40 via-[#02000d]/75 to-[#02000d] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(48,102,190,0.25),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 w-full pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

            {/* Left Column: Hero Information & CTAs (Span 7 cols on desktop) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              
              {/* Status and Location Badges */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {/* Active Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#050939]/80 border border-[#3066be]/40 backdrop-blur-md shadow-[0_0_15px_rgba(48,102,190,0.3)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-emerald-300 tracking-wide">
                    Available for Work
                  </span>
                </div>

                {/* Location Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0e1a]/70 border border-slate-800/80 backdrop-blur-md text-slate-300 text-[11px] sm:text-xs">
                  <MapPin size={12} className="text-[#5AA8D6]" />
                  <span>{personalInfo.location}</span>
                </div>

                {/* Role Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0e1a]/70 border border-slate-800/80 backdrop-blur-md text-slate-300 text-[11px] sm:text-xs font-mono">
                  <Terminal size={12} className="text-[#5AA8D6]" />
                  <span>{personalInfo.role}</span>
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm text-[#5AA8D6] tracking-widest uppercase font-semibold">
                  <Sparkles size={14} className="text-[#00d4ff] animate-pulse" />
                  <span>Welcome to my digital space</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] sm:leading-[1.0]">
                  <span className="block text-slate-100">
                    {heroData.headline.prefix}
                  </span>
                  <span className="relative inline-block mt-1">
                    <span className="bg-gradient-to-r from-[#5AA8D6] via-[#00d4ff] to-[#3066be] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(90,168,214,0.5)]">
                      {heroData.headline.highlight}
                    </span>
                    {/* Glowing highlight underline */}
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#5AA8D6] via-[#00d4ff] to-transparent rounded-full opacity-80" />
                  </span>
                </h1>
              </div>

              {/* Dynamic Description & Skills Pills */}
              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {heroData.description[0]}
                </p>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {heroData.description[1]}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {['React 18', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Three.js'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] sm:text-xs font-mono text-slate-300 bg-[#0d1329]/70 border border-[#3066be]/30 rounded-md backdrop-blur-sm hover:border-[#5AA8D6] hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons (CTAs) */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                {/* Explore Projects Button */}
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#3066be] via-[#4176cf] to-[#5AA8D6] hover:from-[#5AA8D6] hover:to-[#00d4ff] text-white font-bold text-sm sm:text-base rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_25px_rgba(48,102,190,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.6)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Projects
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>

                {/* Download Resume Button */}
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-5 sm:px-6 py-3 sm:py-3.5 bg-[#0a0e1a]/80 hover:bg-[#131c80]/50 border border-[#3066be]/50 hover:border-[#5AA8D6] backdrop-blur-md text-slate-200 hover:text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(90,168,214,0.3)]"
                >
                  <FileDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#5AA8D6] group-hover:translate-y-0.5 transition-transform" />
                  <span>Resume</span>
                </a>

                {/* Contact Me Button */}
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-5 sm:px-6 py-3 sm:py-3.5 bg-transparent hover:bg-white/5 border border-slate-700/80 hover:border-slate-500 rounded-xl text-slate-300 hover:text-white font-medium text-sm sm:text-base transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-[#5AA8D6]" />
                  <span>Contact</span>
                </button>
              </div>

              {/* Stats Counters */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-slate-800/80 max-w-xl">
                {heroData.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative p-3 sm:p-4 rounded-xl bg-[#0a0e1a]/60 border border-slate-800/80 hover:border-[#3066be]/50 backdrop-blur-sm transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-white via-[#5AA8D6] to-[#00d4ff] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Follow:</span>
                <div className="flex items-center gap-2">
                  {personalInfo.social.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="p-2.5 rounded-lg bg-[#0a0e1a]/70 border border-slate-800/80 text-slate-300 hover:text-[#00d4ff] hover:border-[#3066be] hover:bg-[#131c80]/40 transition-all duration-200 hover:scale-110 shadow-sm"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Developer Showcase Card (Span 5 cols on desktop) */}
            <div 
              className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Outer Glow Wrapper */}
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#3066be] via-[#5AA8D6] to-[#00d4ff] rounded-2xl opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-700 animate-gradient-x" />
                
                {/* Main Glass Card */}
                <div className="relative rounded-2xl bg-[#0a0e1a]/90 border border-[#3066be]/40 backdrop-blur-xl overflow-hidden shadow-2xl">
                  
                  {/* macOS / VS Code Window Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#070b14] border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0f172a] border border-slate-700/60 text-xs font-mono text-slate-300">
                      <Code2 size={13} className="text-[#5AA8D6]" />
                      <span>{currentProj.name}.tsx</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="hidden sm:inline">Active</span>
                    </div>
                  </div>

                  {/* Visual Project Showcase Area */}
                  <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-slate-950">
                    {/* Project Screenshot / Visual */}
                    <img
                      key={activeProject}
                      src={currentProj.image}
                      alt={currentProj.name}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80';
                      }}
                    />

                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />

                    {/* Floating Year Tag */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0a0e1a]/85 border border-[#3066be]/40 backdrop-blur-md text-[11px] font-mono text-[#5AA8D6]">
                      {currentProj.year}
                    </div>

                    {/* Navigation Arrows for manual control */}
                    <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
                      <button
                        onClick={handlePrevProject}
                        aria-label="Previous project"
                        className="pointer-events-auto p-1.5 rounded-full bg-[#0a0e1a]/70 hover:bg-[#3066be] text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all duration-200"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={handleNextProject}
                        aria-label="Next project"
                        className="pointer-events-auto p-1.5 rounded-full bg-[#0a0e1a]/70 hover:bg-[#3066be] text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-all duration-200"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Project Details Panel */}
                  <div className="p-4 sm:p-5 space-y-3.5">
                    
                    {/* Project Title and Tech */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {currentProj.name}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {(activeProject + 1).toString().padStart(2, '0')} / {featuredProjects.length.toString().padStart(2, '0')}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-[#5AA8D6]">
                        {currentProj.tech}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                      {currentProj.description || "Interactive full-stack web solution engineered with scalable architecture."}
                    </p>

                    {/* Project Switcher Dots */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        {featuredProjects.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveProject(idx)}
                            aria-label={`Select project ${idx + 1}`}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              idx === activeProject
                                ? 'w-6 bg-gradient-to-r from-[#3066be] to-[#5AA8D6]'
                                : 'w-2 bg-slate-700 hover:bg-slate-500'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Action Link to Projects Section */}
                      <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5AA8D6] hover:text-[#00d4ff] transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowUpRight size={14} />
                      </button>
                    </div>

                    {/* Live Terminal Log Line */}
                    <div className="p-2.5 rounded-lg bg-[#060a12] border border-slate-800/80 font-mono text-[11px] text-slate-400 flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[#5AA8D6]">&gt;</span>
                        <span className="text-slate-300 truncate">npm run build && deploy</span>
                      </div>
                      <span className="text-emerald-400 font-semibold ml-2 flex-shrink-0">✓ Ready</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* Bottom Floating Tech Strip */}
          <div className="mt-12 sm:mt-16 pt-6 border-t border-slate-800/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#5AA8D6]" />
                <span className="text-slate-300 font-semibold uppercase tracking-wider">Core Technologies:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-slate-300">
                <span className="hover:text-[#5AA8D6] transition-colors">⚡ React 18</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-[#5AA8D6] transition-colors">🔷 TypeScript</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-[#5AA8D6] transition-colors">🟢 Node.js</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-[#5AA8D6] transition-colors">🐍 Python</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-[#5AA8D6] transition-colors">🎨 Tailwind CSS</span>
                <span className="text-slate-700">•</span>
                <span className="hover:text-[#5AA8D6] transition-colors">🌐 Three.js</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <div className="hidden md:flex justify-center pb-6">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-[#5AA8D6] transition-colors group cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-[#5AA8D6]">
            Scroll Down
          </span>
          <ChevronDown size={18} className="animate-bounce text-[#5AA8D6]" />
        </button>
      </div>

    </section>
  );
}
