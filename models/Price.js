module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("Price",{
        id_price:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        morning:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        evening:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        full_day:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        night: {
            type: DataTypes.DOUBLE,
            allowNull:false
        }
    });
};