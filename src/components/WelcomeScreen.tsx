import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, Variants } from 'framer-motion';
import { Code2, Terminal, Database, Cpu, Globe } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

// Premium Particle System (Subtle & Elegant)
const ParticleField = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-400/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Staggered Text Reveal
const StaggeredText = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15, delayChildren: 0.6 }
        }
      }}
      className={`flex flex-wrap justify-center overflow-hidden ${className}`}
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden mr-[0.2em] sm:mr-[0.25em] mb-2 pb-2">
          <motion.div
            variants={{
              hidden: { y: "120%", opacity: 0, rotate: 2 },
              visible: { y: 0, opacity: 1, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 80 } }
            }}
          >
            {word}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

// Advanced Animated Typewriter Effect
const AnimatedTypewriter = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const [displayedChars, setDisplayedChars] = useState<{char: string, id: number}[]>([]);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setInterval>;
    
    const startTyping = () => {
      timer = setInterval(() => {
        if (index < text.length) {
          // Capture index inside the closure
          const currentIndex = index;
          const char = text[currentIndex];
          setDisplayedChars(prev => [...prev, { char, id: currentIndex }]);
          index++;
        } else {
          clearInterval(timer);
        }
      }, 70); // Crisp typing speed
    };

    const initialDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(timer);
    };
  }, [text, delay]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="flex">
        <AnimatePresence>
          {displayedChars.map((item) => (
            <motion.span
              key={item.id}
              initial={{ opacity: 0, scale: 0.8, y: 4, filter: "blur(2px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="inline-block bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent font-medium"
            >
              {item.char === " " ? "\u00A0" : item.char}
            </motion.span>
          ))}
        </AnimatePresence>
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="ml-[6px] w-[3px] h-[1em] bg-blue-500 inline-block shadow-[0_0_8px_rgba(59,130,246,0.6)]"
      />
    </span>
  );
};

// Premium Background Effects
const BackgroundEffect = () => (
  <>
    <div className="absolute inset-0 bg-[#020617]" />
    
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px]"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-[20%] left-[40%] w-[30%] h-[30%] bg-indigo-500/10 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
    <ParticleField />
  </>
);

// Sleek Glassmorphism Icon Button
const IconButton = ({ Icon, delay = 0 }: { Icon: any; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    whileHover={{ y: -5, scale: 1.05 }}
    className="relative group cursor-default"
  >
    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xl rounded-xl border border-slate-700/50 group-hover:border-blue-500/50 transition-colors duration-300 shadow-xl">
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
    </div>
  </motion.div>
);

// Razor-thin Loading Progress
const LoadingProgress = ({ progress }: { progress: number }) => (
  <div className="fixed bottom-0 left-0 w-full z-50">
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 w-full px-4">
      <motion.div
        className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] flex justify-between w-full max-w-xs sm:max-w-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <span>System Initialization</span>
        <span className="text-blue-400">{Math.floor(progress).toString().padStart(3, '0')}%</span>
      </motion.div>
    </div>
    <div className="h-[2px] bg-slate-900 w-full relative">
      <motion.div
        className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
);

interface WelcomeScreenProps {
  onLoadingComplete?: () => void;
}

const WelcomeScreen = ({ onLoadingComplete }: WelcomeScreenProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const backgroundX = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1920], [-20, 20]);
  const backgroundY = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1080], [-20, 20]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 800);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // 4 seconds total load time

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onLoadingComplete, mouseX, mouseY]);

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, scale: 0.98, filter: 'blur(10px)', transition: { duration: 0.8, ease: "easeOut" } }
  };

  const icons = [Terminal, Code2, Cpu, Database, Globe];

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#020617] overflow-hidden z-[100]"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Top Status Bar */}
          <div className="absolute top-0 w-full p-6 sm:p-8 flex justify-between items-start font-mono text-[10px] text-slate-500 uppercase tracking-widest z-20 pointer-events-none">
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              PORTFOLIO_SYS // V.2025.1
            </motion.div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                STATUS: ONLINE
              </motion.div>
            </div>
          </div>

          <motion.div className="absolute inset-0" style={{ x: backgroundX, y: backgroundY }}>
            <BackgroundEffect />
          </motion.div>

          <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 z-10">
            
            {/* Elegant Icon Array */}
            <div className="flex gap-4 sm:gap-6 mb-12">
              {icons.map((Icon, index) => (
                <IconButton key={index} Icon={Icon} delay={index * 0.1 + 0.2} />
              ))}
            </div>

            {/* Typography Section */}
            <div className="text-center space-y-4 sm:space-y-6 max-w-4xl">
              <div className="flex flex-col items-center justify-center space-y-2">
                <StaggeredText 
                  text="Welcome to my" 
                  className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white" 
                />
                
                <motion.div
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
                >
                  <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Digital Portfolio
                  </h1>
                </motion.div>
              </div>

              {/* Typewriter Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="flex justify-center pt-6 sm:pt-8 px-2"
              >
                <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-xl shadow-lg max-w-full overflow-hidden">
                  <span className="text-[10px] sm:text-xs font-mono text-slate-500 mr-2 sm:mr-3 flex-shrink-0">IDENTIFIED AS:</span>
                  <AnimatedTypewriter
                    text={personalInfo.name}
                    delay={1800}
                    className="text-sm sm:text-lg lg:text-xl font-mono tracking-wider truncate"
                  />
                </div>
              </motion.div>

              {/* Minimalist Skip Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.8 }}
                className="pt-12"
              >
                <button
                  onClick={() => setLoadingProgress(100)}
                  className="group relative px-8 py-3 bg-transparent text-sm font-mono uppercase tracking-widest text-slate-300 hover:text-white transition-colors duration-300 overflow-hidden rounded-full border border-slate-700 hover:border-blue-500/50"
                >
                  <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="relative flex items-center gap-3">
                    Skip Intro
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </motion.div>
            </div>
          </div>

          <LoadingProgress progress={loadingProgress} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
