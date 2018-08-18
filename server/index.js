const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const { resolve } = require('path')
//npm install koa -S --registry=https://registry.npm.taobao.org

app.use(views(resolve(__dirname,'./views'), { extension: 'pug' }))

app.use(async (ctx,next) => {
    await ctx.render('index', {
        you: 'Koa',
        me: 'noyanse1023'
    })
})

app.listen(3000,() => {
    console.log('your server is running at 3000')
})