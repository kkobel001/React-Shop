import { useState } from 'react';
import { getDatabase, query, onValue, ref, orderByChild, limitToLast, endBefore } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = (getPath, orderByChildKey, limitToLastValue, endBeforeKey = null) => {
    setLoading(true);

    onAuthStateChanged(getAuth(), async user => {
      const db = getDatabase();
      const userDetailsRef = ref(db, getPath(user));

      let getQuery;
      if (endBeforeKey === null) {
        getQuery = query(userDetailsRef, orderByChild(orderByChildKey), limitToLast(limitToLastValue));
      } else {
        getQuery = query(userDetailsRef, orderByChild(orderByChildKey), limitToLast(limitToLastValue), endBefore(endBeforeKey));
      }

      try {
        onValue(getQuery, snapshot => {
          let data = [];
          snapshot.forEach(child => {
            data = [...data, { id: child.key, data: child.val() }];
          });
          setData(data.reverse());
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
