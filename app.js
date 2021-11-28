const request = require('request');

const url = `http://api.weatherstack.com/current?access_key=0514e774fed3bd8bd0cfd9e970f5d4b5&query=42.275246,42.7254`;

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log('error.code');
  } else if (response.body.error) {
    console.log('unable to find location');
  } else {
    const temp = response.body.current.temperature;
    const feelsLike = response.body.current.feelslike;
    const weatherDescription = response.body.current.weather_descriptions[0];
    console.log(response.body.location.name);

    console.log(
      `${weatherDescription}. It is currently ${temp} celsius and it feels like ${feelsLike} celsius.`
    );
  }
});

const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/kutaisi.json?access_token=pk.eyJ1IjoidmFza2FuaWEiLCJhIjoiY2t3aXdnOHNpMWM5ODJ2cG04aWU4NDMxOSJ9.VdbcKDwp25gWd38OcIx3mA&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to location services!');
  } else if (response.body.message) {
    console.log(response.body.message);
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location. Try another search!');
  } else {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude + ',' + longitude);
  }
});
