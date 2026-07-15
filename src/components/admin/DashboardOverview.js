import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaEnvelope, FaImages, FaStar } from 'react-icons/fa';
import { getStats } from '../../api/endpoints';

const DashboardOverview = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getStats();
        setStats(res.data);
      } catch (err) {
        setStats(null);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { label: 'Gallery Images', value: stats?.total_images, icon: FaImages, link: '/admin/dashboard/gallery' },
    {
      label: 'Active Announcements',
      value: stats?.active_announcements,
      icon: FaBullhorn,
      link: '/admin/dashboard/announcements',
    },
    { label: 'Testimonials', value: stats?.total_testimonials, icon: FaStar, link: '/admin/dashboard/testimonials' },
    { label: 'Unread Messages', value: stats?.unread_messages, icon: FaEnvelope, link: '/admin/dashboard/messages' },
  ];

  return (
    <div className="manager-section">
      <h2>Overview</h2>
      {loading ? (
        <p>Loading stats...</p>
      ) : (
        <div className="stats-grid">
          {cards.map((card) => (
            <Link to={card.link} className="stat-card" key={card.label}>
              <card.icon size={26} />
              <div>
                <span className="stat-value">{card.value ?? '—'}</span>
                <span className="stat-label">{card.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
      <p className="dashboard-hint">
        Use the sidebar to upload gallery images, post announcements, curate testimonials, and
        review messages from your website visitors.
      </p>
    </div>
  );
};

export default DashboardOverview;
