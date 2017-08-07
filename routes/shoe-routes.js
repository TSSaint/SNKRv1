const express = require('express');

//Shoe routes
const shoeRoutes = express.Router();

const shoesController = require('../controllers/shoes-controller');


shoeRoutes.get('/', shoesController.index);


shoeRoutes.post('/', shoesController.create);

//route to "add"
shoeRoutes.get('/add', (req, res) => {
    res.render('shoes/shoe-add', {
        currentPage: 'add',
    });
});


shoeRoutes.get('/:id', shoesController.show);
shoeRoutes.get('/:id/edit', shoesController.edit);
shoeRoutes.put('/:id', shoesController.update);
shoeRoutes.delete('/:id', shoesController.delete);

//export routes
module.exports = shoeRoutes;

// force login in order to manipulate existing data
// shoeRoutes.get('/', shoesController.index);
// shoeRoutes.post('/', authHelpers.loginRequired, shoesController.create);

// shoeRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('shoes/shoe-add', {
//     currentPage: 'add',
//   });
// });

// shoeRoutes.get('/:id', shoesController.show);
// shoeRoutes.get('/:id/edit', authHelpers.loginRequired, shoesController.edit);
// shoeRoutes.put('/:id', authHelpers.loginRequired, shoesController.update);
// shoeRoutes.delete('/:id', authHelpers.loginRequired, shoesController.delete);