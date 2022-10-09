import Router from '@koa/router'
import * as User from './app/components/users.js'

export const router = new Router()

router.post('/users', User.create)

router.get('/users', User.list)