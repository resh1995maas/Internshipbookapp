import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Admindashboard from './components/Admindashboard';
import Userdashboard from './components/Userdashboard';
import Booklist from './components/Booklist';
function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={ <Login/> }/>
      <Route path="/navbar" exact element={ <Navbar/>}/> 
      <Route path="/userd" component={<Userdashboard/>} />
         <Route path="/admind" component={<Admindashboard/>} />
         <Route path="/blist" component={<Booklist/>} />


      <Route path='/home' exact element={<Home/>} />
      
  
  <Route path="/signup" exact element={ <Signup/>}/>













    </Routes>
    </BrowserRouter>
  );
}

export default App;





