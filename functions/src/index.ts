import express from 'express'
import * as functions from 'firebase-functions'
import api from './api'
import login from './login'

const app = express()
login.applyMiddleware({ app, path: '/login' })
api.applyMiddleware({ app, path: '/api' })

const port = 4000

app.listen({ port }, () => {
    console.log(`🚀  Server ready at http://localhost:${port}${login.graphqlPath}`)
    console.log(`🛰  Server ready at http://localhost:${port}${api.graphqlPath}`)
})

const api2 = functions.https.onRequest(app)

module.exports = {
  api2
}
