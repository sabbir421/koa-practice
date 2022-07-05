const fs = require('fs')
let userData ={};
const {v4:uuidV4}=require('uuid')

exports.create = async ctx =>{
    const user = ctx.request.body;
    const userId = uuidV4();
    // console.log(user);
    userData[userId]={
        ...user,
        userId
    }
    
   
    ctx.status= 200;
    ctx.body={
        userId,
        msg:'user created'
    }
}
exports.get = async(ctx) =>{
    const userId=ctx.params.userId;
    ctx.status= 200;
    
    ctx.body={
       userInfo:userData[userId],
        msg:'user get'
    }
}
exports.getMedia = async(ctx) =>{
    const readStream = fs.createReadStream('video.mp4')
    readStream.on('data',(error,data)=>{
        console.log(error);
    })
   ctx.status=200;
   ctx.body=readStream;
}