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
          max-width: none;
          margin: 40px auto;
          display: flex;
          justify-content: center;
          padding: 0;
        }

        .motorbike-wrapper {
          width: 100%;
          height: 200px;
          position: relative;
          overflow: visible;
          background: transparent;
          border-radius: 0;
          display: flex;
          align-items: center;
        }

        /* Road line */
        .road-line {
          position: absolute;
          bottom: 70px;
          left: 0;
          width: 100%;
          height: 2px;
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
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 5;
        }

        /* Motorbike image */
        .motorbike-image {
          height: 120px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(255, 192, 0, 0.3));
          animation: motorbike-ride 8s infinite linear;
        }

        /* Delivery badge */
        .delivery-badge {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.85);
          border: 2px solid #FFC000;
          color: #FFC000;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 900;
          border-radius: 6px;
          letter-spacing: 1.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
          pointer-events: none;
          animation: badge-fade 8s infinite linear;
          z-index: 10;
          white-space: nowrap;
        }

        /* Speed lines */
        .speed-line {
          position: absolute;
          background: #FFC000;
          opacity: 0;
          z-index: 2;
        }

        .speed-line-1 {
          height: 2px;
          width: 50px;
          top: 85px;
          animation: speed-line-1-anim 8s infinite linear;
        }

        .speed-line-2 {
          height: 2px;
          width: 40px;
          top: 100px;
          animation: speed-line-2-anim 8s infinite linear;
        }

        .speed-line-3 {
          height: 2px;
          width: 35px;
          top: 115px;
          animation: speed-line-3-anim 8s infinite linear;
        }

        @keyframes motorbike-ride {
          0% {
            transform: translateX(-150vw);
            opacity: 1;
          }
          100% {
            transform: translateX(150vw);
            opacity: 1;
          }
        }

        @keyframes badge-fade {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes speed-line-1-anim {
          0% {
            left: -100px;
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        @keyframes speed-line-2-anim {
          0% {
            left: -80px;
            opacity: 0;
          }
          15% {
            opacity: 0.5;
          }
          85% {
            opacity: 0.2;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        @keyframes speed-line-3-anim {
          0% {
            left: -60px;
            opacity: 0;
          }
          20% {
            opacity: 0.4;
          }
          80% {
            opacity: 0.1;
          }
          100% {
            left: 100vw;
            opacity: 0;
          }
        }

        /* Tablet optimization */
        @media (max-width: 768px) {
          .motorbike-container {
            margin: 30px auto;
            padding: 0;
          }

          .motorbike-wrapper {
            height: 180px;
          }

          .motorbike-image {
            height: 100px;
          }

          .delivery-badge {
            font-size: 12px;
            padding: 6px 12px;
            top: -30px;
          }

          .road-line {
            bottom: 60px;
          }
        }

        /* Mobile optimization */
        @media (max-width: 480px) {
          .motorbike-container {
            margin: 20px auto;
            padding: 0;
          }

          .motorbike-wrapper {
            height: 150px;
          }

          .motorbike-image {
            height: 80px;
          }

          .delivery-badge {
            font-size: 11px;
            padding: 5px 10px;
            letter-spacing: 1px;
            top: -25px;
          }

          .road-line {
            bottom: 50px;
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