const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidmluZWV0cmtlIiwiYSI6ImNrdjg0dWtrNjBsYWUybnF1NGRudDB1ZWQifQ.UtxGL7gv5RB48iOBoayWTQ&limit=1`;
    request({ uri: url, json: true }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;