import express from 'express'
import userRouter from './src/modules/user/user.router.js'
import postRouter from './src/modules/post/post.router.js'
const app = express()
const port = process.env.port || 3000
app.use(express.json())
app.use('/users',userRouter)//enhance
app.use('/posts',postRouter)
app.listen(port,() =>{
    console.log('server is running on port ', port);
})