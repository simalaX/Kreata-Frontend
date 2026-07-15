import api from './axios';

/* ---------------- Auth ---------------- */
export const loginAdmin = (username, password) => api.post('/auth/login', { username, password });

export const getCurrentAdmin = () => api.get('/auth/me');

/* ---------------- Gallery ---------------- */
export const getGallery = () => api.get('/gallery/');

export const uploadGalleryImage = (formData) =>
  api.post('/gallery/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

export const deleteGalleryImage = (id) => api.delete(`/gallery/${id}`);

/* ---------------- Announcements ---------------- */
export const getAnnouncements = (activeOnly = true) =>
  api.get(`/announcements/?active_only=${activeOnly}`);

export const createAnnouncement = (data) => api.post('/announcements/', data);

export const updateAnnouncement = (id, data) => api.put(`/announcements/${id}`, data);

export const deleteAnnouncement = (id) => api.delete(`/announcements/${id}`);

/* ---------------- Testimonials ---------------- */
export const getTestimonials = (activeOnly = true) =>
  api.get(`/testimonials/?active_only=${activeOnly}`);

export const createTestimonial = (data) => api.post('/testimonials/', data);

export const updateTestimonial = (id, data) => api.put(`/testimonials/${id}`, data);

export const deleteTestimonial = (id) => api.delete(`/testimonials/${id}`);

/* ---------------- Comments (visitor messages) ---------------- */
export const createComment = (data) => {
  const payload = {
    name: data.name,
    message: data.message,
    email: data.email && data.email.trim() ? data.email.trim() : null,
    phone: data.phone && data.phone.trim() ? data.phone.trim() : null,
  };
  return api.post('/comments/', payload);
};

export const getComments = () => api.get('/comments/');

export const markCommentRead = (id) => api.patch(`/comments/${id}/read`);

export const deleteComment = (id) => api.delete(`/comments/${id}`);

/* ---------------- Stats ---------------- */
export const getStats = () => api.get('/stats/');
