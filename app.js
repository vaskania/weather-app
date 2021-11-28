const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = ['42.275246', '42.7254'];

forecast(address[0], address[1], (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

// geocode('Boston', (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });
