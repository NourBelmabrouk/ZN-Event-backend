const db=require("../models");
const Commande=db.commande;

exports.addCommande=(req,res)=>{
    Commande.create({
        price: req.body.price,
        numberOfGuests: req.body.numberOfGuests,
        description: req.body.description,
        isAccepted:false,
        isConfirmed:false,
        date: req.body.date,
        service: req.body.id_service,
        client: req.body.client,
        fournisseur:req.body.fournisseur
    })
        .then(service=>{
        res.send({
            message: "Commande Ajoutee!"
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
}


exports.findCommandeByClientId = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed', 'description','price', 'numberOfGuests', 'date', 'service','client' ,'fournisseur'],
        where: {
            client: req.body.client
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.findCommandeByServiceId = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed', 'description','price', 'numberOfGuests', 'date', 'service','client'  ,'fournisseur'],
        where: {
            service: req.body.id_service
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.findAcceptedCommandes = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed', 'description','price', 'numberOfGuests', 'date', 'service','client'  ,'fournisseur'],
        where: {
            fournisseur:req.body.fournisseur,
            isAccepted: true,
            isConfirmed: true
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.findNonAcceptedCommandes = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed', 'description','price', 'numberOfGuests', 'date', 'service','client' ,'fournisseur' ],
        where: {
            fournisseur:req.body.fournisseur,
            isAccepted: false,
            isConfirmed: true
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.findConfirmedCommande = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed','description', 'price', 'numberOfGuests', 'date', 'service','client' ,'fournisseur' ],
        where: {
            client: req.body.client,
            isConfirmed: true
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};
exports.findNonConfirmedCommande = (req, res) => {
    Commande.findAll({
        attributes: ['id_commande','isAccepted', 'isConfirmed','description', 'price', 'numberOfGuests', 'date', 'service','client' ,'fournisseur' ],
        where: {
            client: req.body.client,
            isConfirmed: false
        }
    }).then(commandes => {
        res.send(commandes);
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};
exports.confirmCommande=(req,res)=>{
    Commande.update({
        isConfirmed: true
    },{
        where: {
            id_commande: req.body.id_commande
        }
    }).then(service=>{
        res.send({
            message: "Commande Confirmé!"
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.acceptCommande=(req,res)=>{
    Commande.update({
        isAccepted: true
    }, {
        where: {
            id_commande: req.body.id_commande
        }
    }).then(commande=>{
        res.send({
            message: "Commande Confirmé!"
        });
    }).catch(err =>{
        res.status(500).send({
            message:err.message
        });
    });
};

exports.deleteCommande=(req,res)=>{
    Commande.destroy({ where: {
            id_commande: req.body.id_commande
        }}).then( deletedCommande => {
        res.send({
            message: "Commande Supprimé!"
        });
        }).catch(err =>{
            res.status(500).send({
                message:err.message
            });
        });
};


