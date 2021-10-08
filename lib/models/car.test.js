const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./car');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });




  it('inserts a car and returns what was inserted', () => {

const result = await Car.insert(obj);
expect(result).toEqual(obj)


  })

  afterAll(() => {
    return pool.end();
  });
});
