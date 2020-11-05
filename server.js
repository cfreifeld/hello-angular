const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/wbdv-angular-demo/src'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/wbdv-angular-demo/src/index.html'));
});
app.listen(process.env.PORT || 8080);
