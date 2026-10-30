import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Image as ImageIcon, 
  Video, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  ShieldCheck, 
  Zap, 
  Sun,
  Award,
  ArrowRight,
  Eye
} from 'lucide-react';
import { galleryMedia } from '../data/galleryData';
import Reveal from '../components/Reveal';
import './Gallery.css';

const CATEGORIES = [
  'All Media',
  'Videos',
  'Commercial & Industrial',
  'Residential Rooftops',
  'Elevated Rooftop Structures',
  'On-Site Commissioning & Inverters'
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Media');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Media') return galleryMedia;
    if (activeCategory === 'Videos') return galleryMedia.filter(item => item.type === 'video');
    return galleryMedia.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  // Reset pagination on category change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  // Paginated items
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Stats calculation
  const totalVideos = useMemo(() => galleryMedia.filter(i => i.type === 'video').length, []);
  const totalImages = useMemo(() => galleryMedia.filter(i => i.type === 'image').length, []);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') setSelectedItemIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, filteredItems]);

  const handleNext = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = () => {
    if (selectedItemIndex === null) return;
    setSelectedItemIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentModalItem = selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  return (
    <div className="gallery-page">
      {/* 1. Hero Banner */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>
        <div className="container gallery-hero-content">
          <Reveal direction="down" delay={0.1}>
            <div className="gallery-eyebrow">
              <Sun className="hero-icon-sun" size={16} />
              <span>REAL PROJECT FOOTAGE & INSTALLATIONS</span>
            </div>
            <h1 className="gallery-hero-title">
              Our Work in Action: <span className="highlight-text">Solar Gallery</span>
            </h1>
            <p className="gallery-hero-subtitle">
              Explore authentic photos and high-definition video walkthroughs from our 1,000+ completed 
              solar installations across Andhra Pradesh, Telangana, and Pan-India.
            </p>

            {/* Quick Metrics Bar */}
            <div className="gallery-stats-row">
              <div className="gallery-stat-pill">
                <span className="stat-number">{galleryMedia.length}</span>
                <span className="stat-label">Total Real Media</span>
              </div>
              <div className="gallery-stat-pill">
                <span className="stat-number">{totalVideos}</span>
                <span className="stat-label">On-Site Videos</span>
              </div>
              <div className="gallery-stat-pill">
                <span className="stat-number">{totalImages}</span>
                <span className="stat-label">Verified Site Photos</span>
              </div>
              <div className="gallery-stat-pill">
                <span className="stat-number">10+ MW</span>
                <span className="stat-label">Installed Capacity</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Filter Navigation Bar */}
      <section className="gallery-filter-section">
        <div className="container">
          <Reveal direction="up" delay={0.15}>
            <div className="gallery-filter-bar">
              <div className="filter-scroll-wrapper">
                {CATEGORIES.map((cat) => {
                  const count = cat === 'All Media' 
                    ? galleryMedia.length 
                    : cat === 'Videos' 
                    ? totalVideos 
                    : galleryMedia.filter(m => m.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`gallery-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                    >
                      {cat === 'Videos' && <Video size={14} className="filter-btn-icon" />}
                      <span>{cat}</span>
                      <span className="filter-count">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Media Grid */}
      <section className="gallery-grid-section">
        <div className="container">
          <div className="gallery-results-header">
            <p className="results-text">
              Showing <strong>{filteredItems.length}</strong> {activeCategory.toLowerCase()} entries
            </p>
          </div>

          <div className="gallery-masonry-grid">
            {paginatedItems.map((item, index) => {
              const globalIndex = (currentPage - 1) * itemsPerPage + index;
              return (
                <div
                  key={item.id}
                  className={`gallery-card ${item.type === 'video' ? 'video-card' : ''}`}
                  onClick={() => setSelectedItemIndex(globalIndex)}
                >
                  <div className="gallery-media-wrapper">
                    {item.type === 'video' ? (
                      <div className="video-thumb-container">
                        <video
                          src={item.src}
                          preload="metadata"
                          muted
                          playsInline
                          className="gallery-video-preview"
                        />
                        <div className="video-play-center-btn">
                          <Play size={24} fill="#ffffff" color="#ffffff" />
                        </div>
                      </div>
                    ) : (
                      <img
                        src={item.src}
                        alt="CPC Solar Installation"
                        loading="lazy"
                        className="gallery-image-thumb"
                      />
                    )}

                    {/* Subtle hover zoom ring */}
                    <div className="gallery-hover-ring">
                      {item.type === 'video' ? (
                        <div className="gallery-play-pill">
                          <Play size={16} fill="#ffffff" color="#ffffff" />
                          <span>Watch Video</span>
                        </div>
                      ) : (
                        <div className="gallery-expand-pill">
                          <Maximize2 size={16} />
                          <span>View Full Size</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="gallery-pagination">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="pagination-arrow-btn"
              >
                <ChevronLeft size={18} />
                <span>Prev</span>
              </button>

              <div className="pagination-pages">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`page-number-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                className="pagination-arrow-btn"
              >
                <span>Next</span>
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Fullscreen Lightbox / Video Modal */}
      {currentModalItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedItemIndex(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setSelectedItemIndex(null)}
              aria-label="Close media modal"
            >
              <X size={24} />
            </button>

            {/* Previous Arrow */}
            <button
              className="modal-nav-btn prev"
              onClick={handlePrev}
              aria-label="Previous item"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Arrow */}
            <button
              className="modal-nav-btn next"
              onClick={handleNext}
              aria-label="Next item"
            >
              <ChevronRight size={28} />
            </button>

            {/* Media Display */}
            <div className="modal-media-stage">
              {currentModalItem.type === 'video' ? (
                <video
                  src={currentModalItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="modal-video-player"
                />
              ) : (
                <img
                  src={currentModalItem.src}
                  alt="CPC Solar Full Size"
                  className="modal-full-image"
                />
              )}
            </div>

            {/* Clean Counter Header / Footer Bar */}
            <div className="modal-info-footer">
              <span className="modal-counter">
                {selectedItemIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 5. Trust & Quality Banner */}
      <section className="gallery-trust-banner">
        <div className="container trust-banner-inner">
          <Reveal direction="scale" delay={0.15}>
            <div className="trust-content">
              <span className="trust-eyebrow">ENGINEERING EXCELLENCE ON EVERY ROOF</span>
              <h2 className="trust-title">Ready to Power Your Property with Clean Solar Energy?</h2>
              <p className="trust-desc">
                Every project photographed above is backed by tier-1 components, professional structural 
                calculations, and long-term performance monitoring by Crystal Power Controls.
              </p>
            </div>
            <div className="trust-actions">
              <Link to="/contact" className="btn btn-primary">
                <span>Request a Site Visit</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="btn btn-outline-white">
                <span>View Case Studies</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

