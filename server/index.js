const Koa = require('koa')
const app = new Koa()
const { common } = require('./tpl')
//npm install koa -S --registry=https://registry.npm.taobao.org

app.use(async (ctx,next) => {
    ctx.type = 'text/html; charset=utf-8'
    ctx.body = common
})

app.listen(3000,() => {
    console.log('your server is running at 3000')
})