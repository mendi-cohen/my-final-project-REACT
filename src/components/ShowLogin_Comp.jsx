import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

function ShowLogs() {
  const [logs, setLogs] = useState([]);

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
          console.log("No login data in the response");
        }
      } else {
        console.log("Server response is not okay");
      }
    } catch (error) {
      console.log("Error while fetching data from the server", error);
    }
  };

  useEffect(() => {
    showAllLogs();
  }, []);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user_id', headerName: 'User ID', width: 130 },
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
    { field: 'connect_off', headerName: 'off', width: 150 },
    { field: 'token', headerName: 'Token', width: 150 },
    { field: 'userName', headerName: 'User Name', width: 130 },
  ].map((col) => ({ ...col, sortable: false, filterable: false })); // הוסף מפתח ייחודי לכל עמודה

  return (
    <>
      <h1 className='headOfLogin'> Login: </h1>
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={logs}
          columns={columns}
          pageSize={5}
          checkboxSelection
          key="logs_key"
        />
      </div>
    </>
  );
}

export default ShowLogs;
