import express from 'express';

const router = express.Router();

router.get('/book', (req, res) => {

});

router.get('/book/:id', (req, res) => {

  const id = req.params.id;
});

router.post('/', (req, res) => {
});

router.put('/book/update/:id', (req, res) => {

  const id = req.params.id;
});

router.delete('/book/delete/:name?/:publicationYear?', (req, res) => {

  const { name, publicationYear } = req.params;
});

router.get('/book/delete/:name?/:publicationYear?', (req, res) => {

  const { name, publicationYear } = req.params;

});

router.get('/book/:publicationyear', (req, res) => {

  const publicationYear = req.params;
});

export default router;