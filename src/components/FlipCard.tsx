import { useState } from 'react';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="flip-card-section">
      <h2 className="section-title">Kartu Spesial 💌</h2>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <div className="card-content">
              <h3>Tap untuk buka kartu</h3>
              <p className="text-sm mt-2 opacity-80">Ada sesuatu untukmu di balik ini...</p>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-content letter">
              <h3 className="letter-title">Untuk Dwi Nandita,</h3>
              <p>Happy level-up day! Terima kasih sudah jadi tempat pulang untuk semua cerita randomku.</p>
              <p>Semoga langkahmu dipermudah, mimpi-mimpimu dibukakan jalan.</p>
              <p>Kalau kamu lupa seberapa hebat kamu, biar aku yang ngingetin.</p>
              <p className="letter-signature">— Iqbal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
