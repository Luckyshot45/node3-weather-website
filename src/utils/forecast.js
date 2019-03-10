const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/b54554e1c202bbe549aefed3111da126/'+ latitude +','+ longitude;

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to Weather Services', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' +body.currently.apparentTemperature+ ' degrees out. There is a '+ body.currently.precipProbability +' chance of rain.');  
        }
    });
};

module.exports = forecast;