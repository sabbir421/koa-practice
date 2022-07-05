const koa = require('koa');
const koaBody = require('koa-body')
const router =require('./routes')

app = new koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods);

app.listen(5000,()=>{
    console.log("server start...");
})