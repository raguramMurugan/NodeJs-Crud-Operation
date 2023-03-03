module.exports= (seque,DataTypes)=>{

const Student =seque.define('student_personal_detail',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false   
    },
    department:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
return Student
}