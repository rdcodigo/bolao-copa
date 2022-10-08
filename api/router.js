import Router from '@koa/router'

export const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World'
})

router.get('/users', async (ctx, next) => {
    ctx.body = 'Hello Users'
})