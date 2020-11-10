const express = require('express'); 
const router = express.Router() ; 

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling request GET requets to /people'

    }) ; 
}) ; 

router.post('/', (req, res, next) => {
    const person = {
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age 
    }
   
    res.status(201).json({
        message: 'Handling request POST requets to /people',
        createdPerson: person
    }) ; 
}) ; 
//Check if ID is valid length - > 13
router.get('/:personId', (req, res, next) => {
   const id = req.params.personId ; 
   if(id.length == 13 ){

       res.status(200).json({
           message: 'This id is the valid length of 13 ', 
            id: id 
        });
   }else{
       res.status(200).json({
           message: 'NOT a valid id number because length is not 13 ', 
           id: id
       }) ;
   } 
}) ; 

//UPDATE persons record
router.patch('/:personId', (req, res, next) => {
res.status(200).json({
    message: 'Updated record'
});
 }) ; 
//Delete invalid record
 router.delete('/:personId', (req, res, next) => {
 
    res.status(200).json({
        message: 'Deleted record',
   
    });
     }) ; 

module.exports = router ; 