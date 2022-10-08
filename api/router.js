import Router from '@koa/router'
export const router = new Router();

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const users = []

router.get('/', async (ctx, next) => {
    ctx.body = users
})

router.post('/users', async (ctx, next) => {
    const user = {
        name: ctx.request.body.username
    }

    users.push(user)
    
    ctx.body = user
})