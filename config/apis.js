/**
 * Use this to configure API interfaces using Axios.
 * (Each API interface could also be in its own config file.)
 * Each interface needs a 'baseURL' (the URL that is the base of all the paths - see the API's docs for this)
 * Put the 'baseURL' and any credentials for it (eg, API key, username + password, API-issued secret, etc)
 * into your .env file and use 'process.env.<secret_name>' to retrieve it.
 * 
 * Once an API interface is configured here, you can export it (see the bottom),
 * import it in, say, your 'Controllers', and leverage it to call endpoints:
 * ex: 'flightsApi.post('/cats:{catId}', { << 'catId' is a 'path param' (eg, req.params.catId)
 *        catImage: 'http://www.cutecatphotos.com/1282',
 *        catName: 'Lucy',
 *        catAge: 12,
 *        ...
 *      }) << The object full of 'cat shit' here is the 'req.body'
 * 
 * Refs:
 *   Axios request - https://www.npmjs.com/package/axios#request-config
 *   Axios response - https://www.npmjs.com/package/axios#response-schema
 */ 

import * as axiosApp from "axios";

/**
 * This is just pretending that you decided to build your own API to interface with Mongo
 * instead of directly interfacing with Mongo in this server.
 * 
 */
const flightsApi = axiosApp.default.create({
  baseURL: process.env.MEMES_API_BASE_URL, // https://api.imgflip.com/
  timeout: 5000, // milliseconds
  headers: { /* If you have an API key, you probably have to put it here. The docs should tell you. */ }
});

/**
 * Flights API endpoints
 * 
 * POST /flight
 * POST /destination
 * GET /flight
 * GET /destinations
 * PUT...
 * 
 */

const googleMapsApi = axiosApp.default.create({
  baseUrl: process.env.GOOGLE_MAPS_API_BASE_URL,
  timeout: 5000,
  headers: { /* Google API key, secret, etc go here */ }
});

export { flightsApi, googleMapsApi };
