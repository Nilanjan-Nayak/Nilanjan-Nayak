// Mobile Performance Utilities
// Detects device type and provides performance optimization helpers

export const isMobile = (): boolean => {
    if (typeof window === 'undefined') return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const isTablet = (): boolean => {
    if (typeof window === 'undefined') return false;
    return /iPad|Android/i.test(navigator.userAgent) && window.innerWidth >= 768 && window.innerWidth <= 1024;
};

export const isLowEndDevice = (): boolean => {
    if (typeof window === 'undefined') return false;

    // Check for low-end indicators
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const slowConnection = connection?.effectiveType === '2g' || connection?.effectiveType === 'slow-2g';
    const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

    return slowConnection || lowMemory || lowCores || false;
};

export const getPerformanceMode = (): 'high' | 'medium' | 'low' => {
    if (isLowEndDevice() || isMobile()) return 'low';
    if (isTablet()) return 'medium';
    return 'high';
};

export const shouldReduceMotion = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Performance settings based on device
export const getPerformanceSettings = () => {
    const mode = getPerformanceMode();
    const reduceMotion = shouldReduceMotion();

    return {
        // Animation settings
        enableComplexAnimations: mode === 'high' && !reduceMotion,
        enableParticles: mode === 'high' && !reduceMotion,
        enableBlurEffects: mode !== 'low',
        enableSplashCursor: mode === 'high' && !reduceMotion,

        // Particle counts
        particleCount: mode === 'high' ? 15 : mode === 'medium' ? 5 : 0,
        shootingStarCount: mode === 'high' ? 3 : mode === 'medium' ? 1 : 0,

        // Animation durations (slower on mobile to reduce CPU usage)
        animationDuration: mode === 'low' ? 0.3 : mode === 'medium' ? 0.5 : 0.7,

        // Blur amounts
        blurAmount: mode === 'high' ? 150 : mode === 'medium' ? 100 : 50,

        // Image quality
        imageQuality: mode === 'high' ? 'high' : mode === 'medium' ? 'medium' : 'low',

        // Lazy loading
        enableLazyLoading: mode !== 'high',

        // Debounce delays
        scrollDebounce: mode === 'low' ? 100 : mode === 'medium' ? 50 : 16,
        resizeDebounce: mode === 'low' ? 200 : mode === 'medium' ? 100 : 50,
    };
};

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

// Throttle utility for scroll events
export const throttle = <T extends (...args: any[]) => any>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};
