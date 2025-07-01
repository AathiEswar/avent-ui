import React, { createContext, useContext, useState } from 'react';
import { FlipHamMenuContextType, FlipHamMenuProviderProps } from '../types';

const FlipHamMenuContext = createContext<FlipHamMenuContextType | undefined>(undefined);

export const FlipHamMenuProvider: React.FC<FlipHamMenuProviderProps> = ({
  children,
  variants,
  initialActive = false,
  enableNavLinkHoverAnim = true,
}) => {
  const [isActive, setActive] = useState(initialActive);
  function handleActiveState() {
    setActive(!isActive)
  }
  const value: FlipHamMenuContextType = {
    isActive,
    setActive,
    variants,
    handleActiveState,
    enableNavLinkHoverAnim,
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
