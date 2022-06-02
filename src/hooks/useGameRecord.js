import { useState, useEffect } from 'react';
import Storage from '../services/Storage';

export const useGameRecord = (storageKey) => {
  const [key] = useState(storageKey);
  const [gameRecord, setGameRecord] = useState(0);

  const handleGetGameRecord = () => {
    setGameRecord(Storage.getItem(key));
  };

  useEffect(() => {
    setGameRecord(Storage.getItem(key));
  }, [key]);

  return { gameRecord, handleGetGameRecord };
};
