import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

export const useSetData = () => {
  const [err, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const setData = async (path, data) => {
    setIsSaving(true);
    try {
      await set(ref(getDatabase(), path), data);
      console.log('Data saved successfully!');
    } catch (err) {
      setError(err);
    } finally {
      setIsSaving(false);
    }
  };

  return { setData, err, isSaving };
};
