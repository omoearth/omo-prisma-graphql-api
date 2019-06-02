require("@babel/polyfill");
import { server } from "./server";

const port = process.env.PORT || 4000;

server.start({ 
  port: port, 
  cors:{
    origin:"*",
    credentials:true
    } 
  }, () => {
  console.log(`server is running on port ${port}`);
});
