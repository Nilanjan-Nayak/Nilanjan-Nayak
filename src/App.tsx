import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import DreamProject from './components/DreamProject';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import WelcomeScreen from './components/WelcomeScreen';
import SplashCursor from './components/SplashCursor';
import { personalInfo } from './data/portfolio';
import { getPerformanceSettings } from './utils/performance';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [perfSettings] = useState(getPerformanceSettings());

  const handleLoadingComplete = () => {
    setShowWelcome(false);
  };

  // ✅ RIGHT-CLICK PROTECTION - Disable context menu & inspection
  useEffect(() => {
    const handleContextMenu = (e: Event) => {
      e.preventDefault();
      return false;
    };

    const handleKeyDown = (e: Event) => {
      const keyEvent = e as KeyboardEvent;
      // Disable F12, Ctrl+Shift+I (DevTools), Ctrl+Shift+C (Inspector), Ctrl+Shift+K (Console)
      if (
        keyEvent.key === 'F12' ||
        (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.key === 'I' || keyEvent.key === 'i')) ||
        (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.key === 'C' || keyEvent.key === 'c')) ||
        (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.key === 'K' || keyEvent.key === 'k')) ||
        (keyEvent.ctrlKey && keyEvent.shiftKey && (keyEvent.key === 'J' || keyEvent.key === 'j')) ||
        (keyEvent.ctrlKey && (keyEvent.key === 'U' || keyEvent.key === 'u'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable dragging images
    const handleDragStart = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Disable copy on images
    const handleCopy = (e: Event) => {
      const selection = window.getSelection();
      if (selection && selection.toString().length === 0) {
        e.preventDefault();
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);

    // Disable right-click on images specifically
    document.querySelectorAll('img').forEach(img => {
      img.addEventListener('contextmenu', handleContextMenu);
      img.addEventListener('dragstart', handleDragStart);
      img.style.userSelect = 'none';
      (img.style as any).webkitUserSelect = 'none';
    });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <>
      {/* Only render SplashCursor on high-performance devices */}
      {perfSettings.enableSplashCursor && <SplashCursor />}

      <WelcomeScreen onLoadingComplete={handleLoadingComplete} />
      {!showWelcome && (
        <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#0A0118] text-slate-50 selection:bg-[#8B5CF6]/30 selection:text-white">
          {/* Fixed Background - Optimized for mobile */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Noise Texture - Reduced opacity on mobile */}
            <div
              className="absolute inset-0 mix-blend-overlay"
              style={{
                opacity: perfSettings.enableComplexAnimations ? 0.03 : 0.01,
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Premium Grid Pattern - Simplified on mobile */}
            <div className={`absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.04)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px] ${perfSettings.enableBlurEffects ? '[mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]' : ''
              }`} />

            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0118] via-[#1E1B4B]/20 to-[#0A0118]" />

            {/* Dynamic Ambient Glow Effects - Reduced blur and scaled on mobile */}
            {perfSettings.enableBlurEffects && (
              <>
                <div
                  className="absolute top-0 left-1/4 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-[#6366F1] rounded-full opacity-15 animate-pulse-glow"
                  style={{
                    filter: `blur(${perfSettings.blurAmount}px)`,
                    willChange: perfSettings.enableComplexAnimations ? 'transform' : 'auto'
                  }}
                />
                <div
                  className="absolute bottom-0 right-1/4 w-[280px] sm:w-[450px] lg:w-[600px] h-[280px] sm:h-[450px] lg:h-[600px] bg-[#8B5CF6] rounded-full opacity-10 animate-pulse-glow"
                  style={{
                    filter: `blur(${perfSettings.blurAmount}px)`,
                    animationDelay: '4s',
                    willChange: perfSettings.enableComplexAnimations ? 'transform' : 'auto'
                  }}
                />
                <div
                  className="absolute top-1/2 right-1/3 w-[240px] sm:w-[380px] lg:w-[500px] h-[240px] sm:h-[380px] lg:h-[500px] bg-[#EC4899] rounded-full opacity-8 animate-pulse-glow"
                  style={{
                    filter: `blur(${perfSettings.blurAmount}px)`,
                    animationDelay: '2s',
                    willChange: perfSettings.enableComplexAnimations ? 'transform' : 'auto'
                  }}
                />
              </>
            )}

            {/* Shooting Stars Effect - Only on high-performance devices */}
            {perfSettings.shootingStarCount > 0 && (
              <div className="absolute inset-0">
                {[...Array(perfSettings.shootingStarCount)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute h-px w-[100px] bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `shooting-star ${5 + Math.random() * 5}s linear infinite ${Math.random() * 5}s`,
                      transform: 'rotate(-45deg)',
                      willChange: 'transform'
                    }}
                  />
                ))}
              </div>
            )}

            {/* Floating Particles - Reduced count on mobile */}
            {perfSettings.particleCount > 0 && (
              <div className="absolute inset-0">
                {[...Array(perfSettings.particleCount)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-[#8B5CF6] rounded-full opacity-20"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${10 + Math.random() * 20}s ease-in-out infinite ${Math.random() * 10}s`,
                      willChange: perfSettings.enableComplexAnimations ? 'transform' : 'auto'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative z-10 w-full max-w-full overflow-x-hidden">
            <Navigation />
            {/* Hero has its own opaque background, so it covers the fixed background */}
            <Hero />

            {/* These sections will be transparent to show the fixed background */}
            <About />
            <DreamProject />
            <Projects />
            <Skills />
            <Contact />
          </div>

          <footer className="relative z-10 bg-[#0A0118]/80 backdrop-blur-md border-t border-[#1E1B4B]/50 pt-6 pb-20 sm:py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-slate-400 text-xs sm:text-sm">
              <p>© {new Date().getFullYear()} {personalInfo.name}. Crafted with passion and precision.</p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
