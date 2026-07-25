import React from 'react';

/**
 * Static motorbike delivery component using motorbike.png image
 * Shows motorbike in constant position (no animation)
 * Displays "DELIVERY" text overlay
 */
const MotorbikeDelivery = () => {
  return (
    <div className="motorbike-container">
      <div className="motorbike-wrapper">
        {/* Road line */}
        <div className="road-line" />

        {/* Motorbike image - STATIC (no animation) */}
        <div className="motorbike-animated">
          <img
            src="/motorbike.png"
            alt="Delivery Motorbike"
            className="motorbike-image"
          />
          {/* Delivery badge overlay */}
          <div className="delivery-badge">DELIVERY</div>
        </div>

        {/* Speed lines - HIDDEN */}
        <div className="speed-line speed-line-1" style={{ display: 'none' }} />
        <div className="speed-line speed-line-2" style={{ display: 'none' }} />
        <div className="speed-line speed-line-3" style={{ display: 'none' }} />
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
          justify-content: center;
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

        /* Motorbike animated container - STATIC POSITION */
        .motorbike-animated {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: auto;
          height: 100%;
          z-index: 5;
          transform: translateX(0);
        }

        /* Motorbike image - NO ANIMATION */
        .motorbike-image {
          height: 120px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(255, 192, 0, 0.3));
          animation: none;
          transform: translateX(0);
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
          animation: none;
          opacity: 1;
          z-index: 10;
          white-space: nowrap;
        }

        /* Speed lines - HIDDEN */
        .speed-line {
          display: none;
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
      `}</style>
    </div>
  );
};

export default MotorbikeDelivery;