const path=require('path')
const fs=require('fs')
const  fspromise=require('fs').promises

const {format}=require('date-fns')
const {v4:uuid}=require('uuid')

const logEvents=async(message)=>{
    const datetime =`${format(new Date(),'MMyyyy /t HH:mm:ss')}`
    const logitem=`${datetime} /t ${uuid()} /t ${message} /n`
    console.log(logitem)


    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fs.promises.mkdir(path.join(__dirname,'logs'))
        }
        await fs.promises.appendFile(path.join(__dirname,'logs','logs.txt'),logitem)
    }catch(err){
        console.error(err)
    }

}
module.exports=logEvents
