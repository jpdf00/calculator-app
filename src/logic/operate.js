import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const a = Big(numberOne);
  const b = Big(numberTwo);
  switch (operation) {
    case '+':
      return a.plus(b).toString();
    case '-':
      return a.minus(b).toString();
    case '×':
      return a.times(b).toString();
    case '÷':
      if (b.eq('0')) {
        return 'Error - Division by 0';
      }
      return a.div(b).toString();
    case '%':
      return a.times(b.div(100)).toString();
    // no default
  }
  return {};
};

export default operate;
