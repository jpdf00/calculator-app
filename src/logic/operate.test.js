import operate from './operate';

describe('Operate Function', () => {
  let a = '8';
  let b = '2';
  let operation;

  test(`It should add ${a} and ${b}`, () => {
    operation = '+';
    expect(operate(a, b, operation)).toBe('10');
  });

  test(`It should subtract ${b} from ${a}`, () => {
    operation = '-';
    expect(operate(a, b, operation)).toBe('6');
  });

  test(`It should multiply ${a} and ${b}`, () => {
    operation = '×';
    expect(operate(a, b, operation)).toBe('16');
  });

  test(`It should divide ${a} by ${b}`, () => {
    operation = '÷';
    expect(operate(a, b, operation)).toBe('4');
  });

  test('It should not divide by 0', () => {
    b = '0';
    operation = '÷';
    expect(operate(a, b, operation)).toBe('Error - Division by 0');
  });

  test(`It should Percent ${a} by ${b}`, () => {
    a = '8';
    b = '2';
    operation = '%';
    expect(operate(a, b, operation)).toBe('0.16');
  });

  test('It should handle big numbers', () => {
    a = '9999999999999999999999999999999999999999999999999999999999999';
    b = '9999999999999999999999999999999999999999999999999999999999999';
    operation = '+';
    expect(operate(a, b, operation))
      .toBe('1.9999999999999999999999999999999999999999999999999999999999998e+61');
  });
});
