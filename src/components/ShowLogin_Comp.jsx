import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function ShowLogs() {
  const [Logs, setLogs] = useState([]);

  const showAllLogs = async () => {
    try {
      const response = await fetch(`http://localhost:3003/showlogin`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.loginFdb && data.loginFdb.length > 0) {
          setLogs(data.loginFdb);
        } else {
          console.log("loginName is not present in the response data");
        }
      } else {
        console.log("no good response");
      }
    } catch (error) {
      console.log("the server returned", error);
    }
  };

  useEffect(() => {
    showAllLogs();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'userName', headerName: 'User Name', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'connect_time', headerName: 'Connect Time', width: 150 },
    {
      field: 'connect_date',
      headerName: 'Connect Date',
      width: 150,
      renderCell: (params) => (
        <span>
          {new Date(params.row.connect_date).toLocaleDateString('en-GB')}
        </span>
      ),
    },
  ];

  return (
    <>
    <h1 className='headOfLogin'> Login: </h1>
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={Logs}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
    </>
  );
}

export default ShowLogs;
