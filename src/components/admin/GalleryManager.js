import React, { useEffect, useState } from 'react';
import { deleteGalleryImage, getGallery, uploadGalleryImage } from '../../api/endpoints';

const GalleryManager = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', description: '', category: '' });
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await getGallery();
      setImages(res.data);
    } catch (err) {
      setError('Failed to load gallery images.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    setFile(selected || null);
    setPreview(selected ? URL.createObjectURL(selected) : null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!file) {
      setError('Please select an image to upload.');
      return;
    }
    if (!form.title.trim()) {
      setError('Please provide a title for the image.');
      return;
    }

    const data = new FormData();
    data.append('title', form.title);
    data.append('description', form.description);
    data.append('category', form.category);
    data.append('file', file);

    setUploading(true);
    try {
      await uploadGalleryImage(data);
      setSuccess('Image uploaded successfully.');
      setForm({ title: '', description: '', category: '' });
      setFile(null);
      setPreview(null);
      fetchImages();
    } catch (err) {
      setError(err.response?.data?.detail || 'Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this image? This cannot be undone.')) return;
    try {
      await deleteGalleryImage(id);
      setImages((prev) => prev.filter((img) => img.id !== id));
    } catch (err) {
      alert('Failed to delete image.');
    }
  };

  return (
    <div className="manager-section">
      <h2>Gallery Management</h2>

      <form className="admin-form" onSubmit={handleSubmit}>
        <h3>Upload New Image</h3>
        {error && <p className="form-error">{error}</p>}
        {success && <p className="form-success">{success}</p>}

        <div className="form-group">
          <label>Image Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g. Wedding invitation card design"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            rows="3"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Describe this piece of work..."
          />
        </div>
        <div className="form-group">
          <label>Category (optional)</label>
          <input
            type="text"
            placeholder="e.g. Printing, Design, Photography"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Image File *</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </div>
        {preview && <img src={preview} alt="Preview" className="upload-preview" />}
        <button type="submit" className="btn btn-primary" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>

      <h3>Existing Images ({images.length})</h3>
      {loading ? (
        <p>Loading images...</p>
      ) : (
        <div className="admin-gallery-grid">
          {images.map((img) => (
            <div className="admin-gallery-item" key={img.id}>
              <img src={img.image_url} alt={img.title} />
              <div className="admin-gallery-info">
                <strong>{img.title}</strong>
                {img.description && <p>{img.description}</p>}
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(img.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
          {images.length === 0 && <p className="empty-text">No images uploaded yet.</p>}
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
