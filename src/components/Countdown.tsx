import { useCountdown } from '../hooks/useCountdown';

interface CountdownProps {
  targetDate: Date;
  birthDate: Date;
}

export default function Countdown({ targetDate, birthDate }: CountdownProps) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  const calculateAge = () => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  if (isComplete) {
    return (
      <section className="countdown-section">
        <div className="countdown-complete">
          <h2 className="celebration-text">Selamat Ulang Tahun! 🎉</h2>
          <p className="age-text">Kamu sekarang berusia {calculateAge()} tahun</p>
          <p className="celebration-subtext">Semoga tahun ini jadi tahun terbaikmu!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="countdown-section">
      <h2 className="section-title">Menuju Hari Spesialmu ⏰</h2>
      <div className="countdown-grid">
        <div className="countdown-item">
          <div className="countdown-value">{days}</div>
          <div className="countdown-label">Hari</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{hours}</div>
          <div className="countdown-label">Jam</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{minutes}</div>
          <div className="countdown-label">Menit</div>
        </div>
        <div className="countdown-item">
          <div className="countdown-value">{seconds}</div>
          <div className="countdown-label">Detik</div>
        </div>
      </div>
    </section>
  );
}
