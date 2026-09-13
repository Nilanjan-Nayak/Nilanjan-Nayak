import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code2,
  Send,
  Sparkles,
  Rocket,
  FileText,
  ChevronRight,
  type LucideIcon
} from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolio';
import logoImg from '../image/Nilanjan.png';
import type { MobileNavItem } from '../types/responsive';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Icon mapping for navigation items
  const iconMap: Record<string, LucideIcon> = {
    hero: Home,
    about: User,
    'dream-project': Rocket,
    projects: Briefcase,
    skills: Code2,
    contact: Send
  };

  // Structured mobile navigation items conforming to MobileNavItem type
  const mobileNavList: MobileNavItem[] = navItems.map((item) => ({
    id: item.id,
    label: item.label,
    shortLabel: item.label === 'Dream Project' ? 'Dream' : item.label,
    sectionId: item.sectionId,
    icon: iconMap[item.sectionId] || Sparkles
  }));

  // Primary bottom dock items (5 key quick-jump sections)
  const bottomDockItems: MobileNavItem[] = [
    { id: 'hero', label: 'Home', shortLabel: 'Home', sectionId: 'hero', icon: Home },
    { id: 'about', label: 'About', shortLabel: 'About', sectionId: 'about', icon: User },
    { id: 'projects', label: 'Projects', shortLabel: 'Projects', sectionId: 'projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', shortLabel: 'Skills', sectionId: 'skills', icon: Code2 },
    { id: 'contact', label: 'Contact', shortLabel: 'Contact', sectionId: 'contact', icon: Send }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.sectionId);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ===================================================================
          1. TOP NAVIGATION BAR (Desktop & Mobile Compact Header)
         =================================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2 sm:py-2.5 backdrop-blur-xl bg-[#02000d]/85 shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-b border-[#1a1f35]/60'
            : 'py-3 sm:py-4 backdrop-blur-sm bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Status */}
            <div
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2.5 cursor-pointer group"
              role="button"
              aria-label="Scroll to home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-[#1a1f35] to-[#0a0e1a] border border-[#3066be]/40 overflow-hidden rounded-xl group-hover:border-[#5AA8D6] transition-all shadow-[0_0_15px_rgba(48,102,190,0.2)]">
                <img
                  src={logoImg}
                  alt="Nilanjan Nayak"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base sm:text-lg font-bold text-white leading-none tracking-tight group-hover:text-[#5AA8D6] transition-colors">
                    {personalInfo.name.split(' ')[0]}
                  </span>
                  {/* Status Indicator */}
                  <span className="relative flex h-2 w-2" title="Available for work">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                </div>
                <div className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                  Portfolio
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Desktop Navigation"
              className="hidden md:flex items-center gap-1 bg-[#0a0e1a]/70 p-1.5 rounded-full border border-[#1a1f35]/70 backdrop-blur-md shadow-inner"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.sectionId)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] rounded-full shadow-[0_0_15px_rgba(90,168,214,0.4)] -z-10 animate-fade-in" />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Social Links */}
              <div className="hidden lg:flex items-center gap-1.5 pr-3 border-r border-[#1a1f35]">
                {personalInfo.social.slice(0, 3).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-[#5AA8D6] hover:bg-[#1a1f35] rounded-lg transition-all duration-200"
                      aria-label={social.label}
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>

              {/* Quick Resume Button (Visible on both desktop and mobile header) */}
              <a
                href={personalInfo.resumeUrl}
                download
                className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#1a1f35] to-[#131c80]/40 hover:from-[#3066be] hover:to-[#5AA8D6] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 border border-[#3066be]/40 hover:border-transparent shadow-[0_0_12px_rgba(48,102,190,0.2)] active:scale-95"
              >
                <FileText size={14} className="text-[#5AA8D6] group-hover:text-white" />
                <span className="hidden xs:inline">Resume</span>
              </a>

              {/* Mobile Drawer Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative p-2 text-slate-300 hover:text-white bg-[#0a0e1a]/80 hover:bg-[#1a1f35] border border-[#1a1f35] rounded-xl transition-all duration-300 active:scale-95"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X size={20} className="transition-transform duration-300 rotate-90 text-[#5AA8D6]" />
                ) : (
                  <Menu size={20} className="transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ===================================================================
          2. PROFESSIONAL MOBILE FLOATING BOTTOM DOCK (iOS / App Style)
         =================================================================== */}
      <div
        className="fixed left-1/2 -translate-x-1/2 z-40 md:hidden transition-all duration-300 pointer-events-auto"
        style={{
          bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))'
        }}
        role="navigation"
        aria-label="Mobile Quick Dock"
      >
        <div className="flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl bg-[#02000d]/90 border border-[#3066be]/40 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(90,168,214,0.25)]">
          {bottomDockItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.sectionId;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.sectionId)}
                className={`relative flex items-center justify-center transition-all duration-300 active:scale-90 ${
                  isActive
                    ? 'px-3.5 py-2 rounded-full bg-gradient-to-r from-[#3066be] to-[#5AA8D6] text-white shadow-[0_0_15px_rgba(90,168,214,0.5)]'
                    : 'p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5'
                }`}
                aria-label={item.label}
              >
                <Icon size={18} />
                {isActive && (
                  <span className="text-[11px] font-bold ml-1.5 whitespace-nowrap animate-fade-in">
                    {item.shortLabel}
                  </span>
                )}
              </button>
            );
          })}

          {/* More / Menu Button in Dock */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2.5 rounded-full transition-all duration-300 active:scale-90 ${
              isMobileMenuOpen
                ? 'bg-[#5AA8D6] text-white shadow-[0_0_15px_rgba(90,168,214,0.6)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
            aria-label="Toggle All Sections Menu"
          >
            <Sparkles size={18} />
          </button>
        </div>
      </div>

      {/* ===================================================================
          3. PROFESSIONAL MOBILE DRAWER SHEET (Slide-Up Bottom Sheet)
         =================================================================== */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Drawer"
      >
        {/* Dark Frosted Backdrop (Dismisses on tap) */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-Up Sheet Container */}
        <div
          className={`absolute bottom-0 inset-x-0 bg-gradient-to-b from-[#090b1e] via-[#050818] to-[#02000d] rounded-t-3xl border-t border-[#3066be]/40 shadow-[0_-15px_50px_rgba(0,0,0,0.9)] max-h-[85dvh] flex flex-col transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
          style={{
            paddingBottom: 'max(1.25rem, env(safe-area-inset-bottom, 1.25rem))'
          }}
        >
          {/* Grab Handle */}
          <div className="pt-3 pb-1 flex justify-center cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="w-12 h-1.5 bg-white/25 rounded-full" />
          </div>

          {/* Drawer Header with Profile Card */}
          <div className="px-5 pt-2 pb-4 border-b border-[#1a1f35] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#3066be]/40">
                <img src={logoImg} alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white leading-tight">
                  {personalInfo.name}
                </h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-mono text-emerald-300 font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 active:scale-95"
              aria-label="Close Drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="flex-1 px-5 py-3 overflow-y-auto space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-2">
              Sections
            </div>
            {mobileNavList.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.sectionId;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.sectionId)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 active:scale-[0.98] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#3066be] to-[#5AA8D6] text-white shadow-[0_0_20px_rgba(90,168,214,0.3)]'
                      : 'bg-[#0a0e1a]/60 text-slate-300 hover:bg-[#1a1f35] border border-[#1a1f35]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                        isActive ? 'bg-white/20' : 'bg-[#131c80]/30 text-[#5AA8D6]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold leading-snug">{item.label}</div>
                      <div
                        className={`text-[10px] font-mono ${
                          isActive ? 'text-white/80' : 'text-slate-400'
                        }`}
                      >
                        Section {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={18} className={isActive ? 'text-white' : 'text-slate-400'} />
                </button>
              );
            })}
          </div>

          {/* Drawer Footer Actions */}
          <div className="px-5 pt-3 border-t border-[#1a1f35] space-y-3">
            {/* Social Links Row */}
            <div className="flex items-center justify-between gap-2">
              {personalInfo.social.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#0a0e1a] border border-[#1a1f35] hover:border-[#5AA8D6] rounded-xl text-slate-300 text-xs font-medium transition-all active:scale-95"
                    aria-label={social.label}
                  >
                    <Icon size={16} className="text-[#5AA8D6]" />
                    <span className="truncate">{social.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Resume Download Full Action */}
            <a
              href={personalInfo.resumeUrl}
              download
              className="relative flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-[#3066be] to-[#5AA8D6] text-white font-bold text-sm rounded-xl shadow-[0_0_25px_rgba(90,168,214,0.4)] overflow-hidden active:scale-98 transition-all"
            >
              <FileText size={16} />
              <span>Download Resume (PDF)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
