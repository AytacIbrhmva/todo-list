import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditTask = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [task, setTask] = useState({
        list:'',
        duration:'',
    })

    useEffect(() => {
        getTask();
    }, [])

    const {list, duration} = task;

    const onInputChange = (e) => {
        setTask({...task, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3005/tasks/${id}`,task)
        navigate('/');
    }

    const getTask = async ( ) => {
        const result = await axios.get(`http://localhost:3005/tasks/${id}`)
        setTask(result.data);
    }



  return (
    <div className='container w-50'>
        <form onSubmit={e => onSubmit(e)} className='mb-2' >
            <label className='form-label'>Edit task</label>
            <div>
                <div>
                    <input 
                        type='text'
                        placeholder='task'
                        className='form-control mb-2' 
                        name='list'
                        value={list}
                        onChange={e => onInputChange(e)}
                    />
                    <input 
                        type='text'
                        placeholder='duration'
                        className='form-control mb-2' 
                        name='duration'
                        value={duration}
                        onChange={e => onInputChange(e)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
       </form>
       <Link to='/'>back...</Link>

    </div>
  )
}

export default EditTask