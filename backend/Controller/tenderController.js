const tendermodel = require('../model/tender')
class tendercontroller{
    static tenderInsert = async(req,res)=>{
        try {
         const {name,description,startdate,endDate,BufferTime} =req.body 
         const result = new tendermodel({
            name:name,
            description:description,
            startdate:4594,
            endDate:454,
            BufferTime:15
         })
       const data = await result.save()
         res.status(200).json({status:"success",message:"registration successfull",data})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
        }
    };

    // display

    static Tender_get = async(req,res)=>{
        try {
            const data =  await tendermodel.find()
             res.status(200).json(data)
         } catch (error) {
             console.log(error)
             res.status(500).json({error:error})
         }
    };

    static Tender_view = async(req,res)=>{
        try {

            const data =  await tendermodel.findById(req.params.id)
             res.status(200).json(data)
         } catch (error) {
             console.log(error)
             res.status(500).json({error:error})
         }
    };
    static Tender_update = async(req,res)=>{
        try {
        
            const {name,description,startdate,endDate,BufferTime}=req.body
            const data = await tendermodel.findByIdAndUpdate(req.params.id,{
                name:name,
                description:description,
               startdate:startdate,
               endDate:endDate,
               BufferTime:BufferTime
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({error:error})
        }
    };
    static tender_delete = async(req,res)=>{
        try {
    
            await tendermodel.findByIdAndDelete(req.params.id)
            res.status(200).json({message:"delete successfull"})
        } catch (error) {
            console.log(error)
            res.status(500).json({error:error})
        }
    };
}

module.exports = tendercontroller