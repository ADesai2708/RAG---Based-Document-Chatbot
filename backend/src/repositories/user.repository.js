import {
 PutCommand,
 QueryCommand,
 GetCommand
}
from "@aws-sdk/lib-dynamodb";

import { dynamodb }
from "../config/dynamodb.js";

export const createUser = async(user)=>{

 await dynamodb.send(
   new PutCommand({
     TableName:
      process.env.USERS_TABLE,
     Item:user
   })
 );
};