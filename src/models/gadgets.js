modeule.exports=(sequelize, DataTypes) =>{
    const Gadgets=sequelize.define('Gadgets',{
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        status:{
            type: DataTypes.ENUM('Available', 'Deployed', 'Destroyed', 'Decommissioned'),
            defaultValue: 'Available',
        },
        
    });
    return Gadgets;
};