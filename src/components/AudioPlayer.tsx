import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  disabled?: boolean;
}

export default function AudioPlayer({ disabled }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current || disabled) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="audio-player">
      <audio
        ref={audioRef}
        src="/assets/hbd.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
      />
      <button
        onClick={togglePlay}
        disabled={disabled}
        className="audio-btn play-btn"
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        <span>{isPlaying ? 'Pause Musik' : 'Play Musik'}</span>
      </button>
      <button
        onClick={toggleMute}
        disabled={disabled}
        className="audio-btn mute-btn"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
