import { Wifi, WifiOff } from 'lucide-react';

interface DataSaverToggleProps {
  enabled: boolean;
  onToggle: () => void;
}

export default function DataSaverToggle({ enabled, onToggle }: DataSaverToggleProps) {
  return (
    <button
      onClick={onToggle}
      className={`data-saver-toggle ${enabled ? 'active' : ''}`}
      aria-label="Toggle data saver"
      title={enabled ? 'Mode Hemat Data: ON' : 'Mode Hemat Data: OFF'}
    >
      {enabled ? <WifiOff size={20} /> : <Wifi size={20} />}
      <span className="toggle-text">
        {enabled ? 'Hemat Data ON' : 'Hemat Data OFF'}
      </span>
    </button>
  );
}
