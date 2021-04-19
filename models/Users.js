
module.exports=(sequelize,DataTypes) =>{

    return sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 15
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 15
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            length: 8
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};