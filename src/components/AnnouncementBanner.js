import React, { useEffect, useState } from 'react';
import { FiVolume2, FiX } from 'react-icons/fi';
import { getAnnouncements } from '../api/endpoints';

const DISMISSED_KEY = 'kreata-dismissed-announcements';

const AnnouncementBanner = () => {
  const [announcement, setAnnouncement] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await getAnnouncements(true);
        const active = res.data;
        if (active && active.length > 0) {
          const latest = active[0];
          const dismissed = JSON.parse(sessionStorage.getItem(DISMISSED_KEY) || '[]');
          if (!dismissed.includes(latest.id)) {
            setAnnouncement(latest);
            setVisible(true);
          }
        }
      } catch (err) {
        // Non-critical - fail silently and simply show no banner
      }
    };
    fetchAnnouncement();
  }, []);

  const handleDismiss = () => {
    if (announcement) {
      try {
        const dismissed = JSON.parse(sessionStorage.getItem(DISMISSED_KEY) || '[]');
        dismissed.push(announcement.id);
        sessionStorage.setItem(DISMISSED_KEY, JSON.stringify(dismissed));
      } catch (e) {
        // ignore
      }
    }
    setVisible(false);
  };

  if (!visible || !announcement) return null;

  return (
    <div className="announcement-banner">
      <div className="announcement-content">
        <FiVolume2 size={18} />
        <span>
          <strong>{announcement.title}:</strong> {announcement.message}
        </span>
      </div>
      <button className="announcement-close" onClick={handleDismiss} aria-label="Dismiss announcement">
        <FiX size={18} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
