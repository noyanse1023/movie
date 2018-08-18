const Koa = require('koa')
const app = new Koa()

//npm install koa -S --registry=https://registry.npm.taobao.org

app.use(async (ctx,next) => {
    ctx.body = '电影首页'
})

app.listen(3000,() => {
    console.log('your server is running at 3000')
})