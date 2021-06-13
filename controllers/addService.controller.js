const db=require("../models");
const config=require("../config/auth.config");
const Service=db.services;
const Price=db.price;
const  User=db.user;

exports.addService=(req,res)=>{
    var service;
    Service.create({
        type:req.body.type,
        nom:req.body.nom,
        adresse:req.body.adresse,
        code_postal:req.body.code_postal,
        ville:req.body.ville,
        Description:req.body.description,
        intervention:req.body.intervention,
        surface:req.body.surface,
        capacity:req.body.capacity,
        foodType:req.body.foodType,
        UserId:req.body.userId
    })
        .then(createdService=>{
            service=createdService;
            return Price.create({
                morning:req.body.morning,
                evening:req.body.evening,
                full_day:req.body.full_day,
                night:req.body.night
            })
        }).then(price=>{
        service.setPrice(price)
        res.send({
            message: "Service Ajoutee!"
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
}
exports.findAll = (req, res) => {
    Service.findAll({
        attributes: ['id_service','type', 'nom', 'adresse', 'code_postal', 'ville', 'Description','intervention' ,'surface', 'capacity','foodType','UserId'],
        include: [{
            model: Price,
            where: { service : db.Sequelize.col('Service.id_service') },
            attributes: ['morning', 'evening','full_day','night']
        }]
    }).then(services => {
        res.send(services);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};


exports.findServicesById = (req, res) => {
    Service.findAll({
        attributes: ['id_service','type', 'nom', 'adresse', 'code_postal', 'ville', 'Description','intervention' ,'surface', 'capacity','foodType','UserId'],
        include: [{
            model: Price,
            where: { service : db.Sequelize.col('Service.id_service') },
            attributes: ['morning', 'evening','full_day','night']
        }],where: {
            UserId: req.body.userId
        }
    }).then(services => {
        res.send(services);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.deleteService=(req,res)=>{
    Price.destroy({ where: {
            service: req.body.id_service
        }}).then( deletedPrice => {
            Service.destroy({ where: {
                    id_service: req.body.id_service
                }}).then(deletedService =>{
                res.send({
                    message: "Service Supprimé!"
                });
            }).catch(err =>{
                res.status(500).send({
                    message:err.message
                });
            });
    })
};

