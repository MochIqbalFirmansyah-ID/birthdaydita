import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { memories } from '../data/memories';

export default function MemoryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="memory-carousel-section">
      <h2 className="section-title">Carousel Kenangan 📸</h2>
      <div className="carousel-container">
        <button onClick={prev} className="carousel-btn carousel-btn-left" aria-label="Previous">
          <ChevronLeft size={24} />
        </button>

        <div className="carousel-content">
          <div className="carousel-image-wrapper">
            <img
              src={memories[currentIndex].image}
              alt={memories[currentIndex].caption}
              className="carousel-image"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = `https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600`;
              }}
            />
          </div>
          <p className="carousel-caption">{memories[currentIndex].caption}</p>
          <div className="carousel-indicators">
            {memories.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <button onClick={next} className="carousel-btn carousel-btn-right" aria-label="Next">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
