/**
 * Responsive Type Definitions for Nilanjan Nayak's Portfolio
 * Provides standard viewport breakpoints, device categories, orientations,
 * and adaptive component configurations.
 */

import type { LucideIcon } from 'lucide-react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'ultrawide';

export type Orientation = 'portrait' | 'landscape';

export interface ViewportDimensions {
  width: number;
  height: number;
  aspectRatio: number;
}

export interface ResponsiveState extends ViewportDimensions {
  breakpoint: Breakpoint;
  deviceType: DeviceType;
  orientation: Orientation;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isUltraWide: boolean;
  isTouch: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
}

/**
 * Utility type to define values per breakpoint
 */
export type ResponsiveValue<T> = {
  default: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
  '3xl'?: T;
};

/**
 * Configuration for responsive 3D / canvas elements
 */
export interface ResponsiveCanvasConfig {
  pixelRatio: number;
  fov: number;
  cameraZ: number;
  particleCount: number;
  enablePostProcessing: boolean;
}

/**
 * Orbit view responsive layout parameters
 */
export interface ResponsiveOrbitConfig {
  orbitRadius: number;
  planetSize: number;
  hubSize: number;
  iconSize: number;
  fontSize: string;
}

/* ==========================================================================
   Professional Mobile Navigation & Component Types
   ========================================================================== */

/**
 * Modes of presentation for mobile navigation
 */
export type MobileNavMode = 'floating-dock' | 'sheet-drawer' | 'compact-bar';

/**
 * Navigation item optimized for touch interfaces and compact mobile displays
 */
export interface MobileNavItem {
  id: string;
  label: string;
  shortLabel?: string;
  sectionId: string;
  icon: LucideIcon | React.ComponentType<{ size?: number | string; className?: string; color?: string }>;
  badge?: string | number;
  ariaLabel?: string;
}

/**
 * Quick action item displayed in mobile bottom dock / sheet
 */
export interface MobileQuickAction {
  id: string;
  label: string;
  icon: LucideIcon | React.ComponentType<{ size?: number | string; className?: string; color?: string }>;
  onClick?: () => void;
  href?: string;
  isExternal?: boolean;
  download?: boolean;
  variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
}

/**
 * Safe area insets for modern mobile displays (notches, dynamic islands, home indicators)
 */
export interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

/**
 * Mobile device physical capabilities and accessibility preferences
 */
export interface MobileDeviceCapabilities {
  hasTouch: boolean;
  maxTouchPoints: number;
  prefersReducedMotion: boolean;
  isStandalonePWA: boolean;
  safeAreaInsets: SafeAreaInsets;
}

/**
 * Properties for mobile navigation bar and floating bottom dock
 */
export interface MobileNavigationProps {
  navItems: MobileNavItem[];
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  isDrawerOpen: boolean;
  onToggleDrawer: () => void;
  onCloseDrawer: () => void;
  quickActions?: MobileQuickAction[];
}

/**
 * Configuration for mobile drawer bottom sheet
 */
export interface MobileDrawerConfig {
  enableSwipeToClose?: boolean;
  showBackdropBlur?: boolean;
  maxHeightVh?: number;
  showGrabHandle?: boolean;
}

/**
 * Touch feedback options for buttons and cards
 */
export interface MobileTouchFeedback {
  scaleOnTap?: boolean;
  hapticEnabled?: boolean;
  glowOnActive?: boolean;
}

/**
 * Standard configuration props for any component optimized for mobile
 */
export interface MobileOptimizedComponentProps {
  isMobile?: boolean;
  isTouch?: boolean;
  reducedMotion?: boolean;
}

