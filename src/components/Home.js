import React, { useMemo, useState, useEffect } from 'react';
import Table from "./Table";
import axios from 'axios';
import { COLUMNS, ColumnsData } from './Columns';

import Button from "react-bootstrap/Button";

const Home = () => {
    
  const [data,setData]=useState([]);
  const columns = useMemo(() => COLUMNS, []);
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [date,setDate]=useState("");
  
  

  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8080/students/getall");
      setData(result.data);
    })();
  }, []);




  const createBook = async (e)=>{
      e.preventDefault();
      const student = {
        name,
        email,
        date,
        }
      
      console.log(student)
        
        let book = await axios.post('http://localhost:8080/students/addnewone', student) 
  
        console.log("book" , book)
    }
  
  
  return (
    <div>
    <button style={{marginLeft:"90vh" , marginTop:"2vh",marginBottom:"2vh"}} type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" >
  Ajouter un étudiant
</button>
      <Table columns={columns} data={data} id={data} />
      {/* <ColumnsData /> */}
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ajouter un étudiant</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <Button
              variant='success'
              type='submit'
              onClick={(e) => createBook(e)}
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

export default Home
