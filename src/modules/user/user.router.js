import { Router } from "express";
import { signup, login} from "./user.controller.js";
const userRouter = Router()
// sign up
userRouter.post('/signup',signup),
// login
userRouter.post('/login',login)
export default userRouter