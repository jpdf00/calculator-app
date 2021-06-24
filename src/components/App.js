import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

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
    <>
      <Display result={display || '0'} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
