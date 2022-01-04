import { useState } from 'react';
import { getDatabase, query, onValue, ref } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = getPath => {
    setLoading(true);

    onAuthStateChanged(getAuth(), async user => {
      const db = getDatabase();
      const userDetailsRef = ref(db, getPath(user));
      const getQuery = query(userDetailsRef);
      try {
        onValue(getQuery, snapshot => {
          const data = snapshot.val();
          setData(data);
        });
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    });
  };
  return [getData, data, loading, error];
};
