// darkModeContext.tsx
import React, { MouseEvent, ReactNode, createContext, useContext, useState } from 'react';
import { MouseEventHandler } from 'react';

interface DarkModeContextData {
    isDarkMode: boolean;
    toggleDarkMode: ((arg1?: boolean) => void) & MouseEventHandler<HTMLButtonElement>;
}

export const DarkModeContext = createContext<DarkModeContextData | undefined>(
    undefined
);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleDarkMode = (event?: MouseEvent<HTMLButtonElement> | boolean) => {
        // check if value is boolean
        if (typeof event === 'boolean') {
            setIsDarkMode(event);
        } else {
            setIsDarkMode(!isDarkMode);
        }
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = (): DarkModeContextData => {
    const context = useContext(DarkModeContext);

    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }

    return context;
};
