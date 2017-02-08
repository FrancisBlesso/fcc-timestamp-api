var express = require('express');
const strftime = require('strftime');

var app = express()

app.get('/:timestr', function (req, res) {
  var respDate = { "unix": null, "natural": null };
  var timeStr = req.params.timestr;
  console.log("timeStr", timeStr);
  if (timeStr.match(/^[0-9].*$/)) {
    var unixDate = new Date();
    var unixTime = +timeStr;
    unixDate.setTime(unixTime);
   // console.log("unixDate", unixDate);
    respDate.unix = unixTime;
    respDate.natural = strftime('%B %d, %Y', unixDate);
  } else {
    var unixTime = Date.parse(timeStr);
    //console.log("unixTime", unixTime);
    
    if (unixTime) {
      var unixDate = new Date();
      unixDate.setTime(unixTime);
      //console.log("unixDate", unixDate);
      respDate.unix = unixTime;
      respDate.natural = strftime('%B %d, %Y', unixDate);
    }
  }
  res.json(respDate);
})



//app.get('/home', (req, res) => { res.end('Hello World!');})
app.listen(process.argv[2]);

app.listen(8080, function () {
  console.log('Timestamp app listening on port 8080!')
})

