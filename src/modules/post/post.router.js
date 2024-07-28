import { Router } from "express";
import { addPost } from "./post.controller.js";
const postRouter = Router()
// add post 
postRouter.post('/post', addPost)
export default postRouter