import React from 'react'

const UserCard =({userData})=>{
    
  const {name , age , email} = userData;
  
    return (
        <div className='border rounded bg-light me-4 mt-3'>
         <h1>name :{name}</h1>
         <h1>age :{age}</h1>
         <h1>email :{email}</h1>
        </div>
    )
    
}
export default UserCard;