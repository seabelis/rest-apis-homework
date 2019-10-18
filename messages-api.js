// Create a new JS file named messages-api.js.
// Create an Express app in that file. The app should listen for requests on port 3000. Make sure you add the required dependency.

const express = require('express')
const app = express()
const port = 3000
// In order to parse the JSON body of the request, you will need to add the middleware for it. Make sure you add the required dependency.
bodyParser = require('body-parser');
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.use(bodyParser.json());

// Add a single endpoint to the app responds to POST requests to the /messages URI.
// When a request is sent to the endpoint, it should log the text property of the body to the console, and it should respond with a JSON object
// test with http -v POST http://localhost:3000/messages message=hi

app.post('/messages', (req, res) => {
  console.log(req.body);
  res.json({
      message: "Message received loud and clear"
  })
})

