require("@babel/polyfill");
import { server } from "./server";

const port = process.env.PORT || 4000;
server.start({ port: port }, () => {
  console.log(`server is running on port ${port}`);
});
