import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import DropdownButton from './Components/Pages/Search';
import Next from './Components/Pages/Next';


function App() {
  

  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
         < Route path='/search' element={<DropdownButton />} />
         <Route path='/next' element={<Next />} />
        
      </Routes>
    </Router>
  );
}

export default App
