import React, { useEffect, useState } from 'react';
import { deleteComment, getComments, markCommentRead } from '../../api/endpoints';

const MessagesManager = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAll = async () => {
    setLoading(true);
    try {
      const res = await getComments();
      setComments(res.data);
    } catch (err) {
      setError('Failed to load messages.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleMarkRead = async (id) => {
    try {
      await markCommentRead(id);
      setComments((prev) => prev.map((c) => (c.id === id ? { ...c, is_read: true } : c)));
    } catch (err) {
      alert('Failed to update message.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    try {
      await deleteComment(id);
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      alert('Failed to delete message.');
    }
  };

  return (
    <div className="manager-section">
      <h2>User Messages</h2>
      <p className="dashboard-hint">
        Messages left through the "Leave Us a Message" form on the Contact page. Only you can see
        these — they're not shown anywhere on the public website.
      </p>
      {error && <p className="form-error">{error}</p>}
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <div className="admin-list">
          {comments.map((c) => (
            <div className={`admin-list-item ${!c.is_read ? 'unread' : ''}`} key={c.id}>
              <div>
                <strong>{c.name}</strong>{' '}
                {!c.is_read && <span className="badge badge-new">New</span>}
                <p>{c.message}</p>
                <small>
                  {c.email && <>Email: {c.email} · </>}
                  {c.phone && <>Phone: {c.phone} · </>}
                  {new Date(c.created_at).toLocaleString()}
                </small>
              </div>
              <div className="admin-list-actions">
                {!c.is_read && (
                  <button className="btn btn-sm" onClick={() => handleMarkRead(c.id)}>
                    Mark Read
                  </button>
                )}
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(c.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          {comments.length === 0 && <p className="empty-text">No messages yet.</p>}
        </div>
      )}
    </div>
  );
};

export default MessagesManager;
