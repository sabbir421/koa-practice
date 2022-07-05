const Router = require('koa-router');
const user = require('./controler/users')

const routes = new Router();

const logMidelware=async(ctx,next)=>{
    console.log('requiest\n', ctx.request.url);
   
   await next();
    console.log('response\n',ctx.response.body);
}

routes.get('/user/:userId',logMidelware, user.get)
routes.get('/media',logMidelware, user.getMedia)
routes.post('/user',logMidelware, user.create)

module.exports=routes;