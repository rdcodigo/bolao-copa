import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function create(ctx) {
    const data = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
        password: ctx.request.body.password
    }

    try {
        const user = await prisma.user.create({ data })

        ctx.body = user
        ctx.status = 201

    } catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
}

export async function list(ctx) {
    try {
        const user = await prisma.user.findMany()

        ctx.body = user
        ctx.status = 201

    } catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
}
