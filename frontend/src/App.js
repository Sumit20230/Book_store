
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home  from './pages/Home.js';
import Createbook from './pages/Createbook.js';
import Editbook from './pages/Editbook.js';
import Allbook from './pages/Allbook.js';
import Deletebook from './pages/Deletebook.js';

export default function App() {
  return (
    <div>
<h1>gfjgtftfg</h1>
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/books/create' element={<Createbook/>}/> 
    <Route path='/books/edit/:id' element={<Editbook/>}/> 
    <Route path='/books/details/:id' element={<Allbook/>}/> 
    <Route path='/books/delete/:id' element={<Deletebook/>}/> 
    
    

    </Routes>
    </div>
   
  )
}
