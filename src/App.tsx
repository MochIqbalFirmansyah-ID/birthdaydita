import { useState, useEffect } from 'react';
import { Cake, Sparkles, Mail, Share2 } from 'lucide-react';
import Typewriter from './components/Typewriter';
import AudioPlayer from './components/AudioPlayer';
import FlipCard from './components/FlipCard';
import MemoryCarousel from './components/MemoryCarousel';
import WishGenerator from './components/WishGenerator';
import Quiz from './components/Quiz';
import Countdown from './components/Countdown';
import LetterModal from './components/LetterModal';
import ThemeSwitcher from './components/ThemeSwitcher';
import DataSaverToggle from './components/DataSaverToggle';
import { useTheme } from './hooks/useTheme';
import { useDataSaver } from './hooks/useDataSaver';
import { useKonamiCode } from './hooks/useKonamiCode';
import { createConfetti, createFireworks } from './utils/confetti';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [showLetterModal, setShowLetterModal] = useState(false);
  const { theme, setTheme } = useTheme();
  const { dataSaver, setDataSaver } = useDataSaver();
  const konamiActivated = useKonamiCode();

  const targetDate = new Date('2025-10-04T00:00:00+07:00');
  const birthDate = new Date('2004-10-04');

  const typewriterTexts = [
    'Hai, Dwi Nandita 🌸',
    'Hari ini spesial banget: 4 Oktober 2025.',
    'Izinkan Iqbal bikin kamu senyum hari ini.'
  ];

  const handleCelebrate = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
    if (!dataSaver) {
      createConfetti();
      createFireworks();
    }
  };

  const handleShare = () => {
    const message = encodeURIComponent(
      'Lihat ucapan ulang tahun spesial untuk Dwi Nandita! 🎂✨'
    );
    const url = encodeURIComponent(window.location.href);
    window.open(`https://wa.me/?text=${message}%20${url}`, '_blank');
  };

  useEffect(() => {
    if (!dataSaver) {
      document.body.classList.remove('data-saver');
    } else {
      document.body.classList.add('data-saver');
    }
  }, [dataSaver]);

  return (
    <div className="app">
      <div className="controls">
        <ThemeSwitcher theme={theme} onThemeChange={setTheme} />
        <DataSaverToggle
          enabled={dataSaver}
          onToggle={() => setDataSaver(!dataSaver)}
        />
      </div>

      {konamiActivated && (
        <div className="easter-egg">
          <p>psst… Iqbal sayang Nandita (banget) 😳</p>
        </div>
      )}

      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Selamat Ulang Tahun,<br />
            <span className="hero-name">Dwi Nandita</span>
            <Cake className="hero-icon" />
          </h1>

          <div className="hero-typewriter">
            <Typewriter
              texts={typewriterTexts}
              speed={50}
              delay={1500}
              onComplete={() => setShowContent(true)}
            />
          </div>

          {showContent && (
            <>
              <p className="hero-subtitle">
                Semoga hari ini selembut awan, setenang senja, dan seseru ketawa kamu.
              </p>

              <div className="hero-actions">
                <button onClick={handleCelebrate} className="btn btn-primary">
                  <Cake size={20} />
                  Tiup Lilin
                </button>
                <button onClick={handleCelebrate} className="btn btn-secondary">
                  <Sparkles size={20} />
                  Rayakan
                </button>
              </div>

              <AudioPlayer disabled={dataSaver} />
            </>
          )}
        </div>

        {!dataSaver && <div className="hero-decoration"></div>}
      </header>

      {showContent && (
        <main className="main-content">
          <Countdown targetDate={targetDate} birthDate={birthDate} />

          <FlipCard />

          <MemoryCarousel />

          <WishGenerator />

          <Quiz />

          <section className="cta-section">
            <h2 className="section-title">Baca Surat Panjang? 💌</h2>
            <p className="cta-description">
              Ada sesuatu yang lebih panjang dan lebih dalam untuk kamu...
            </p>
            <button
              onClick={() => setShowLetterModal(true)}
              className="btn btn-primary btn-large"
            >
              <Mail size={20} />
              Buka Surat
            </button>
          </section>

          <section className="share-section">
            <button onClick={handleShare} className="btn btn-secondary">
              <Share2 size={20} />
              Bagikan via WhatsApp
            </button>
          </section>
        </main>
      )}

      <footer className="footer">
        <p>Dibuat dengan 🧡 oleh Iqbal untuk Dwi Nandita — 04/10/2025</p>
      </footer>

      <LetterModal
        isOpen={showLetterModal}
        onClose={() => setShowLetterModal(false)}
      />
    </div>
  );
}

export default App;
