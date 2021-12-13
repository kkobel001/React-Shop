import { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useSetDataWithAuth = () => {
  const [err, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const setData = async (getPath, data) => {
    onAuthStateChanged(getAuth(), async user => {
      setIsSaving(true);
      try {
        await set(ref(getDatabase(), getPath(user)), data);
        console.log('Data saved successfully!');
      } catch (err) {
        setError(err);
      } finally {
        setIsSaving(false);
      }
    });
  };
  return { setData, err, isSaving };
};
