import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Add = () => {
    const { id } = useParams();
    const email = useRef();
    const name = useRef();
    const date = useRef();
    let navigate =useNavigate();

    const UpdateLivre = async () => {
        const student ={
            name: name.current.value,
            date: date.current.value,
            email: email.current.value,
         
        }
        await axios.put('http://localhost:8080/students/id/' + id , student) 
        navigate("/");
      };
  return (
   
    <div className='container d-flex justify-content-center'>
    <div className='col-md-6'>
      <Form>
        <h1 style={{textAlign:"center"}}>Modifier un étudiant</h1>
        <br />
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type='text'
            placeholder='votre nom'
            required
            ref={name}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='text'
            placeholder='votre email'
            required
            ref={email}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='votre date de naissance '
            required
            ref={date}
          />
        </Form.Group>
        <Button
          variant='success'
          type='submit'
          onClick={() => UpdateLivre()}
        >
          Modifier
        </Button>
      </Form>
    </div>
  </div>
  )
}

export default Add
