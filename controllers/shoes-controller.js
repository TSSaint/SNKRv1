const Shoe = require('../models/shoe');
const shoeController = {};

shoeController.index=(req,res)=>{
    Shoe.findAll().then(shoes =>{
        res.render('shoes/shoe-index',{
            currentPage: 'index',
            message: 'ok',
            data: shoes,
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
};

shoeController.show = (req, res) =>{
    Shoe.findById(req.params.id)
    .then(shoe =>{
        res.render('shoes/shoe-single',{
            currentPage: 'show',
            message: 'ok',
            data: shoe,
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
};

shoeController.create = (req, res) =>{
    Shoe.create({
        model: req.body.model,
        size: req.body.size,
        description: req.body.description,
    }).then(()=>{
        res.redirect('/shoes');
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
};

shoeController.update = (req, res) =>{
    Shoe.update({
        model: req.body.model,
        size: req.body.size,
        description: req.body.description,
    }, req.params.id).then(shoe =>{
        res.redirect(`/shoes/${req.params.id}`);
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
};

shoeController.edit = (req, res) =>{
    Shoe.findById(req.params.id)
    .then(shoe =>{
        res.render('shoes/shoe-single-edit',{
            currentPage: 'edit',
            data: shoe,
        });
    }).catch(err =>{
        console.log(err);
        res.status(500).json(err);
    });
}

shoeController.delete = (req,res)=> {
    Shoe.destroy(req.params.id)
    .then(()=>{
        res.redirect('/shoes');
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}

module.exports = shoeController;