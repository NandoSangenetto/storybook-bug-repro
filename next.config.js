module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    hapiToken: process.env.HAPI_TOKEN,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    homelightHost: process.env.NEXT_PUBLIC_HOMELIGHT_HOST,
    hapiHost: process.env.NEXT_PUBLIC_HAPI_HOST,
  },
};
