 import { conn } from "../../../db/connection.js"
// add post
export const addPost = (req,res,next) =>{
    // get data from req 
    const {title , description , userid} = req.body
    //check user existence
    conn.excute('select * from users where id=?',[userid],(err,result)=>{
        if(err){
            return res.status(500).json({message:err.message, success:false})
        }
        if(result.length == 0){
            return res.status(401).json({message:"user not found",success:false})
        }
        conn.execute('insert into posts (title,description,userid) values (?,?,?)',
            [title , description,userid],
            (err,result)=>{
                if(err){
                    return res.status(500).json({message:err.message, success:false})
                }
                return res.status(201).json({message:"post add successfully", success:true})
            }
        )
    })
}
