import React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function ShowUsers (){

    const [users , setUser] = useState([])

    const showAllUsers = async () => {
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
        showAllUsers();
        
    }, []); 
    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'userName', headerName: 'User Name', width: 130 },
      { field: 'email', headerName: 'Email', width: 200 },
    ];

    return(
        <>
        <h1 className='headOfUsers'> users: </h1>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
        </>
    )
}
export default ShowUsers