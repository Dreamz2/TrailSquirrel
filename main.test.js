
const m = require('./main.js')
const w = require('./weather_forecast.js')
const {queryManager, displayMapFromQuery, displayWeather, initMap} = require('./main')


test('does initMap function get invoked at the beginning', () => {
  // let latitude = 49.2248;
  // let longitude = -123.1085;
  // const mockedFn = m.initMap;
  expect(initMap).toHaveBeenCalled();
})

test('Expect initMap to provide a default value for long/lat @ Richmond, B.C.', () => {
    const key = "Enter";
    m.queryManager(key);
    expect(displayMapFromQuery).toHaveBeenCalled();
})

test('Expect displayWeather to be invoked', () => {
  const key = "Enter";
  m.displayWeather(key);
  expect(m.displayMapFromQuery).toHaveBeenCalled();
})

test('Does it given lat and lng', () =>{
  const place = "Langara";
  expect(location(place)).toBe(49.2247693,-123.1107383);
})
