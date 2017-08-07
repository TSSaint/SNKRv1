const db = require('../db/config');
const Shoe = {};

Shoe.findAll = () => {
    return db.query('SELECT * FROM shoes');
}

Shoe.findById = (id) => {
    return db.oneOrNone(`
    SELECT * FROM shoes
    WHERE id = $1
    `,[id]);
}

Shoe.create = (shoe) => {
    return db.one(`
    INSERT INTO shoes
    (model, size, description)
    VALUES ($1, $2, $3)
    RETURNING *
    `,[shoe.model, shoe.size, shoe.description]);
}

Shoe.update = (shoe, id) =>{
    return db.one(`
        UPDATE shoes SET
        model = $1,
        size = $2,
        description = $3,
        WHERE id = $4
        RETURNING *
    `,[shoe.model, shoe.size, shoe.description, id]);
}

Shoe.destroy = (id) =>{
    return db.none(`
    DELETE FROM shoes
    WHERE id = $1
    `,[id]);
}

module.exports = Shoe;
