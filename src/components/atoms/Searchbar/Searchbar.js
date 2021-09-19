import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Searchbar.scss';
import PropTypes from 'prop-types';

const Searchbar = props => {
  const [contents, setContents] = useState('');
  const history = useHistory();

  const search = () => {
    history.push(`/Wyszukaj/${contents}`);
    // console.log('szukaj!', term);
    props.onSearch(contents);
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

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
