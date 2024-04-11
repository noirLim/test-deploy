const {Stock} = require('../models/index.js')

const stockService = {
    findAll:() => new Promise (async (resolve,reject) => {
        try{
            const data = await Stock.findAll()
            resolve(data)
        }catch(err){
            reject(err)
        }
    })
}

module.exports = stockService