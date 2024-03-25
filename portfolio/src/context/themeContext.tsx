import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}
interface ThemeProviderProps {
    children: ReactNode; // Explicitly type the 'children' prop
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'dark',
    toggleTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('dark'); // Default theme

    // Function to toggle the theme
    const toggleTheme = () => {
        setTheme((current) => (current === 'light' ? 'dark' : 'light'));
    };

    // Effect to apply the theme class to the body
    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
