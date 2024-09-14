const usermodel = require('../model/user')
class usercontroller {
static User_insert = async(req,res)=>{
    try {
        const{name,email,password,role}= req.body
        const result = new usermodel({
            name:name,
            email:email,
         password:password
     
        })
      const data =  await result.save()
        res.status(200).json({status:"success",message:"registration successfull",data})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    } 
} 

static User_display = async(req,res)=>{
    try {
        const data =  await usermodel.find()
         res.status(200).json(data)
     } catch (error) {
         console.log(error)
         res.status(500).json({error:error})
     }   
}

static User_view = async(req,res)=>{
    try {

        const data =  await usermodel.findById(req.params.id)
         res.status(200).json(data)
     } catch (error) {
         console.log(error)
         res.status(500).json({error:error})
     }
}

static User_update = async(req,res)=>{
    try {
        
        const {name,email,password}=req.body
        const data = await usermodel.findByIdAndUpdate(req.params.id,{
            name:name,
           email:email,
           password:password
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({error:error})
    }
}

static User_delete = async(req,res)=>{
    try {
    
        await usermodel.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"delete successfull"})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error})
    }
}
 }
module.exports  = usercontroller