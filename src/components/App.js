import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './style.css';

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
    <main className="Size App">
      <Display result={display || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </main>
  );
};

export default App;
