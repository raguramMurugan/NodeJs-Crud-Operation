const db=require('../config/dbConfig');


//DATABASE CONFIGURATION
const {Sequelize, DataTypes}=require('sequelize');
const seque=new Sequelize(db.database,db.username,db.password,{
    host:db.host,
    port:db.port,
    dialect:db.dialect
});

const database={};
database.Sequelize=Sequelize;
database.seque=seque;

database.student_personal_details=require('./studentModel.js')(seque,DataTypes);

database.seque.sync({force :false}).then(()=>{
    console.log('Resync Done');
});

module.exports=database;
