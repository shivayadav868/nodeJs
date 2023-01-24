const fs=require('fs')
const frst=fs.readFileSync('/Node_second/sub 2')
const scnd=fs.readFileSync('./Node_second/sub 3')
fs.writeFileSync('./Node_second/result',`${frst},${scnd}`)