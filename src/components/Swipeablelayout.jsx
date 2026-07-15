import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SwipeableLayout = ({ children }) => {
    const navigate = useNavigate();
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e) => {
            touchStartX.current = e.touches[0].clientX;
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e) => {
            const touchEndX = e.changedTouches[0].clientX;
            const touchEndY = e.changedTouches[0].clientY;

            const diffX = touchEndX - touchStartX.current;
            const diffY = Math.abs(touchEndY - touchStartY.current);

            // Swipe right to go back (at least 50px horizontally, less vertical movement)
            if (diffX > 50 && diffY < 100) {
                navigate(-1);
                // Optional: haptic feedback on mobile
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
            }
        };

        window.addEventListener('touchstart', handleTouchStart, false);
        window.addEventListener('touchend', handleTouchEnd, false);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart, false);
            window.removeEventListener('touchend', handleTouchEnd, false);
        };
    }, [navigate]);

    return <>{children}</>;
};

export default SwipeableLayout;