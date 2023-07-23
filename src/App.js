import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Landing from './components/Landing';
import './App.css';
import About from './components/About';
import Culinary from './components/Culinary';
import Navbar from './components/nav/Navbar';

function App() {
  return (
 
      <Router>
    <div className="App">

   
    <Navbar />  
     
      <Routes>
        <Route path='/' element={<Landing /> } />
          <Route path='/About' exact element={<About/>} />
          <Route path='/Culinary' exact element={<Culinary/>} />
        
        </Routes>
      
     
        
      
    
      
    </div>
    </Router>  
     
 
  );
}

export default App;
