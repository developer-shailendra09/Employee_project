import React from 'react'
import { useNavigate } from "react-router";
import {Navbar, Nav , NavDropdown} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Homes(){
    let user = JSON.parse(localStorage.getItem('user'));
     console.log('user', user)
    let navigate = useNavigate()

    function Logout(){
        localStorage.clear();
        toast.success(`Logout ${user.Name} , Have a good day`,{
            position: "top-center"
          });
          setTimeout(() => {
            navigate('/login')
          }, 500);
    }


    return(
        <>
       <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" style={{color:"#c5d2d4", marginLeft:"33px"}} href="https://in.linkedin.com/company/webiwork-technologies-pvt-ltd">Webiwork</a>
            
                 {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
                </button> */}
                <div style={{cursor:"pointer",marginLeft:"-53vw"}}>
                    <a className="text-light text-decoration-none">Home</a>&nbsp;&nbsp;&nbsp;
                    <a className="text-light text-decoration-none" href="">About</a>&nbsp;&nbsp;&nbsp;
                    <a className="text-light text-decoration-none" onClick={() => navigate('/list')}>Employee List</a>
                </div>
                <Navbar>
                        <NavDropdown title={user && user.Name}>
                            <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                </Navbar> 
                    {/* <button className="btn btn-outline-dark"  onClick={() => navigate('/Signup')}>Signup</button> */}
        </nav>
        <br/>
            <h1>Hii ! {user && user.Name} , Welcome to the Webiwork </h1>
            <hr/>
            <img src="https://careerdp.com/working-people.jpg?d=webiwork" height="370px" width="100%"/>
        {/* <a onClick={pageRoute}>Employee List</a> */}
        </>
    )
}

export default Homes;