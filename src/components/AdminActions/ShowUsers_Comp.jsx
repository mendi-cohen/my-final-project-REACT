/// ייבואים

import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

function ShowUsers() {
  /// סטייטים

  const [users, setUsers] = useState([]);

  /// פונקציות

  const showAllUsers = async () => {
    try {
      const response = await fetch(`http://localhost:3003/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.usersFdb && data.usersFdb.length > 0) {
          setUsers(data.usersFdb);
        } else {
          console.error("No valid user data in the response");
        }
      } else {
        console.error("Server response is not okay");
      }
    } catch (error) {
      console.error("Error while fetching data from the server", error);
    }
  };

  useEffect(() => {
    showAllUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70, key: "id" },
    { field: "userName", headerName: "User Name", width: 130, key: "userName" },
    { field: "email", headerName: "Email", width: 200, key: "email" },
  ];

  /// רינדור הקומפוננטה

  return (
    <>
      <h1 className="headOfUsers"> Users: </h1>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={5}
          checkboxSelection
          key="users_key"
        />
      </div>
    </>
  );
}

export default ShowUsers;
