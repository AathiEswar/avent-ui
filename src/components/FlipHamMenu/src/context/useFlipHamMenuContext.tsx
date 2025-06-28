import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Variants } from 'framer-motion';
import { NavLink } from '../types';

export interface FlipHamMenuContextType {
  isActive: boolean;
  setActive: (active: boolean) => void;
  variants: Variants;
  flipHamMenuNavLinks: NavLink[];
  openMenuLabel: string;
  closeMenuLabel: string;
}

const FlipHamMenuContext = createContext<FlipHamMenuContextType | undefined>(undefined);

export interface FlipHamMenuProviderProps {
  children: ReactNode;
  variants: Variants;
  flipHamMenuNavLinks: NavLink[];
  openMenuLabel?: string;
  closeMenuLabel?: string;
  initialActive?: boolean;
}

export const FlipHamMenuProvider: React.FC<FlipHamMenuProviderProps> = ({
  children,
  variants,
  flipHamMenuNavLinks,
  openMenuLabel = "Open Menu",
  closeMenuLabel = "Close Menu",
  initialActive = false
}) => {
  const [isActive, setActive] = useState(initialActive);
  
  const value: FlipHamMenuContextType = {
    isActive,
    setActive,
    variants,
    flipHamMenuNavLinks,
    openMenuLabel,
    closeMenuLabel
  };

  return (
    <FlipHamMenuContext.Provider value={value}>
      {children}
    </FlipHamMenuContext.Provider>
  );
};

export const useFlipHamMenuContext = (): FlipHamMenuContextType => {
  const context = useContext(FlipHamMenuContext);
  if (context === undefined) {
    throw new Error('useFlipHamMenuContext must be used within a FlipHamMenuProvider');
  }
  return context;
};
