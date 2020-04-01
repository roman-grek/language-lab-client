const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/language-lab-client'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/language-lab-client/'});
});

app.listen(process.env.PORT || 3000);
