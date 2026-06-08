export const login =
async(req,res)=>{

 const user =
 await loginUser(
   req.body.email,
   req.body.password
 );

 const token =
 generateToken(
   user.userId
 );

 res.json({
   success:true,
   token
 });
};