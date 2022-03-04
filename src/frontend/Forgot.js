import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Route, useParams } from "react-router-dom";
import './forgotPassword.css'

// import axios from 'axios';
import { useParams } from 'react-router-dom'
function Forgot(){
     const [password,setPassword]=useState("");
     const [cpassword,setCpassword]=useState("");
     const [data , setData] = useState([])
     const [id , setId] = useState(null)
     const params = useParams()
     let navigate = useNavigate(); 
     const [passErr,setPassErr]=useState('');
     const [cpassErr,setCpassErr]=useState('');
     let { ids } = useParams();

     function handlePassword(e) {
          let item = e.target.value;
          setPassword(item);
          setPassErr("");
        }
      
        function handleConfirmPassword(e) {
          let item = e.target.value;
          setCpassword(item);
          setCpassErr("");
        }

          function NPassHandle(e){
               e.preventDefault();

               const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
               if(regExPass.test(password)=== true){
               var data = 
               {
                     Password: password,
               };
               console.log("paylottttad", data)
              
               if(password === cpassword){
                    // var users = data.find((res)=>{
                    //      console.log("---------rrrrrrrrr--------- ", res);
                    //      return  res.password !==  data.Password 
                    // })
                    //  if(users){
                    toast.success("Password changed Successfully",{
                         position: "top-center"
                       });
                       setTimeout(() => {
                         navigate("/login");
                       }, 1200);
                    //alert("Password Successfully changed")
                    e.preventDefault();
                    // navigate('/Login')
                    const payload = {
                         method: 'PATCH',
                         headers: 
                         { 
                              'Content-Type': 'application/json' 
                         },
                         body: JSON.stringify(data)
                    };
                     fetch(`http://localhost:3000/Register/${params.id}`, payload)
                         .then(response => response.json())
                         .then(result => setData(result));
               
               }
               else{
                    toast.error("Password does not match",{
                         position: "top-center"
                  
                       });
                    // toast.error("Password does not match",{
                    //      position: "top-center"
                    //    });setTimeout(() => {
                        
                    //    }, 500);
                    //alert("Password does not match")
               }
          }
          else{
               const regExPass =  /[A-Z]{1,}[a-z]{3,}[!@#*]{1}[0-9]{1,} ?/g;
               
               if(password=== '' ){
                    setPassErr("**  Password is required.")
                  }
                  else{
                    if (regExPass.test(password)) {
                         setPassErr(false);
                    } else if (!regExPass.test(password)) {
                         setPassErr("# Password contain atleast 1 uppercase with, 1 special character.");
                    } 
                  }

                  if(cpassword=== '' ){
                    setCpassErr("** required.")
                  }
               //    else{
               //      if (regExPass.test(password)) {
               //           setCpassErr(false);
               //      } else if (!regExPass.test(password)) {
               //           setCpassErr("# Password contains atleast 1 uppercase with, 1 special character.");
               //      } 
               //    }

               if(password=== '' ){
                    setPassErr("** required")
                     }
                  else if(cpassword===''){
                    setCpassErr('** required')
                       }
          }
     }

     useEffect(() => {
          fetch('http://localhost:3000/Register')
          .then(response => response.json())
          .then(data => setData(data));
            },[])
      
     return(
          <>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" style={{color:"#c5d2d4" ,marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/')}}>Webiwork</a>   
          <button className="btn btn-outline-light" id="btnlog" onClick={() => navigate('/login')}>Login</button>
                 <button className="btn btn-outline-light" id="btnsign" onClick={() => navigate('/signup')}>Signup</button>
          </nav>
          <div className="Forgotpass">
          <br/><br/>
              <div className="match container bg-light">  <br/>
              <h4 style={{color:"black"}}>Reset Password</h4>
                   <form onSubmit={NPassHandle}>
                        <div className="mb-6">
                        <label className="form-label" style={{marginLeft:"-260px"}}>Password</label>
                             <input type="password" id="first" value={password} onChange={e => setPassword(e.target.value)} className="form-control" placeholder="Enter new password" onChange={handlePassword} />
                                  <div className="form-text"></div>
                        </div>


                        <span className="alerterrr"> {passErr}</span>
                       
                       
                        <div className="mb-6">
                        <label className="form-label" style={{marginLeft:"-200px"}} >Confirm Password</label>
                             <input type="password" id="second" value={cpassword} onChange={e => setCpassword(e.target.value)} className="form-control" placeholder="Confirm password" onChange={handleConfirmPassword} />
                                  <div className="form-text"></div>
                        </div>

                        <span className="alerterrr"> {cpassErr}</span>
                        <br/>

                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                   </form><br/><br/>
              </div><br/><br/><br/><br/><br/><br/>
         </div>
         <ToastContainer/>
         </>
)
 }
export default Forgot;



// console.log("payload", data)
//                if(password === cpassword){
//                     var users = data.find((res)=>{
//                          console.log("rrrrrrrrrrrr",res);
//                             return  res.password !==  data.Password 
//                          })
//                         if(users){