const papa = require('papaparse')
const fs = require('fs')

module.exports = (arrayData, callBack) => {
    const filename = './exported_csv/Road_safety_in_Europe.csv'
    const csv = papa.unparse(arrayData)
   return fs.writeFile(filename, csv, callBack)
    
    
} 