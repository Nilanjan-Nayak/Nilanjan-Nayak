import { useState, useEffect, useCallback } from 'react';
import { Breakpoint, DeviceType, Orientation, ResponsiveState } from '../types/responsive';

// Breakpoint limits in pixels (matching tailwind.config.js)
export const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const;

function getBreakpoint(width: number): Breakpoint {
  if (width >= BREAKPOINTS['3xl']) return '3xl';
  if (width >= BREAKPOINTS['2xl']) return '2xl';
  if (width >= BREAKPOINTS.xl) return 'xl';
  if (width >= BREAKPOINTS.lg) return 'lg';
  if (width >= BREAKPOINTS.md) return 'md';
  if (width >= BREAKPOINTS.sm) return 'sm';
  return 'xs';
}

function getDeviceType(width: number): DeviceType {
  if (width >= BREAKPOINTS['3xl']) return 'ultrawide';
  if (width >= BREAKPOINTS.lg) return 'desktop';
  if (width >= BREAKPOINTS.md) return 'tablet';
  return 'mobile';
}

function checkTouchSupport(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-expect-error msMaxTouchPoints legacy
    navigator.msMaxTouchPoints > 0
  );
}

const getInitialState = (): ResponsiveState => {
  if (typeof window === 'undefined') {
    return {
      width: 1280,
      height: 800,
      aspectRatio: 1.6,
      breakpoint: 'xl',
      deviceType: 'desktop',
      orientation: 'landscape',
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isUltraWide: false,
      isTouch: false,
      isLandscape: true,
      isPortrait: false,
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const breakpoint = getBreakpoint(width);
  const deviceType = getDeviceType(width);
  const orientation: Orientation = width >= height ? 'landscape' : 'portrait';
  const isTouch = checkTouchSupport();

  return {
    width,
    height,
    aspectRatio: height > 0 ? width / height : 1,
    breakpoint,
    deviceType,
    orientation,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop' || deviceType === 'ultrawide',
    isUltraWide: deviceType === 'ultrawide',
    isTouch,
    isLandscape: orientation === 'landscape',
    isPortrait: orientation === 'portrait',
  };
};

/**
 * useResponsive hook
 * Real-time reactive hook that tracks responsive breakpoint, screen dimensions,
 * device type, orientation, and touch capability with debounced updates.
 */
export function useResponsive(debounceMs = 100): ResponsiveState {
  const [state, setState] = useState<ResponsiveState>(getInitialState);

  const updateState = useCallback(() => {
    setState(getInitialState());
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(updateState, debounceMs);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // Initial check
    updateState();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [updateState, debounceMs]);

  return state;
}

export default useResponsive;
