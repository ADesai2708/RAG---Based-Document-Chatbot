export const loginUser =
async(email,password)=>{

 const user =
 await findByEmail(email);

 if(!user){
   throw new Error(
    "Invalid credentials"
   );
 }

 const valid =
 await bcrypt.compare(
  password,
  user.passwordHash
 );

 if(!valid){
   throw new Error(
    "Invalid credentials"
   );
 }

 return user;
};