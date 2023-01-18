import axios from "axios";
import { Button } from "react-bootstrap";
import {useState} from 'react';
import React from 'react';


export const COLUMNS = [
    {
        Header: "Informations personnelles",
        columns: [
          {
            Header: "ID",
            accessor: "id",
            footer: "id",
          },
          {
            Header: "NAME",
            accessor: "name",
            footer: "name",
          },
          {
            Header: "EMAIL",
            accessor: "email",
            footer: "email",
          },
          {
            Header: "DATE",
            accessor: "date",
            footer: "age",
          },
          {
            Header: "ACTIONS",
            Cell: row => (
              
              <div className="mybuttons">
                
                 <button style={{border: "none", backgroundColor: "transparent"}}  data-toggle="modal" data-target="#exampleModal" onChange={() => setDate(e.target.value)}  onClick={()=> handleEdit(row.row.original.id)}>Edit</button>
                 <button style={{border: "none", backgroundColor: "transparent"}}  onClick={() => handleDelete(row.row.original.id)}>Delete</button>
              </div>
              ),
             
          },
        ],
      },
  ]

    
 
const handleEdit = (id) =>{




const data = {   
  name,
  email,
  date,
}
axios.put("http://localhost:8080/students/id/" +id, data)
 console.log("updated");
}
const handleDelete = (id) =>{
  axios.delete("http://localhost:8080/students/id/" +id);
   console.log("deleted");
}

export const ColumnsData = () =>{

const [email,setEmail]=useState("");
const [name,setName]=useState("");
const [date,setDate]=useState("");


  return (
    <div>
      
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="form-group">
        <label for="exampleFormControlInput1">nom</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={name} onChange={e => setName(e.target.value)}   placeholder="name@example.com"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">email</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={email} onChange={e => setEmail(e.target.value)}   placeholder="name@example.com"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" value={date} onChange={e => setDate(e.target.value)}  placeholder="name@example.com"/>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <Button
              variant='success'
              type='submit'
             
            >
              Ajouter 
            </Button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}


  
  
  
