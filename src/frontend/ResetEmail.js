import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './resetEmail.css'

function ResetEmail()
{
               const [email,setEmail]=useState("");
               const [data , setData] = useState([])
               const [emailErr, setEmailErr] = useState(false);
               let navigate = useNavigate();  

               function handleEmail(e) {
                    let item = e.target.value;
                    setEmail(item);
                    setEmailErr("");
                  }

          function forgotPassHandle(e)
          {
               const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;  
                  e.preventDefault();
                    if(email=== ''){
                         setEmailErr("**  Email is required.")
                        }
                        else if (!regEx.test(email)) {
                         setEmailErr("**  Invalid Email.");
                       }                     else{
                         e.preventDefault();
                         var payload = {
                         Email: email,
                         };
           
                    console.log("payload", payload );
                    var users = data.find((res)=>
                    {
                       console.log("rrrrrrrrrrrr",res);
                       return  res.Email === payload.Email 
                    })
                    if(users)
                    {
                         const id = users.id;
                         console.log("response",id)
                        // navigate(`/Forgot/${id}`)
                         navigate(`/forgot/${id}`)
                         e.preventDefault();
                         const payload = {
                         Email: email,
                         };
                         console.log("payload" , payload);
                         fetch('http://localhost:3000/Forgotpe', 
                         {
                             method: 'POST', // or 'PUT'
                             headers: {
                             'Content-Type': 'application/json',
                         },
                         body: JSON.stringify(payload),
                    })
               }
                    else
                         {
                            toast.error("Invalid email, Please enter valid email",{
                                 position: "top-center"
                            })
                         }
     

                    }
          }    
               useEffect(() => 
               {
                fetch('http://localhost:3000/Register')
                .then(response => response.json())
                .then(data => setData(data));
               },[])
               
     return (
          <>
           <nav className="navbar navbar-expand-lg navbar-light bg-dark">
           <a className="navbar-brand" style={{ color:"#34eb74",marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/')}}>Webiwork</a>                   
            <button className="btn btn-outline-light" id="btnlog" onClick={() => navigate('/login')}>Login</button>
                 <button className="btn btn-outline-light" id="btnsign" onClick={() => navigate('/signup')}>Signup</button>
        </nav>
        <div>
             <br/> <br/> 
          <div className="myreset container-sm bg-light">
          <br/>
          <h4 style={{color:"blue"}}>Reset Password</h4>
          <br/>
          <form onSubmit={forgotPassHandle}>
                  <div className="mb-6">
                  <label className="form-label" style={{marginLeft:"-290px"}}>Email</label>
                          <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="email" placeholder="Enter Your Email" onClick={handleEmail} />
                          <span className="alerterr">{emailErr}</span>
                              <div id="emailHelp" className="form-text"></div>
                  </div>
                               
                  <br/>
                  <div>
                  <button type="email" className="btn btn-primary">Reset password</button>
              </div>
              
             
          </form><br/><br/><br/>
  </div> <br/> 
  </div>
  <ToastContainer/>
  </>
    
   );
}

export default ResetEmail;
