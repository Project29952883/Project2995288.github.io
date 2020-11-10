//Import installations
const express = require('express'); 
const app = express() ; 
const morgan = require('morgan'); //Middleware
const bodyParser = require('body-parser'); 

//Headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-control-Allow-Headers', '*'); 
if(req.method == 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); 
    return res.status(200).json({}); 
}
next() ; //End of middleware
}); 



const peopleRoutes = require('./api/routes/people'); 
const secondRoutes = require('./api/routes/secondroute'); 

app.use(morgan('dev')) ;
app.use(bodyParser.urlencoded({extended : false})) ;
app.use(bodyParser.json()) ; 


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