import bcrypt from "bcryptjs";

import { v4 as uuid }
from "uuid";

export const registerUser =
async(data)=>{

 const existing =
 await findByEmail(
   data.email
 );

 if(existing){
   throw new Error(
     "User already exists"
   );
 }

 const hash =
 await bcrypt.hash(
   data.password,
   10
 );

 const user = {

   userId:uuid(),

   email:data.email,

   passwordHash:hash,

   createdAt:
   new Date().toISOString()
 };

 await createUser(user);

 return user;
};