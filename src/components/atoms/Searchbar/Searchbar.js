import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Searchbar.scss';

const Searchbar = () => {
  const { contents, setContents } = useState('');
  const history = useHistory();

  const search = () => {
    history.push(`/Wyszukaj/${contents}`);
  };

  const onKeyDownHandler = e => {
    if (e.key === 'Enter') {
      search();
    }
  };
  return (
    <div>
      <input value={contents} onKeyDown={onKeyDownHandler} onChange={e => setContents(e.target.value)} className="input-search" type="text" placeholder="Szukaj..." />
      <button className="search" onClick={search} type="button">
        Szukaj
      </button>
    </div>
  );
};

export default Searchbar;
