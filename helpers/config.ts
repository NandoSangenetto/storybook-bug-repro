import getConfig from 'next/config';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default {
  ...serverRuntimeConfig,
  ...publicRuntimeConfig,
};
