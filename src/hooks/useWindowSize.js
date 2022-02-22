import React from 'react';
import setWindowSize from '../utils/setWindowSize';

export function useWindowSize() {
    const [isWindowSize, setIsWindowSize] = React.useState(setWindowSize());
    React.useEffect(() => {
        function handleResizeWindow() {
            setIsWindowSize(setWindowSize());
        }
        window.addEventListener('resize', handleResizeWindow);
        return () => window.removeEventListener('resize', handleResizeWindow);
    }, []);

    return isWindowSize;
}