import React from 'react';

/**
 * Animated motorbike delivery component
 * Motorbike runs on the road with continuous animation
 * FAST DELIVERY text positioned below
 */
const MotorbikeDelivery = () => {
  return (
    <div className="motorbike-container">
      <div className="motorbike-wrapper">
        {/* Road line */}
        <div className="road-line" />

        {/* Motorbike - ANIMATED on road */}
        <div className="motorbike-animated">
          <img
            src="/motorbike.png"
            alt="Delivery Motorbike"
            className="motorbike-image"
          />
          {/* Delivery badge overlay */}
          <div className="delivery-badge">DELIVERY</div>
        </div>
      </div>

      {/* FAST DELIVERY text below */}
      <div className="fast-delivery-text">FAST DELIVERY</div>

      <style jsx>{`
        .motorbike-container {
          width: 100%;
          max-width: none;
          margin: 40px auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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
          align-items: flex-end;
          justify-content: center;
        }

        /* Road line */
        .road-line {
          position: absolute;
          bottom: 55px;
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

        /* Motorbike animated container - STATIC ON ROAD */
        .motorbike-animated {
          position: absolute;
          bottom: 55px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: auto;
          height: auto;
          z-index: 5;
        }

        /* Motorbike image */
        .motorbike-image {
          height: 120px;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 16px rgba(255, 192, 0, 0.3));
        }

        /* Delivery badge */
        .delivery-badge {
          position: absolute;
          top: -45px;
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
          white-space: nowrap;
          z-index: 10;
        }

        /* FAST DELIVERY text */
        .fast-delivery-text {
          margin-top: 20px;
          font-size: 18px;
          font-weight: 900;
          letter-spacing: 1px;
          color: #FFC000;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          text-align: center;
          z-index: 4;
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

          .motorbike-animated {
            bottom: 50px;
          }

          .motorbike-image {
            height: 100px;
          }

          .delivery-badge {
            font-size: 12px;
            padding: 6px 12px;
            top: -38px;
          }

          .road-line {
            bottom: 50px;
          }

          .fast-delivery-text {
            font-size: 16px;
            margin-top: 15px;
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

          .motorbike-animated {
            bottom: 42px;
          }

          .motorbike-image {
            height: 80px;
          }

          .delivery-badge {
            font-size: 11px;
            padding: 5px 10px;
            letter-spacing: 1px;
            top: -32px;
          }

          .road-line {
            bottom: 42px;
          }

          .fast-delivery-text {
            font-size: 14px;
            margin-top: 12px;
            letter-spacing: 0.5px;
          }
        }
      `}</style>
    </div>
  );
};

export default MotorbikeDelivery;