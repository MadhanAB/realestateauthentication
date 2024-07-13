//import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import { Routes,Route } from 'react-router-dom';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Service/Service';
import Apartment from './Apartment/Apartment';
import Villa from './Villa/Villa';
import Plots from './Plots/Plots';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About'element={<About/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/Contact'element={<Contact/>}/>
      <Route path='/Apartment'element={<Apartment/>}/>
      <Route path='/Villa'element={<Villa/>}/>
      <Route path='/Plots'element={<Plots/>}/>
      
     </Routes>
    </div>
  );
}

export default App;
