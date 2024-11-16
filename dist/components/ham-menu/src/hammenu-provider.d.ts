import React, { ReactNode } from 'react';
interface ButtonContextType {
    isActive: boolean;
    toggleActive: () => void;
    backgroundColor: string;
    toggleBackgroundColor: (backgroundColor: string) => void;
}
export declare const ButtonProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useButtonContext: () => ButtonContextType;
export {};
