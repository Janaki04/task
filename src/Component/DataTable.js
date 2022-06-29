import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import axios from 'axios'
import { Table } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { TableContainer } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const DataTable=()=>{
  
  const[details,setDetails]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((request,response)=>{

     const data=request.data
      setDetails(data)
    })
  },[])

    
return(
        <div>
     <div className='box1'>
        <h1>USER DATA</h1>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">UserName</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">Suite</TableCell>
                            <TableCell align="right">ZipCode</TableCell>
                            <TableCell align="right">Add</TableCell>


                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {details.map((items) => (
                            <TableRow
                            key={items.Id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {items.id}
                            </TableCell>
                            <TableCell align="right">{items.name}</TableCell>
                            <TableCell align="right">{items.username}</TableCell>            
                            <TableCell align="right">{items.address.city}</TableCell>
                            <TableCell align="right">{items.address.suite}</TableCell>
                            <TableCell align="right">{items.address.zipcode}</TableCell>
                            <TableCell align="right">
                            <Link to="/form" className='addclick'>Add </Link>
                            
                            </TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
export default DataTable
