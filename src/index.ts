import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  token: {
    access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
  },
});

(async () => {
  const subInfo = await rc
    .restapi()
    .subscription()
    .post({
      eventFilters: [
        '/restapi/v1.0/glip/posts',
        '/restapi/v1.0/glip/groups',
        '/restapi/v1.0/account/~/extension/~',
      ],
      deliveryMode: {
        transportType: 'WebHook',
        address: 'https://you-webhook-address',
      },
      expiresIn: 473040000, // 15 years
    });
  console.log(subInfo);
})();
