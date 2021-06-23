import Big from 'big.js';
import operate from './operate';

const calculate = (calculatorData, buttonName) => {
  const data = calculatorData;
  if (data.operation === '=') {
    data.total = null;
    data.next = null;
    data.operation = null;
  }
  let result;
  switch (buttonName) {
    case 'AC':
      data.total = null;
      data.next = null;
      data.operation = null;
      return data;
    case '+/-':
      if (data.operation && data.next) {
        result = Big(data.next).times(-1).toString();
        data.next = result;
        return data;
      }
      result = Big(data.total).times(-1).toString();
      data.total = result;
      return data;
    case '+':
    case '-':
    case '×':
    case '÷':
    case '%':
      if (data.next) {
        result = operate(data.total, data.next, data.operation);
        data.total = result;
        data.next = null;
        data.operation = buttonName;
        return data;
      }
      data.operation = buttonName;
      return data;
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
      if (data.operation) {
        data.next = `${data.next || ''}${buttonName}`;
        return data;
      }
      data.total = `${data.total || ''}${buttonName}`;
      return data;
    case '.':
      if (data.operation && !data.next.include('.')) {
        data.next = `${data.next || '0'}${buttonName}`;
        return data;
      }
      if (!data.total.include('.')) {
        data.total = `${data.total || '0'}${buttonName}`;
        return data;
      }
      return data;
    case '=':
      if (data.operation && data.next) {
        result = operate(data.total, data.next, data.operation);
        data.total = result;
        data.next = null;
        data.operation = buttonName;
        return data;
      }
      data.operation = buttonName;
      return data;
    // no default
  }
  return {};
};

export default calculate;
