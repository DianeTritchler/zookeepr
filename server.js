const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//Enviromental Port
const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// allows use of css
// after express.json before any other use routes
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);





//FUNCTIONS
// got too big -- moved to lib folder animal .js

//ROUTES


//Uses the Enviromental Based Port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



