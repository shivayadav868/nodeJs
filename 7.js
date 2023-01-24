const fs=require('fs')
fs.readFile('./Node_second/sub 3','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return
    }
    const frst=result
    fs.writeFile('./Node_second/result 2',frst,(err,result)=>{
        if(err)
        {
            console.log(err)
            return
        }
    })
})
