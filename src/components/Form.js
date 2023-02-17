import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { Button } from './Button';
import { ThemeContext } from '../App';


const Form = () => {

    //theme
    const {theme} = useContext(ThemeContext)
    console.log(theme);
    //theme END

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTask()
    }, []);

    const getTask = async () => {
        const result = await axios.get('http://localhost:3005/tasks');
        setTasks(result.data)
    }

    // delete
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3005/tasks/${id}`);
        getTask();
    }
    
    // add post
    const [atask, setAtask] = useState({
        list:'',
        duration:'',
    });

    const {list, duration} = atask;

    const onInputChange = (e) => {
        setAtask({...atask, [e.target.name]:e.target.value});
    }

    const addSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3005/tasks', atask)
        getTask();
        setAtask({list:'', duration:''});

    }

    // filter
    const [query, setQuery] = useState('');

    // pagination
    
    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage, setTaskPerPage] = useState(3);

    const lastIndex = currentPage * tasksPerPage;
    const firstIndex = lastIndex - tasksPerPage;
    const currentTasks = tasks.slice(firstIndex, lastIndex);

  return (
    <div className={theme == 'light' ? 'container w-50' : 'container w-50 bg-dark'} >
        <Button />
       <h1 className={theme == 'light' ? '' : 'text-light'}>todo list</h1>
       {/* Add post*/}
       <form className='mb-2' onSubmit={(e) => addSubmit(e)}>
        <label className={theme == 'light' ? 'form-label' : 'form-label text-light'}>Add task</label>
        <div className='d-flex'>
            <div className='d-flex w-100'>
                <input 
                    autoComplete='off'
                    type='text'
                    placeholder='task'
                    className='form-control' 
                    name='list'
                    value={list}
                    onChange={(e) => onInputChange(e)}
                />
                <input 
                    autoComplete='off'
                    type='text'
                    placeholder='duration'
                    className='form-control' 
                    name='duration'
                    value={duration}
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </div>
       </form>
       <input
            type='text' 
            placeholder='search' 
            className='form-control mb-2'
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        />
       {/* add end */}
        <table className='table table-striped table-success'>
            <thead>
                <tr>
                    <th></th>
                    <th>Task</th>
                    <th>Duration</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {currentTasks.filter((task) => 
                task.list.toLowerCase().includes(query)) 
                .map((task, index) => (
                    <tr key={task.id}>
                        <th>{index + 1 + firstIndex}</th>  
                        <td>{task.list}</td>
                        <td>{task.duration}</td>
                        <td className='text-end'>
                            <Link className='btn btn-success' to={`/edit/${task.id}`}>Edit</Link>
                            <Link onClick={() => deleteTask(task.id)} className='btn btn-danger'>delete</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Pagination
            totalTasks = {tasks.length}
            tasksPerPage = {tasksPerPage}
            setCurrentPage = {setCurrentPage}
            currentPage = {currentPage}
         />
    
    </div>
  )
}

export default Form