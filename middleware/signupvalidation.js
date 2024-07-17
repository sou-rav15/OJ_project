const Joi =require('joi');

const signupValidation=(req,res, next)=>{
    const  schema=Joi.object({
        name:Joi.string().min(3).max(100).required(),
        age:Joi.number().required(),

        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(100).required(),
        username:Joi.string().min(6).max(20).required()
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400)
        .json(({message:"Bad request",error}))

    }
    next();
}

//login validation

const loginValidation=(req,res, next)=>{
    const  schema=Joi.object({
      
        email:Joi.string().email(),
        password:Joi.string().min(4).max(100).required(),
        username:Joi.string().min(6).max(20)
    })
    const {error}=schema.validate(req.body);
    if(error){
        return res.status(400)
        .json(({message:"Bad request",error}))

    }
    next();
}
module.exports={
    signupValidation,
    loginValidation
}