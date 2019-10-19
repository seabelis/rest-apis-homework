const express = require("express");
const app = express();
const port = 6712;

const loggingMiddleware = (req, res, next) => {
  console.log("request received at " + new Date());

  // If you want to stop the request from being
  //  relayed by express to the next middleware/handler
  // res.send("nope");

  // If you want to pass on the request to
  //  the next middleware/handler
  next();
};

app.use(loggingMiddleware);

// Define a route by combination of VERB + PATH,
//  attach a callback handler
app.get("/", (req, res) => {
  // info over the request in `req`
  // you can use `res` in order to respond
  console.log("I got a request");
  res.json({
    message: "hello",
    randomNumber: Math.random() * 1000
  });
});

app.listen(port, () => console.log("hello, I'm listening to port " + port));