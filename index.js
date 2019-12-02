'use strict';

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/')); // html
app.use(express.static(__dirname + '/')); // js, css, images

const server = app.listen(process.env.PORT || 7000, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});
