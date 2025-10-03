import { useState, useEffect } from 'react';

export function useDataSaver() {
  const [dataSaver, setDataSaver] = useState(() => {
    const saved = localStorage.getItem('birthday-data-saver');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('birthday-data-saver', String(dataSaver));
  }, [dataSaver]);

  return { dataSaver, setDataSaver };
}
