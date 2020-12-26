const routes = require('express').Router();
const multer = require('multer');
const models = require('../models');
const path = require('path');

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
    },
	filename : function(req, file, cb){
		cb(null, new Date().toISOString() + file.originalname)
	}
});

const upload = multer({storage : storage, limits: {
    fileSize : 1024 * 1024 * 5
}})

let teacher = models.Teacher;
let material = models.Material;

routes.get('/teacher', async (req, res) => {
    let response = await teacher.findAll({
		raw: true
    })

    return res.json(response);
});

routes.post('/material', async (req, res) => {
	try {
		await material.create({
			teacherId: 1,
			materialName: 'Teste 2',
			document:req.body.image,
			createdAt: new Date(),
			updatedAt: new Date()
		});

		return res.json('Material criado com sucesso!');
	} catch(err) {
		res.json('Não foi possível criar o material!' + err.message);
	}

});

module.exports = routes;
