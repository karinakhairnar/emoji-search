import React, { useState, useEffect } from 'react';
import Data from '../Json/Data.json';
import './Emoji.css';
const Emoji = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = Data.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLowerCase()),
    );
    setData(newData);
  }, [search]);
  return (
    <div>
      <h2> Emoji Search</h2>
      <center>
        <input
          size='30'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </center>
      <div className='display'>
        {data.map((emoji) => (
          <div className='card' key={emoji.title}>
            <div
              className='card-body'
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
                alert('Emoji Copy');
              }}>
              {emoji.symbol} {emoji.title}
              <ui> (click to copy)</ui>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Emoji;
