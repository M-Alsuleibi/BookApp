import express from 'express';

const router = express.Router();

router.get('/route_a_route_a_book', (req, res) => {
    
    
    console.log('first req')

  });
  
  router.get('/route_a_book/:id', (req, res) => {

    const id= req.params.id;

  });
 
  router.post('/', (req, res) => {
});
  
  router.put('/route_a_book/update/:id', (req, res) => {

    const id = req.params.id;

  });
  
  router.delete('/route_a_book/delete/:name?/:publicationYear?', (req, res) => {

    const { name, publicationYear} = req.params;

  });
  
  router.get('/route_a_book/delete/:name?/:publicationYear?', (req, res) => {

    const { name, publicationYear} = req.params;

  });
  
  router.get('/route_a_book/:publicationyear', (req, res) => {

    const publicationYear = req.params;
  });

  export default router;