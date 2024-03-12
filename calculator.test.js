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
    expected = 4
    actual = sum(4,0);
    expect(actual).toBe(expected);
  });

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

describe('subtract', () => {

test('can subtract two small positive numbers', () =>{
  expected = 5
  actual = subtract(9,4);
  expect(actual).toBe(expected);
});

test('can subtract a negative number from a positive number', () =>{
  expected = 13
  actual = subtract(9,-4);
  expect(actual).toBe(expected);
});



}) 

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
