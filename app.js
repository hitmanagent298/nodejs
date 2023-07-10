const path = require('path');
const http = require('http');
const express = require('express');
const  app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoutes);
app.use('/admin', adminRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'not-found.html'));
});

const server = http.createServer(app);
server.listen(3001);

