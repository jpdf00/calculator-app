import Big from 'big.js';
import operate from './operate';

const calculate = ({ total, next, operation }, name) => {
  /* eslint-disable no-param-reassign */
  if (operation === '=') {
    total = null;
    next = null;
    operation = null;
  }
  /* eslint-enable no-param-reassign */
  let result;
  switch (name) {
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '+/-':
      if (operation && next) {
        result = Big(next).times(-1).toString();
        return {
          total,
          next: result,
          operation,
        };
      }
      result = Big(total).times(-1).toString();
      return {
        total: result,
        next,
        operation,
      };
    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (next) {
        result = operate(total, next, operation);
        return {
          total: result,
          next: null,
          operation: name,
        };
      }
      return {
        total,
        next,
        operation: name,
      };
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (operation) {
        return {
          total,
          next: `${next || ''}${name}`,
          operation,
        };
      }
      return {
        total: `${total || ''}${name}`,
        next,
        operation,
      };
    case '.':
      if (operation && !next.include('.')) {
        return {
          total,
          next: `${next || '0'}${name}`,
          operation,
        };
      }
      if (!total.include('.')) {
        return {
          total: `${total || '0'}${name}`,
          next,
          operation,
        };
      }
      return {
        total,
        next,
        operation,
      };
    case '=':
      if (operation && next) {
        result = operate(total, next, operation);
        return {
          total: result,
          next: null,
          operation: name,
        };
      }
      return {
        total,
        next,
        operation: name,
      };
    // no default
  }
  return {};
};

export default calculate;
