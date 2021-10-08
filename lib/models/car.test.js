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
    const car = { make: 'Honda', model: 'xyz', year:2017 };
    await Car.insert(car);
    const car_id = 1;
    const result = await Car.findById(car_id);
    expect(result).toEqual({ id:1, make: 'Honda', model: 'xyz', year:2017 });


  });

  it('finds aall cars', async() => {
    const carA = { make: 'Honda', model: 'xyz', year:2017 };
    const carB = { make: 'Toyota', model: 'abc', year:2015 };
    await Car.insert(carA);
    await Car.insert(carB);
    const result = await Car.find();
    expect(result).toEqual([{ id:1, make: 'Honda', model: 'xyz', year:2017 },
      {id:2, make: 'Toyota', model: 'abc', year:2015 }]);


  });

  it('updates a cars information', async() => {
    const carA = { make: 'Honda', model: 'xyz', year:2017 };
    await Car.insert(carA);
    const car_id = 1;
    const result = await Car.update(car_id);
    expect(result).toEqual({ id:1, make: 'Honda', model: 'EVON', year:1999 });


  });

  afterAll(() => {
    return pool.end();
  });
});
