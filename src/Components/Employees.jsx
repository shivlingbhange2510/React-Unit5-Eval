import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
export const Employees = () => {
    const [data, setData]=useState([])
    const getEmploy=()=>{
        axios.get(`http://localhost:3001/employee`)
        .then((res)=>{
            console.log('employ', res);
            setData(res.data);
        }).catch((er)=>{
            console.log('errrrrrrrrrrr', er)
        })
    }
    useEffect(()=>{
        getEmploy();
    },[])
  return (
    <div>Employees
        <table>
            <thead>
                <tr>
                    <th> id</th>
                     <th>name </th>
                     <th> salary </th>
                     <th>department </th>
                     <th>gender </th>
                </tr>
            </thead>
            <tbody> 
               {
                   data?.map((item)=>{
                       return(
                            <tr key={item.id}>
                    <td>{item.id} </td>
                    <td>{item.name } </td>
                     <td>{item.department } </td>
                      <td>{item.gender } </td>
                      <td> <Link to={"/employee`${item.id}`"} >details</Link> </td>
                </tr>
                       )
                   })
               }
            </tbody>
        </table>
    </div>

  )
}
