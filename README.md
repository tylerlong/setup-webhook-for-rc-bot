# Setup WebHook for bot

If for some reason the Bot WebHook tab doesn't work for you, you can use this project to setup your bot WebHook.


## Setup

```
yarn install
```

Rename `.env.sample` to `.env`, and specify credentials.

Edit `src/index.ts`:
- Specify the event filters, you may want to specify one or more of the following:
    - `/restapi/v1.0/glip/posts`
    - `/restapi/v1.0/glip/groups`
    - `/restapi/v1.0/account/~/extension/~`


## Run it

```
yarn test
```

If everything goes well, you should see something like this:

```
{
  uri: 'https://platform.ringcentral.com/restapi/v1.0/subscription/xxxx',
  id: 'xxxx',
  creationTime: '2020-08-27T23:50:17.641Z',
  status: 'Active',
  eventFilters: [ '/restapi/v1.0/glip/posts' ],
  expirationTime: '2035-08-24T23:50:17.641Z',
  expiresIn: 473039999,
  deliveryMode: {
    transportType: 'WebHook',
    encryption: false,
    address: 'https://you-webhook-address'
  }
}
```
