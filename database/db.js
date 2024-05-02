const sequelize= require('sequelize')
const sequelize= new Sequelize('inventroy','root','Password@123',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;