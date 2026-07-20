import React from 'react';

/**
 * Animated motorbike delivery component using motorbike.png image
 * Shows motorbike moving left to right with "DELIVERY" text overlay
 * Loops infinitely with smooth animation
 */
const MotorbikeDelivery = () => {
  return (
    <div className="motorbike-container">
      <div className="motorbike-wrapper">
        {/* Road line */}
        <div className="road-line" />

        {/* Motorbike image with animation */}
        <div className="motorbike-animated">
          <img
            src="/motorbike.png"
            alt="Delivery Motorbike"
            className="motorbike-image"
          />
          {/* Optional: Delivery badge overlay */}
          <div className="delivery-badge">DELIVERY</div>
        </div>

        {/* Speed lines */}
        <div className="speed-line speed-line-1" />
        <div className="speed-line speed-line-2" />
        <div className="speed-line speed-line-3" />
      </div>

      <style jsx>{`
        .motorbike-container {
          width: 100%;
          max-width: 900px;
          margin: 60px auto 0;
          display: flex;
          justify-content: center;
          padding: 20px;
        }

        .motorbike-wrapper {
          width: 100%;
          height: 350px;
          position: relative;
          overflow: hidden;
          background: linear-gradient(to bottom, rgba(255, 192, 0, 0.05) 0%, transparent 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
        }

        /* Road line */
        .road-line {
          position: absolute;
          bottom: 80px;
          left: 0;
          width: 100%;
          height: 3px;
          background: repeating-linear-gradient(
            to right,
            #FFC000 0px,
            #FFC000 30px,
            transparent 30px,
            transparent 50px
          );
          z-index: 1;
        }

        /* Motorbike animated container */
        .motorbike-animated {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 5;
        }

        /* Motorbike image */
        .motorbike-image {
          height: 280px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(255, 192, 0, 0.35));
          animation: motorbike-ride 6s infinite ease-in-out;
        }

        /* Delivery badge */
        .delivery-badge {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.85);
          border: 3px solid #FFC000;
          color: #FFC000;
          padding: 12px 24px;
          font-size: 18px;
          font-weight: 900;
          border-radius: 8px;
          letter-spacing: 2px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
          pointer-events: none;
          animation: badge-fade 6s infinite ease-in-out;
          z-index: 10;
        }

        /* Speed lines */
        .speed-line {
          position: absolute;
          background: #FFC000;
          opacity: 0;
          z-index: 2;
        }

        .speed-line-1 {
          height: 3px;
          width: 60px;
          top: 120px;
          animation: speed-line-1-anim 6s infinite ease-in-out;
        }

        .speed-line-2 {
          height: 3px;
          width: 50px;
          top: 180px;
          animation: speed-line-2-anim 6s infinite ease-in-out;
        }

        .speed-line-3 {
          height: 2px;
          width: 40px;
          top: 240px;
          animation: speed-line-3-anim 6s infinite ease-in-out;
        }

        @keyframes motorbike-ride {
          0% {
            transform: translateX(-500px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            transform: translateX(500px);
            opacity: 0;
          }
        }

        @keyframes badge-fade {
          0% {
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          95% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes speed-line-1-anim {
          0% {
            left: 100px;
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.5;
          }
          95% {
            opacity: 0.3;
          }
          100% {
            left: -100px;
            opacity: 0;
          }
        }

        @keyframes speed-line-2-anim {
          0% {
            left: 120px;
            opacity: 0;
          }
          8% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.4;
          }
          92% {
            opacity: 0.2;
          }
          100% {
            left: -80px;
            opacity: 0;
          }
        }

        @keyframes speed-line-3-anim {
          0% {
            left: 140px;
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            left: -60px;
            opacity: 0;
          }
        }

        /* Tablet optimization */
        @media (max-width: 768px) {
          .motorbike-container {
            margin: 40px auto 0;
            padding: 15px;
          }

          .motorbike-wrapper {
            height: 300px;
          }

          .motorbike-image {
            height: 240px;
          }

          .delivery-badge {
            font-size: 16px;
            padding: 10px 20px;
          }

          .motorbike-animated {
            animation: motorbike-ride 5s infinite ease-in-out;
          }
        }

        /* Mobile optimization */
        @media (max-width: 480px) {
          .motorbike-container {
            margin: 30px auto 0;
            padding: 12px;
          }

          .motorbike-wrapper {
            height: 240px;
          }

          .motorbike-image {
            height: 180px;
          }

          .delivery-badge {
            font-size: 14px;
            padding: 8px 16px;
            letter-spacing: 1px;
          }

          .road-line {
            bottom: 60px;
          }

          .motorbike-animated {
            animation: motorbike-ride 4.5s infinite ease-in-out;
          }
        }

        /* Reduced motion respect */
        @media (prefers-reduced-motion: reduce) {
          .motorbike-image,
          .delivery-badge,
          .speed-line {
            animation: none;
          }

          .motorbike-image {
            transform: translateX(0);
            opacity: 1;
          }

          .delivery-badge {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default MotorbikeDelivery;