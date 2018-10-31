import request from 'request';

const API_ENDPOINT =
  "https://pretix.eu/api/v1/organizers/thoughtworks/events/IFH-DE/orders/";

exports.handler = (event, context, callback) => {
  request({
    url: API_ENDPOINT,
    method: 'GET',
    json: true,
    headers: {
      "Authorization": `Token ${process.env.PRETIX_API_KEY}`
    },
  }, (error, response, body) => {
    if (error) {
      callback({ statusCode: 500, body: String(error) }, null);
    } else {
      callback(null, { statusCode: 200, body: `${body.count}`});
    }
  });
};
