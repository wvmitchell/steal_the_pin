const assert = require('chai').assert;
const getPINs = require('../src/index');

describe('getPINs', function() {
  it('should return an array', function() {
    const result = getPINs('1357');
    assert.isArray(result);
  });

  it('should return the observed PIN when it has only one digit', function() {
    const result = getPINs('1');
    assert.lengthOf(result, 3);
  });

  it('should return all variations for a two-digit observed PIN', function() {
    const result = getPINs('12');
    assert.lengthOf(result, 12);
  });

  it('should return all variations for a three-digit observed PIN', function() {
    const result = getPINs('123');
    assert.lengthOf(result, 36);
  });

  it('should return all variations for a four-digit observed PIN', function() {
    const result = getPINs('1234');
    assert.lengthOf(result, 144);
  });

  it('should return all variations for a five-digit observed PIN', function() {
    const result = getPINs('12345');
    assert.lengthOf(result, 720);
  });

  it('should return all variations for a six-digit observed PIN', function() {
    const result = getPINs('123456');
    assert.lengthOf(result, 2880);
  });

  it('should return all variations for a seven-digit observed PIN', function() {
    const result = getPINs('1234567');
    assert.lengthOf(result, 8640);
  });

  it('should return all variations for an eight-digit observed PIN', function() {
    const result = getPINs('12345678');
    assert.lengthOf(result, 43200);
  });

  it('should return only valid digits in the result', function() {
    const result = getPINs('058');
    const isValid = result.every(pin => /^[0-9]+$/.test(pin));
    assert.isTrue(isValid);
  });

  it('should return unique PINs in the result', function() {
    const result = getPINs('123');
    const uniquePins = [...new Set(result)];
    assert.lengthOf(uniquePins, result.length);
  });
});
