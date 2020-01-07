const cdtest = require('./countdown')

test('Verifies days to trip is valid', () => {
  expect(cdtest.displayCountdown("Thu Jan 09 2020 16:00:00 GMT-0800")).toBe(7)
})
