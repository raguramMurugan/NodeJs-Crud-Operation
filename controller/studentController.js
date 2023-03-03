const db=require('../model');

const Student=db.student_personal_details;

    const saveStudent=async (req, res)=>{
        const info={
            name: req.body.name,
            department: req.body.department
        }
        const student=await Student.create(info);
        res.status(202).send(student);
    }

    const getAllStudent=async (req, res)=>{

        const info=Student.findAll().then((data) =>{
            res.status(200).send(data)
        })
    }

const updateStudent= async (req, res)=>{

    if(req.params.id==0)
    {
        console.log(req.params.id);
        res.status(404).json({warning:"Kindly provide the Id"});
    }
    else if(!req.body.name)
    {
        res.status(404).json({warning:"Required field to update is Empty"});
    }
    else if(!req.body.department)
    {
        res.status(404).json({warning:"Required field to update is Empty"});
    }
    else
    {
    const id=req.params.id;
    await Student.update(req.body,{ where: {id:id}})
    .then(
        ()=>{
            res.status(200).json({status:"Field Updated"})
      })
}
};

const deleteStudentById=async(req, res)=>{

    if(req.params.id==0)
    {
        console.log(Student.id)
        console.log(req.params.id!=Student.id);
        res.status(404).json({warning:"Id not found in DB or Id is empty"});
    }
    else
    {
    const id=req.params.id;
    await Student.destroy({where :{id:id}});
    res.status(200).json({status:'Selected Rows Deleted'})};
}


const getStudentById=(req, res)=>{

    const validateId=req.params.id;
 Student.findByPk(validateId).then((s)=>{res.status(202).json(s)})
}

module.exports={
    saveStudent,
    updateStudent,
    getAllStudent,
    getStudentById,
    deleteStudentById
}
