import React, { useState, createContext, useContext, ReactNode } from 'react';

interface ButtonContextType {
  isActive: boolean;
  toggleActive: () => void;
  backgroundColor: string;
  toggleBackgroundColor: (backgroundColor: string) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [backgroundColor, setBackgroundColor] = useState<string>('rgb(29,29,29)');
  
  const toggleActive = () => setIsActive((prev) => !prev);
  const toggleBackgroundColor = (backgroundColor: string) => setBackgroundColor(backgroundColor);
  
  const value: ButtonContextType = {
    isActive,
    toggleActive,
    backgroundColor,
    toggleBackgroundColor
  };

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = (): ButtonContextType => {
  const context = useContext(ButtonContext);
  if (context === undefined) {
    throw new Error('useButtonContext must be used within a ButtonProvider');
  }
  return context;
};

