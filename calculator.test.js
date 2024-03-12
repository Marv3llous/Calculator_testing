const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 101;
    actual = sum(49,52);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -9;
    actual = sum(-5,-4);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 4;
    actual = sum(4,0);
    expect(actual).toBe(expected);
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('subtract', () => {

test('can subtract two small positive numbers', () =>{
  expected = 5;
  actual = subtract(9,4);
  expect(actual).toBe(expected);
});

test('can subtract a negative number from a positive number', () =>{
  expected = 13;
  actual = subtract(9,-4);
  expect(actual).toBe(expected);
});
}) 

describe('multiply', () => {

test('can multiply two positve numbers together', () => {
  expected = 30;
  actual = multiply(6,5);
  expect(actual).toBe(expected);
});

test('can multiply two large positve numbers together', () => {
  expected = 144;
  actual = multiply(12,12);
  expect(actual).toBe(expected);
});
});

describe('divide', () => {
test('can divide two whole numbers by each other', () =>{
  expected = 3;
  actual = divide(9,3);
  expect(actual).toBe(expected);
})

test('can divide two large numbers by each other', () =>{
  expected = 65;
  actual = divide(2860,44);
  expect(actual).toBe(expected);
})
});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
