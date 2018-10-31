const fetch = require("node-fetch");

const API_ENDPOINT =
  "https://pretix.eu/api/v1/organizers/thoughtworks/events/IFH-DE/orders/";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, {
    headers: {
      "Authorization": `Token ${process.env.PRETIX_API_KEY}`
    }
  })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data.count}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
