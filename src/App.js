

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import { BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { About } from './components/About/About';
import Projects from './components/Projects/Projects';
import { Footer } from './components/Footer';
function App() {
  return (

    <Router>
    <div className='App'>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/home' element={<App/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/projects' element={<Projects/>}/>
       <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
