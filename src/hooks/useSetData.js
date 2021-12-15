import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useSetData = () => {
  const [err, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const setData = async (path, data) => {
    onAuthStateChanged(getAuth(), async () => {
      setIsSaving(true);
      try {
        await set(ref(getDatabase(), path), data);
        console.log('Data saved successfully!');
      } catch (err) {
        setError(err);
      } finally {
        setIsSaving(false);
      }
    });
  };

  return [setData, err, isSaving];
};
