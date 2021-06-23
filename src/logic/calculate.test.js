import calculate from './calculate';

describe('Calculate Function', () => {
  let data = { total: null, next: null, operation: null };
  let name;

  test('It should return null for all values when "AC" is pressed', () => {
    name = 'AC';
    expect(calculate(data, name)).toEqual({ total: null, next: null, operation: null });
  });

  test('It should return negative total when "+/-" is pressed and operation is null', () => {
    name = '+/-';
    data = { total: '12345', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: '-12345', next: null, operation: null });
  });

  test('It should return negative next when "+/-" is pressed and operation is not null', () => {
    name = '+/-';
    data = { total: '12345', next: '54321', operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '12345', next: '-54321', operation: '+' });
  });

  test('It should return a new operation when any operation ("+", "-", "×", "÷") is pressed and operation and next are null', () => {
    name = '+';
    data = { total: '12345', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: '12345', next: null, operation: '+' });
  });

  test('It should return a new operation when any operation ("+", "-", "×", "÷") is pressed and just next is null', () => {
    name = '-';
    data = { total: '12345', next: null, operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '12345', next: null, operation: '-' });
  });

  test('It should return a the addition next when "+" is pressed and next is not null', () => {
    name = '+';
    data = { total: '12345', next: '54321', operation: '+' };
    expect(calculate(data, name)).toEqual({ total: '66666', next: null, operation: '+' });
  });

  test('It should concatenate the name with the total if operation is null', () => {
    const newDigit = Math.floor(Math.random() * 10).toString();
    name = newDigit;
    data = { total: '12345', next: null, operation: null };
    expect(calculate(data, name)).toEqual({ total: `12345${newDigit}`, next: null, operation: null });
  });

  test('It should concatenate the name with the next if operation is not null', () => {
    const newDigit = Math.floor(Math.random() * 10).toString();
    name = newDigit;
    data = { total: '12345', next: null, operation: '-' };
    expect(calculate(data, name)).toEqual({ total: '12345', next: `${newDigit}`, operation: '-' });
  });

  test('It should concatenate the name with the next if operation is not null', () => {
    const newDigit = Math.floor(Math.random() * 10).toString();
    name = newDigit;
    data = { total: '12345', next: null, operation: '=' };
    expect(calculate(data, name)).toEqual({ total: `${newDigit}`, next: null, operation: null });
  });
});
//
