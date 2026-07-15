import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { getGallery } from '../api/endpoints';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await getGallery();
        setImages(res.data);
      } catch (err) {
        setError('Unable to load the gallery right now. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  const categories = ['All', ...new Set(images.map((img) => img.category).filter(Boolean))];
  const filtered =
    activeCategory === 'All' ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div className="page-container gallery-page">
      <div className="page-header">
        <h1>Our Gallery</h1>
        <p>
          A look at some of our recent work — prints, designs, and projects we've delivered for
          our clients.
        </p>
      </div>

      {categories.length > 2 && (
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="loading-text">Loading gallery...</p>}
      {error && <p className="form-error">{error}</p>}
      {!loading && !error && filtered.length === 0 && (
        <p className="empty-text">No images to show yet. Please check back soon.</p>
      )}

      <div className="gallery-grid">
        {filtered.map((img) => (
          <div className="gallery-item" key={img.id} onClick={() => setSelected(img)}>
            <img src={img.image_url} alt={img.title} loading="lazy" />
            <div className="gallery-item-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <img src={selected.image_url} alt={selected.title} className="modal-image" />
          <h3>{selected.title}</h3>
          {selected.description && <p>{selected.description}</p>}
        </Modal>
      )}
    </div>
  );
};

export default Gallery;