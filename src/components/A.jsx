import React from 'react';
import { useState, useEffect } from 'react';

function A (){

    const [users , setUser] = useState([])

    const handleSubmit = async () => {
        try {
          const response = await fetch(`http://localhost:3003/users`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const data = await response.json();
            if (data && data.usersFdb && data.usersFdb.length > 0) {
                setUser(data.usersFdb);                
              } else {
                console.log("loginName is not present in the response data");
              }
          }
            else 
           console.log("no good response"); 
          
        } catch (error) {
         console.log("the server returned");
        }
      };

      useEffect(() => {
        handleSubmit();
        
    }, []); 

    return(
        <>
        <h1 className='AA'> users: </h1>
       <div>
            {users.map((user)=>(
               <div key={user.id}>
                <p>ID: {user.id}</p>
                <p>NAME: {user.userName}</p>
                <p>EMAIL: {user.email}</p>
               </div>
            ))}
        </div>
        </>
    )
}
export default A