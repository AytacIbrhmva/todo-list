import './App.css';
import Form from './components/Form';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import EditTask from './components/EditTask';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/edit/:id' element={<EditTask />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
