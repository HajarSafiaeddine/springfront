import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateStudent } from "../container/redux/actions/studentActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Add = () => {
    const showToastMessage = () => {
        toast.success('Student updated successfully !');
        navigate("/");
    };
    const dispatch = useDispatch();
    const { id } = useParams();
    const email = useRef();
    const name = useRef();
    const date = useRef();
    let navigate =useNavigate();

    const UpdateStudent = async (e) => {
        e.preventDefault();
        const student ={
            name: name.current.value,
            date: date.current.value,
            email: email.current.value,
         
        }
        await axios.put('http://localhost:8080/students/id/' + id , student );
        showToastMessage();
        
        dispatch(updateStudent(id));
        // navigate("/");
        
      };
  return (
   
    <div className='container d-flex justify-content-center'>
    <div className='col-md-6'>
      <Form>
        <h1 style={{textAlign:"center", marginTop: "5vh"}}>Modifier un étudiant</h1>
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
          variant='info'
          type='submit'
          onClick={(e) => UpdateStudent(e)}
        >
          Modifier
        </Button>
      </Form>
    </div>
    <ToastContainer autoClose={4000}/>
  </div>
  )
}

export default Add
