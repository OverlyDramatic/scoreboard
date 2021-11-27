import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as KoaStatic from 'koa-static'
import config from './config/config.default'
import { readFileSync } from 'fs'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.type = 'html'
  ctx.body = readFileSync(config.entryPath)
})
console.log(config.staticPath)
app.use(router.routes())
app.use(KoaStatic(config.staticPath))

app.listen(config.port)

console.log(`Server running on port ${config.port}`)
