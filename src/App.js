import './App.css';
import Login from './frontend/Login';
import Signup from './frontend/Signup';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './frontend/Home';
import ResetEmail from './frontend/ResetEmail';
import Forgot from './frontend/Forgot';
import List from './List'
import Form from './frontend/Form';
import View from './View';
import Homes from './frontend/Homes';
//import DelDialog from './DelDialog'
import Footer from './Footer'
function App() {

  // const obj={
  //   "name":"test",
  //   "email":"test@gmail.com",
  //   "password":"123456"
  // }
  
  return (
    <>
    <BrowserRouter>
           <div className="App">
            <nav>
                <Link to="/"></Link>

                <Link to="/login"></Link>
              
                <Link to="/signup"></Link>
              
                <Link to="/resetemail"></Link>

                <Link to="/list"></Link>

                <Link to="/form"></Link>

                <Link to="/form/:id"></Link>

                <Link to="/forgot"></Link>

                <Link to="/view/:id"></Link>

                <Link to="/home"></Link>
                
                {/* <Link to="/Footer">Footer</Link> */}


                {/* <Link to="/DelDialog">DelDialog</Link> */}
            </nav>
           <Routes>
                 <Route path='/' element={< Home />}></Route>

                 <Route path='/login' element={< Login />}></Route> 

                 <Route path='/signup' element={< Signup />}></Route>

                 <Route path='/resetemail' element={< ResetEmail />}></Route>

                 <Route path='/form' element={< Form />}></Route>

                 <Route path='/form/:id' element={< Form />}></Route>
                 
                 <Route path='/forgot/:id' element={< Forgot />}></Route>

                 <Route path='/list' element={< List />}></Route>

                 <Route path='/view/:id' element={< View />}></Route>

                 <Route path='/home' element={< Homes />}></Route>

                 {/* <Route exact path='/Footer' element={< footer />}></Route> */}
          </Routes>
          </div>
          {/* <br/> <br/> */}
          <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
