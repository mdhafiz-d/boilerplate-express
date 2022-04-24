var express = require('express');
var app = express();

//mount middleware at top to make it work for all request
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + "-" + req.ip);
  next();
});
console.log("Hello World")
//  render index
app.get('/',
       (req, res) => {
         res.sendFile(__dirname + '/views/index.html');
       });
//  render css
app.use('/public', express.static(__dirname + '/public'))

// conditional json output
app.get('/json', (req, res) => {
  let response = 'Hello json'
  if(process.env['MESSAGE_STYLE'] == 'uppercase')
    response = response.toUpperCase();
  else
    response = response;
  res.json(
    {
      message: response
    }
  )
})

//dont edit beyond this line
 module.exports = app;