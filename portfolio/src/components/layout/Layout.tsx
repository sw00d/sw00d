import React, { ReactNode, useEffect } from 'react';
import { useDarkMode } from '@/context/darkModeContext';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const [mounting, setMounting] = React.useState(true);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            toggleDarkMode(localStorage.getItem('isDarkMode') === 'true' ? true : false);
        }
        setMounting(false)
    }, [])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
        }
    }, [isDarkMode]);

    return (
        <div className={`${isDarkMode ? 'dark' : ''}`}>
            {!mounting && children}
        </div>
    );
};

export default Layout;
