module.exports=(sequelize,DataTypes)=>{
    return sequelize.define("Image",{
        id_Image:{
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING
        },
        name:{
            type: DataTypes.STRING
        },
        data: {
            type: DataTypes.BLOB("long"),
        }
    });
};