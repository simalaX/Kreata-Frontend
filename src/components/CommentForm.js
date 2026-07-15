import React, { useState } from 'react';
import { createComment } from '../api/endpoints';

const CommentForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, error: '', success: false });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus({ loading: false, error: 'Please fill in your name and message.', success: false });
      return;
    }
    setStatus({ loading: true, error: '', success: false });
    try {
      await createComment(form);
      setStatus({ loading: false, error: '', success: true });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, error: 'Something went wrong. Please try again.', success: false });
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3>Leave Us a Message</h3>
      <p className="form-subtitle">
        Have a question or feedback? Send us a message and we'll get back to you.
      </p>
      {status.success && (
        <p className="form-success">Thank you! Your message has been received.</p>
      )}
      {status.error && <p className="form-error">{status.error}</p>}
      <div className="form-row">
        <div className="form-group">
          <label>Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. 0712 345 678"
          />
        </div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Message *</label>
        <textarea name="message" rows="4" value={form.message} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary" disabled={status.loading}>
        {status.loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default CommentForm;
