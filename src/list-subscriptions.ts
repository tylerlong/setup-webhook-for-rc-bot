import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  server: process.env.RINGCENTRAL_SERVER_URL,
  token: {
    access_token: process.env.RINGCENTRAL_ACCESS_TOKEN,
  },
});

(async () => {
  const subscriptions = await rc.restapi().subscription().list();
  console.log(subscriptions);
})();
