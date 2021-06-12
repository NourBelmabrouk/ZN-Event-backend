module.exports=(sequelize,DataTypes) => {
    return sequelize.define("Service", {
        id_service: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
        },
        type:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 25
        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 255
        },
        code_postal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            length: 10
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 25
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        intervention: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        surface:{
            type: DataTypes.DOUBLE,
            allowNull:true
        },
        capacity:{
          type: DataTypes.INTEGER,
          allowNull:true
        },
        foodType:{
            type: DataTypes.STRING,
            allowNull:true
        }
    });
};