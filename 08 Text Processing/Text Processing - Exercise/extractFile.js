function extractFile(data){

    let temp = data.split("\\").pop()
    
    let fileName= temp.substring(0, temp.lastIndexOf("."))
    let extensionName= temp.substring(temp.lastIndexOf(".")+1)
    console.log(`File name: ${fileName}\nFile extension: ${extensionName}`)
    
    }