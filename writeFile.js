let fs = require('fs');

exports.read = (fileName)=>{
    let filePath = `${__dirname}/${fileName}.json`,
        read = fs.readFileSync(filePath);
    return JSON.parse(read);
}

exports.write = (fileName, data) => {
    let filePath = `${__dirname}/${fileName}.json`,
        read = fs.readFileSync(filePath),
        dataJson = JSON.parse(read);
    dataJson.push(data)
    fs.writeFileSync(filePath, JSON.stringify(dataJson)); 
}