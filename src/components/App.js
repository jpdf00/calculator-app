import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../assets/stylesheets/style.css';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const result = calculate(data, buttonName);
    setData(result);
  };

  /* eslint-disable no-unused-vars */
  const { total, next, operation } = data;
  /* eslint-enable no-unused-vars */
  const display = !next ? total : next;

  return (
    <div className="Calculator">
      <h2>Let&apos;s do some Math!</h2>
      <div className="Size App">
        <Display result={display || '0'} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </div>
  );
};

export default App;
