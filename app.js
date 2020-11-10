const express = require('express'); 
const app = express() ; 
const morgan = require('morgan'); //Middleware
const peopleRoutes = require('./api/routes/people'); 
const secondRoutes = require('./api/routes/secondroute'); 

app.use(morgan('dev')) ;


app.use('/people', peopleRoutes) ;
app.use('/secondroute', secondRoutes) ;

app.use((req, res, next) => {
    const error = new Error('Not found'); 
    error.status = 404  ; 
    next(error) ; 
})
app.use((error, req, res, next) => {
res.status(error.status || 500 ); 
res.json({ 
    error: {
        message: error.message 
    }
})
}); 
module.exports = app ; 