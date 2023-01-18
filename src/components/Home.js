import React, { useMemo, useState, useEffect } from 'react';
import Table from "./Table";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
    
  const [data,setData]=useState([]);
  let navigate =useNavigate();
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
 

 

  const handleDelete = async (id) =>{
    await axios.delete("http://localhost:8080/students/id/" +id);
    const result = await axios("http://localhost:8080/students/getall");
    setData(result.data);
  }
  const columns = useMemo(
    () => [
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
            Header: "AGE",
            accessor: "age",
            footer: "age",
          },
          {
            Header: "ACTIONS",
            Cell: row => (
              <div className="mybuttons">
                 <button style={{border: "none", backgroundColor: "orange", padding: "1vh 3vh", borderRadius: "4px"}}  onClick={()=> navigate(`/student/${row.row.original.id}`)}>Edit</button>
                 <button style={{border: "none", backgroundColor: "red", borderRadius: "4px", padding: "1vh 3vh"}}   onClick={()=> handleDelete(row.row.original.id)}>Delete</button>
              </div>
              ),
             
          },
        ],
      },

    ],
    []
  );

  
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/students/getall");
      setData(result.data);
    })();
  }, []);

  const createStudent = async (e)=>{
      e.preventDefault();
      const student = {
        name,
        email,
        date,
        }
        await axios.post('http://localhost:8080/students/addnewone', student) 
        const result = await axios("http://localhost:8080/students/getall");
        setData(result.data);
        setEmail("");
        setName("");
        setDate("");
    }
  
  
  return (
    <div>
    <button style={{marginLeft:"90vh" , marginTop:"6vh",marginBottom:"4vh"}} type="button" class="btn btn-warning" data-toggle="modal" data-target="#exampleModal" >
  Ajouter un étudiant
</button>




      <Table columns={columns} data={data} id={data}  />
     
<div>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un étudiant</h5>
        <button type="button" class="close" data-dismiss="modal"  aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <div className="form-group">
        <label for="exampleFormControlInput1">nom</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={name} onChange={e => setName(e.target.value)}   placeholder="Votre Nom"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">email</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" value={email} onChange={e => setEmail(e.target.value)}   placeholder="Votre Mail"/>
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" value={date} onChange={e => setDate(e.target.value)}  placeholder="Votre Date de naissance"/>
      </div>
      </div>
      <div className="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Fermer</button>
        <Button
              variant='info'
              type='submit'
              onClick={(e) => createStudent(e)}
            >
              Ajouter 
            </Button>
           
      </div>
    </div>
  </div>
</div>
</div>
<div>


</div>
     
    </div>
  )
}

export default Home
