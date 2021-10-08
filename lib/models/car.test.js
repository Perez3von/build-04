const fs = require('fs');
const pool = require('../utils/pool');
const Car = require('./car');

describe('Car model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync(__dirname + '/../../sql/setup.sql', 'utf-8'));
  });




  it('inserts a car and returns what was inserted', async() => {
    const car = { make: 'Honda', model: 'xyz', year:2017 };
    const result = await Car.insert(car);
    expect(result).toEqual({ id:1, make: 'Honda', model: 'xyz', year:2017 });


  });

  it('finds a car by id', async() => {
    const car_id = 1;
    const result = await Car.findById(car_id);
    expect(result).toEqual({ id:1, make: 'Honda', model: 'xyz', year:2017 });


  });

  afterAll(() => {
    return pool.end();
  });
});
