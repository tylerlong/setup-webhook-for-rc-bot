import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: 'https://platform.ringcentral.com',
  token: {
    access_token: '',
  },
});

(async () => {
  const subInfo = await rc
    .restapi()
    .subscription()
    .post({
      eventFilters: ['/restapi/v1.0/glip/posts'],
      deliveryMode: {
        transportType: 'WebHook',
        address: 'https://you-webhook-address',
      },
      expiresIn: 473040000, // 15 years
    });
  console.log(subInfo);
})();
