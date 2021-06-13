'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.user=require("../models/Users")(sequelize,Sequelize);
db.role=require("../models/Role")(sequelize,Sequelize);


db.role.belongsToMany(db.user,{
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role,{
  through: "user_roles",
  foreignKey:"userId",
  otherKey:"roleId"
});

db.ROLES=["user","admin","prestataire", "client"];


//Price and service association
db.services=require("../models/Service")(sequelize,Sequelize);
db.price=require("../models/Price")(sequelize,Sequelize);

db.price.belongsTo(db.services,{foreignKey:'service',targetKey:'id_service'});
db.services.hasOne(db.price, {foreignKey: 'service', targetKey: 'id_service'});

db.user.hasMany(db.services,{as: "services"});
db.services.belongsTo(db.user,{foreignKey: "UserId" , as:"user"});

//Commande , Service , Client

db.commande=require("../models/Commande")(sequelize,Sequelize);

db.commande.belongsTo(db.services,{foreignKey:'service',targetKey:'id_service'});
db.services.hasOne(db.commande, {foreignKey: 'service', targetKey: 'id_service'});

db.commande.belongsTo(db.user,{foreignKey:'client',targetKey:'id'});
db.user.hasOne(db.commande, {foreignKey: 'client', targetKey: 'id'});


module.exports = db;
