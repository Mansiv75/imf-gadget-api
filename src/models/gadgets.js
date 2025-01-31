module.exports=(sequelize, DataTypes) =>{
    const Gadget=sequelize.define('Gadget',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        status:{
            type: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
            defaultValue: 'Available',
        }
        
    });
    return Gadget;
};