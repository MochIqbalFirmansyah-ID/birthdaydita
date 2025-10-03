import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

export default function Typewriter({ texts, speed = 50, delay = 1000, onComplete }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];

    if (!isDeleting && currentText === fullText) {
      if (currentTextIndex === texts.length - 1) {
        onComplete?.();
        return;
      }
      setTimeout(() => {
        setCurrentTextIndex((prev) => prev + 1);
        setCurrentText('');
      }, delay);
      return;
    }

    const timeout = setTimeout(
      () => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      },
      speed
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, texts, speed, delay, isDeleting, onComplete]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text">{currentText}</p>
      <span className="cursor">|</span>
    </div>
  );
}
