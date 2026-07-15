import React from 'react';

/**
 * Animated motorbike delivery component with female rider
 * Shows a woman riding a motorbike moving left to right with "DELIVERY" text
 * Loops infinitely with smooth animation
 */
const MotorbikeDelivery = () => {
    return (
        <div className="motorbike-container">
            <svg
                className="motorbike-svg"
                viewBox="0 0 600 300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                {/* Background road line */}
                <line x1="0" y1="220" x2="600" y2="220" stroke="#FFC000" strokeWidth="3" strokeDasharray="30,15" />

                {/* Motorbike with rider group */}
                <g className="motorbike-group">
                    {/* ===== MOTORBIKE ===== */}

                    {/* Back wheel */}
                    <circle cx="120" cy="220" r="20" fill="none" stroke="#000" strokeWidth="3" />
                    <circle cx="120" cy="220" r="16" fill="none" stroke="#FFC000" strokeWidth="1.5" />
                    <circle cx="120" cy="220" r="4" fill="#FFC000" />

                    {/* Front wheel */}
                    <circle cx="260" cy="220" r="20" fill="none" stroke="#000" strokeWidth="3" />
                    <circle cx="260" cy="220" r="16" fill="none" stroke="#FFC000" strokeWidth="1.5" />
                    <circle cx="260" cy="220" r="4" fill="#FFC000" />

                    {/* Main frame */}
                    <line x1="120" y1="220" x2="145" y2="130" stroke="#000" strokeWidth="3" />
                    <line x1="145" y1="130" x2="210" y2="115" stroke="#000" strokeWidth="3" />
                    <line x1="210" y1="115" x2="260" y2="220" stroke="#000" strokeWidth="3" />
                    <line x1="120" y1="220" x2="260" y2="220" stroke="#000" strokeWidth="2.5" />

                    {/* Seat - positioned for rider */}
                    <ellipse cx="170" cy="135" rx="28" ry="15" fill="#FFC000" stroke="#000" strokeWidth="1.5" />

                    {/* Handlebar support */}
                    <line x1="210" y1="115" x2="210" y2="95" stroke="#000" strokeWidth="2" />

                    {/* Handlebars */}
                    <line x1="210" y1="95" x2="195" y2="80" stroke="#000" strokeWidth="2.5" />
                    <line x1="210" y1="95" x2="225" y2="80" stroke="#000" strokeWidth="2.5" />
                    <circle cx="195" cy="80" r="3" fill="#000" />
                    <circle cx="225" cy="80" r="3" fill="#000" />
                    <line x1="195" y1="80" x2="225" y2="80" stroke="#000" strokeWidth="1.5" />

                    {/* Front fork */}
                    <line x1="260" y1="220" x2="260" y2="110" stroke="#000" strokeWidth="2" />

                    {/* ===== DELIVERY BADGE - BIG AND VISIBLE ===== */}
                    {/* Dark background box */}
                    <rect x="140" y="150" width="60" height="45" rx="5" fill="#000" stroke="#FFC000" strokeWidth="2.5" />

                    {/* Gold text with black stroke for maximum visibility */}
                    <text
                        x="170"
                        y="180"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="18"
                        fontWeight="900"
                        fill="#FFC000"
                        stroke="#000"
                        strokeWidth="1.2"
                        fontFamily="Arial, sans-serif"
                    >
                        DELIVERY
                    </text>

                    {/* ===== FEMALE RIDER ===== */}

                    {/* Head - tilted forward looking in direction of travel */}
                    <g transform="translate(170, 95) rotate(15)">
                        <circle cx="0" cy="0" r="14" fill="#d4a574" stroke="#000" strokeWidth="1.5" />

                        {/* Hair */}
                        <ellipse cx="0" cy="-7" rx="16" ry="10" fill="#8B4513" />
                        <path d="M -15 0 Q 0 -17 15 0" fill="#8B4513" />

                        {/* Helmet outline (semi-transparent) */}
                        <ellipse cx="0" cy="0" rx="15.5" ry="16" fill="none" stroke="#FFC000" strokeWidth="2" opacity="0.8" />

                        {/* Face features - eyes looking to the right (direction of travel) */}
                        {/* Left eye - looking right */}
                        <circle cx="-6" cy="-4" r="1.8" fill="#000" />
                        {/* Right eye - looking right */}
                        <circle cx="4" cy="-4" r="1.8" fill="#000" />
                        {/* Pupils facing right */}
                        <circle cx="-4" cy="-4" r="0.8" fill="#FFC000" />
                        <circle cx="6" cy="-4" r="0.8" fill="#FFC000" />
                        {/* Nose */}
                        <line x1="0" y1="4" x2="0" y2="6" stroke="#000" strokeWidth="1" />
                        {/* Mouth/smile */}
                        <path d="M -2 9 Q 0 11 2 9" stroke="#000" strokeWidth="1" fill="none" />
                    </g>

                    {/* Body / Jacket (gold) */}
                    <rect x="155" y="110" width="30" height="28" rx="2" fill="#FFC000" stroke="#000" strokeWidth="1.5" />

                    {/* Arms - gripping handlebars */}
                    <line x1="157" y1="118" x2="140" y2="100" stroke="#d4a574" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="183" y1="118" x2="200" y2="100" stroke="#d4a574" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Hands */}
                    <circle cx="140" cy="100" r="2.5" fill="#d4a574" stroke="#000" strokeWidth="1" />
                    <circle cx="200" cy="100" r="2.5" fill="#d4a574" stroke="#000" strokeWidth="1" />

                    {/* Legs */}
                    <line x1="162" y1="138" x2="160" y2="165" stroke="#000" strokeWidth="2.5" />
                    <line x1="178" y1="138" x2="180" y2="165" stroke="#000" strokeWidth="2.5" />

                    {/* Feet on footpegs */}
                    <circle cx="160" cy="165" r="3" fill="#d4a574" stroke="#000" strokeWidth="1" />
                    <circle cx="180" cy="165" r="3" fill="#d4a574" stroke="#000" strokeWidth="1" />

                    {/* Speed lines (motion effect) */}
                    <line x1="60" y1="120" x2="95" y2="120" stroke="#FFC000" strokeWidth="2" opacity="0.6" />
                    <line x1="55" y1="155" x2="90" y2="155" stroke="#FFC000" strokeWidth="2" opacity="0.5" />
                    <line x1="70" y1="190" x2="105" y2="190" stroke="#FFC000" strokeWidth="1.5" opacity="0.4" />
                </g>
            </svg>

            <style jsx>{`
        .motorbike-container {
          width: 100%;
          max-width: 800px;
          margin: 50px auto 0;
          display: flex;
          justify-content: center;
          overflow: hidden;
          padding: 20px;
        }

        .motorbike-svg {
          width: 100%;
          height: auto;
          min-height: 300px;
          filter: drop-shadow(0 8px 16px rgba(255, 192, 0, 0.25));
        }

        .motorbike-group {
          animation: motorbike-ride 5.5s infinite ease-in-out;
          transform-origin: center;
        }

        @keyframes motorbike-ride {
          0% {
            transform: translateX(-200px);
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          92% {
            opacity: 1;
          }
          100% {
            transform: translateX(600px);
            opacity: 0;
          }
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .motorbike-container {
            max-width: 100%;
            margin: 30px auto 0;
            padding: 10px;
          }

          .motorbike-svg {
            min-height: 250px;
          }

          .motorbike-group {
            animation: motorbike-ride 4.5s infinite ease-in-out;
          }
        }

        @media (max-width: 480px) {
          .motorbike-container {
            margin: 20px auto 0;
            padding: 8px;
          }

          .motorbike-svg {
            min-height: 220px;
          }

          .motorbike-group {
            animation: motorbike-ride 4s infinite ease-in-out;
          }
        }

        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          .motorbike-group {
            animation: none;
            transform: translateX(150px);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default MotorbikeDelivery;