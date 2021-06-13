module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("Commande",{
        id_commande:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        }, Description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        isAccepted:{
            type: DataTypes.BOOLEAN,
            default: false
        },
        isConfirmed:{
            type: DataTypes.BOOLEAN,
            default: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        numberOfGuests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
};