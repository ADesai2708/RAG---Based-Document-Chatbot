export const register =
async(req,res)=>{

 const user =
 await registerUser(
   req.body
 );

 const token =
 generateToken(
   user.userId
 );

 res.status(201).json({
   success:true,
   token
 });
};