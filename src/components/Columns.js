import React from 'react'; 
import axios from 'axios';



export const handleDelete = async (id) =>{
  await axios.delete("http://localhost:8080/students/id/" +id);
   console.log("deleted");
}



// const handleEdit = (id) =>{




//   // const data = {   
//   //   "name": "test",
//   //   "email": "test@gmailcom",
//   //   "date": "1999-08-06"
//   // }
//   // axios.put("http://localhost:8080/students/id/" +id, data)
//    console.log("updated");
//   }
  export const COLUMNS =  [
  
    {
        Header: "Informations personnelles",
        columns: [
          {
            Header: "ID",
            accessor: "id",
           
          },
          {
            Header: "NAME",
            accessor: "name",
            
          },
          {
            Header: "EMAIL",
            accessor: "email",
            
          },
          {
            Header: "DATE",
            accessor: "date",
            
          },
          {
            Header: "ACTIONS",
            Cell: row => (
              <div className="mybuttons">
                 
                 <button style={{border: "none", backgroundColor: "transparent"}}   onClick={()=> handleDelete(row.row.original.id)}>Delete</button>
              </div>
              ),
             
          },
        ],
      },
  ]

 


 


