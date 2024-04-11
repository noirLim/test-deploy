const stockService = require('../services/stockService')

const stockController = {
    findAll:async(req,res) =>{
        try{
            const data = await stockService.findAll()
            return res.json({success:true,data})
        }catch(err){
            return res.status(500).json({success:false,message:err?.message})
        }
    }
}

module.exports = stockController