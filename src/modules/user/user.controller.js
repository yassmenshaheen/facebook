import { conn } from "../../../db/connection.js";
import bcrypt from 'bcrypt'
// sign up
export const signup = (req,res,next) =>{
    // get data from req
    let {name, email, password} = req.body
    // check user existence
    conn.execute('select * from user where email=?',[email],(err,result) =>{
        if(err){
            return res.status(500).json({message:err.message, success:false})
        }
        if(result.length>0){
            return res.status(409).json({message:"user already exist", success:false})
        }
        // hash password
        password = bcrypt.hashSync(password,10)
        //get to db
        conn.execute('insert into users(name,email,password) values(?,?,?)',
            [name,email,password],
            (err,result)=>{
                if(err){
                    return res.status(500).json({message:err.message, success:false})
                }
                if(result.affectedRows == 0){
                    return res.status(500).json({message:"fail to create user", success:false})  
                }
                return res.status(201).json({message:"user added successfully",success:true})
            }
        )
    })
}
export const login = (req,res,next) => {
    //get data from req
    const {email, password}= req.body
    // check email existence
    conn.execute('select * from users where email=?',[email],(err,result) => {
        if(err){
            return res.status(500).json({message:err.message, success:false})
        }
        if(result.length == 0){
            return res.status(401).json({message:"invalid credential",success:false})
        }// check password
        if(!match){
            return res.status(401).json({message:"invalid credential", success:false})
        }
        // success
        return res,statys(200).json({message:"login successfully", success:true})
    
      })
}