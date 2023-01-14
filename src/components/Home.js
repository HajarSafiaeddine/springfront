import React, { useMemo, useState, useEffect } from 'react';
import Table from "./Table";
import axios from 'axios';

const Home = () => {
    
  const [data,setData]=useState([]);
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
      console.log(result.data);
    })();
  }, []);
  return (
    <div>
     
      <Table columns={columns} data={data} />
      
    </div>
  )
}

export default Home
