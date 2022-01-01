import { useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const getData = getPath => {
    onAuthStateChanged(getAuth(), async user => {
      const db = getDatabase();
      const userDetailsRef = ref(db, getPath(user));

      try {
        onValue(userDetailsRef, snapshot => {
          const data = snapshot.val();
          setData(data);
        });
      } catch (error) {
        setError(error);
      }
    });
  };
  return [getData, data, error];
};
