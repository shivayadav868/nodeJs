const os=require('os')
const user=os.userInfo()
console.log(user)
console.log('The System Update is ${os.uptime()} seconds')
const currentOs={
    name:os.type()
}
console.log(currentOs)