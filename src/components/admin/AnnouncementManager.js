import React, { useEffect, useState } from 'react';
import {
  createAnnouncement,
  deleteAnnouncement,
  getAnnouncements,
  updateAnnouncement,
} from '../../api/endpoints';

const AnnouncementManager = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await getAnnouncements(false);
      setAnnouncements(res.data);
    } catch (err) {
      setError('Failed to load announcements.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.title.trim() || !form.message.trim()) {
      setError('Please fill in both title and message.');
      return;
    }
    setSubmitting(true);
    try {
      await createAnnouncement({ title: form.title, message: form.message, is_active: true });
      setForm({ title: '', message: '' });
      setSuccess('Announcement posted — it is now visible on the website.');
      fetchAll();
    } catch (err) {
      setError('Failed to post announcement.');
    } finally {
      setSubmitting(false);
    }
  };

  const toggleActive = async (announcement) => {
    try {
      await updateAnnouncement(announcement.id, { is_active: !announcement.is_active });
      fetchAll();
    } catch (err) {
      alert('Failed to update announcement.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this announcement?')) return;
    try {
      await deleteAnnouncement(id);
      setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    } catch (err) {
      alert('Failed to delete announcement.');
    }
  };

  return (
    <div className="manager-section">
      <h2>Announcements</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>Post New Announcement</h3>
        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. Holiday Hours"
          />
        </div>
        <div className="form-group">
          <label>Message *</label>
          <textarea
            rows="3"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="e.g. We'll be closed on 25th December. Online support remains available."
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? 'Posting...' : 'Post Announcement'}
        </button>
      </form>

      <h3>All Announcements ({announcements.length})</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="admin-list">
          {announcements.map((a) => (
            <div className={`admin-list-item ${!a.is_active ? 'inactive' : ''}`} key={a.id}>
              <div>
                <strong>{a.title}</strong>{' '}
                {!a.is_active && <span className="badge">Inactive</span>}
                <p>{a.message}</p>
                <small>{new Date(a.created_at).toLocaleString()}</small>
              </div>
              <div className="admin-list-actions">
                <button className="btn btn-sm" onClick={() => toggleActive(a)}>
                  {a.is_active ? 'Deactivate' : 'Activate'}
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          {announcements.length === 0 && <p className="empty-text">No announcements yet.</p>}
        </div>
      )}
    </div>
  );
};

export default AnnouncementManager;
