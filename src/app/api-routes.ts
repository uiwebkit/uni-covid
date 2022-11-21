import { UniRoutes, UniRoutesProdGateways } from 'uni-common';


const gateways: Partial<UniRoutesProdGateways> = Object.freeze({
  publicGateWay: 'https://covid-api.mmediagroup.fr/v1',
  // identityProvider: '',
  // registeredClient: '',
});


export const apiRoutes: Partial<UniRoutes> = Object.freeze({
  prod: {
    urls: {
      /** Login urls */
      // loginUrl: '/api/v1/auth',
      // logoutUrl: '/api/v1/logout',

      countriesUrl: 'assets/mocks/countries.json',
      casesUrl: `${gateways.publicGateWay}/cases`,
      historyUrl: `${gateways.publicGateWay}/history`,
      vaccinesUrl: `${gateways.publicGateWay}/vaccines`,

      blocksUrl: `https://api.tzkt.io/v1/blocks`,
      blocksCountUrl: `https://api.tzkt.io/v1/blocks/count`,
      transactionsUrl: `https://api.tzkt.io/v1/operations/transactions`,
      transactionsCountUrl: `https://api.tzkt.io/v1/operations/transactions/count`,
    },
  },

  mock: {
    urls: {
      countriesUrl: 'assets/mocks/countries.json',
      casesUrl: `assets/mocks/cases.json`,
      historyUrl: `assets/mocks/history.json`,
      vaccinesUrl: `assets/mocks/vaccines.json`,

      blocksUrl: 'https://api.tzkt.io/v1/blocks',
      blocksCountUrl: 'https://api.tzkt.io/v1/blocks/count',
      transactionsUrl: 'https://api.tzkt.io/v1/operations/transactions',
      transactionsCountUrl: 'https://api.tzkt.io/v1/operations/transactions/count',
    },
  },
});
