// Create a new JS file named messages-api.js.
// Create an Express app in that file. 
const express = require("express");

// In order to parse the JSON body of the request, you will need to add the middleware for it. Make sure you add the required dependency.
const bodyParser = require("body-parser");

const app = express();

//The app should listen for requests on port 3000.
const port = 3000;

let request = 0;
const messageLimit = (req, res, next) => {
  //The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").
  if (request > 5) {
    res.status(429).json({
      message: "Too Many Requests"
    });
  } else {
    request++;
    next();
  }
  console.log("test messageLimit", request);
};

app
  .use(bodyParser.json())
  .use(messageLimit)

  // TEST //////////////////////////////////
  // const checkBody = (req, res) => {
  //   console.log("checking body");
  //   if (req.body === null || req.body === '') {
  //     res
  //       .status(500)
  //       console.log('checkBody failed')
  //   } else {
  //     res.json({
  //       message: "Message received loud and clear"
  //     })
  //     console.log('checkBody passed')
  //   }
  //   console.log(req.body);
  // };

  // app.use(checkBody)
  ///////////////////////////////////////////////

  // Add a single endpoint to the app responds to POST requests to the /messages URI.
  // When a request is sent to the endpoint, it should log the text property of the body to the console, and it should respond with a JSON object
  // Perform the following validation: if the body does NOT have a text property or the string is empty, then send a "Bad Request" HTTP status code to the client.
  // test with http -v POST http://localhost:3000/messages message=hi

  .post("/messages", (req, res) => {
    // To check isText seems to require a new library, which is not permitted for this assignment. Is assignment asking to check if null? https://www.npmjs.com/package/type-is#readme
    // if (req.body === null || req.body==='')
    // (!(req.body).isString || req.body === '')
    console.log(req.body);
    if (!req.body.isText || req.body === "") {
      res.status(400).json({
        message: "Bad Request"
      });
      console.log("failed");
      return;
    } else {
      res.json({
        message: "Message received loud and clear"
      });
      console.log("passed");
    }
  })
  .listen(port, () => console.log(`Example app listening on port ${port}!`));
