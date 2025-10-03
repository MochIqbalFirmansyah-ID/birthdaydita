import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { getRandomWish } from '../data/wishes';

export default function WishGenerator() {
  const [currentWish, setCurrentWish] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const generateWish = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentWish(getRandomWish());
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="wish-generator-section">
      <h2 className="section-title">Harapan Untukmu ✨</h2>
      <div className="wish-container">
        <button onClick={generateWish} className="btn btn-primary wish-btn">
          <Sparkles size={20} />
          Generate Wish
        </button>
        {currentWish && (
          <div className={`wish-display ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <p>{currentWish}</p>
          </div>
        )}
      </div>
    </section>
  );
}
