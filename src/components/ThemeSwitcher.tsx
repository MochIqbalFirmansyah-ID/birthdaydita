import { Sun, Moon, Sparkles } from 'lucide-react';
import { Theme } from '../types';

interface ThemeSwitcherProps {
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export default function ThemeSwitcher({ theme, onThemeChange }: ThemeSwitcherProps) {
  return (
    <div className="theme-switcher">
      <button
        onClick={() => onThemeChange('light')}
        className={`theme-btn ${theme === 'light' ? 'active' : ''}`}
        aria-label="Light theme"
        title="Light"
      >
        <Sun size={20} />
      </button>
      <button
        onClick={() => onThemeChange('dark')}
        className={`theme-btn ${theme === 'dark' ? 'active' : ''}`}
        aria-label="Dark theme"
        title="Dark"
      >
        <Moon size={20} />
      </button>
      <button
        onClick={() => onThemeChange('galaxy')}
        className={`theme-btn ${theme === 'galaxy' ? 'active' : ''}`}
        aria-label="Galaxy theme"
        title="Galaxy Pink"
      >
        <Sparkles size={20} />
      </button>
    </div>
  );
}
