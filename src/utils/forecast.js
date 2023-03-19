const request = require('postman-request');

const forecast = (lat, long,  callback) => {
    const url = `http://api.weatherstack.com/current?access_key=e60d4b5aa07606afa273b4e4cecd3e6e&query=${lat},${long}&units=f`;
    request({ uri: url, json: true }, (error, {response, body}) => {
        if (error) {
            callback('Something went wrong')
        } else if (body.error) {
            callback('Something went wrong in input')
        } else {
            const data = body.current;
            callback(undefined, `${body.current.weather_descriptions[0]}, It is currently ${body.current.temperature} degress out. There is a ${data.precip}% chance of rain`)
        }
    })
}

module.exports = forecast;