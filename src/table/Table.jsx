import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableSortLabel} from "@mui/material";
import * as axios from "axios";

const columns = [
  {
    field: "id",
    label: "id",
  },
  {
    field: "email",
    label: "email",
  },
  {
    field: "first_name",
    label: "first_name",
  },
  {
    field: "last_name",
    label: "last_name",
  },
  {
    field: "avatar",
    label: "avatar",
  },
  
];

export const BasicTable = () => {
  const [users, setUsers] = useState([]);
  const CallApi = () => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users",
    })
      .then((response) => {
        setUsers(response.data.data);
        console.log("Reasponse : :", response.data.data);
      })
      .catch((Error) => {
        console.log("error");

        console.error("Error :: ", Error);
      });
  };

  useEffect(() => CallApi(), []);


  console.log("bdata", users);
 
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 650,
          "& .MuiTableRow-root:hover": {
            backgroundColor: "#d6eeee",
          },
        }}
      >
        <TableHead>
          <TableRow>
            {columns.map(({ label, field, align }) => (
              <TableCell key={field} align={align}>
                <TableSortLabel>
                  {label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .map((dataItem, index) => (
              <TableRow>
                <>
                  {columns.map(({ field, format, align }) => (
                    <TableCell key={field} align={align}>
                      {format ? format(dataItem[field]) : dataItem[field]}
                    </TableCell>
                  ))}
                </>
              </TableRow>
            ))}
        </TableBody>
      </Table>

    </TableContainer>
  );
};
