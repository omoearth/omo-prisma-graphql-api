import { server } from './server';
require('@babel/polyfill');

const port = process.env.PORT || 4000;
server.start({ port: port }, () => {
  console.log(`server is running on port ${port}`);
});
