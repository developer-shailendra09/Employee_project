import React, { useEffect, useState } from "react";
  import { Router, Route } from "react-router-dom";
  import Login from "./Login";
  import { useNavigate } from "react-router";
  import { exact, path, component } from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './signup.css'
  
  function Signup() {
    
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [nameErr, setNameErr] = useState("");
      const [emailErr, setEmailErr] = useState(false);
      const [passwordErr, setPasswordErr] = useState(false);
      const [data, setData] = useState();
      var navigate = useNavigate();

      const validEmail = ('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
      const validPassword = ('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
      // console.log("name", name)
      // console.log("nameErr",nameErr)
      // console.log("emailErr",emailErr)
      // console.log("passwordErr",passwordErr)
      function handleName(e) {
        let item = e.target.value;
        setName(item);
        setNameErr("");
      }
    
      function handleEmail(e) {
        let item = e.target.value;
        setEmail(item);
        setEmailErr("");
      }
    
      function handlePassword(e) {
        let item = e.target.value;
        setPassword(item);
        setPasswordErr("");
      }
    
      const regExName = /[A-Z]{1,}[a-z]{1,}?/g;
      const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      const regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$/;
      function dataStore(e) {
       e.preventDefault();
        const payload = {
          Name: name,
          Email: email,
          Password: password,
        }
      
     if(regExName.test(name) === true && regExEmail.test(email) === true && regExPass.test(password) === true ){
        console.log("payload", payload);
        var users = data.find((res) => {
          console.log("rrrrrrrrrrrr", res);
          if (res && res.Email !== payload.Email) {
            return true;
          } else {
            return false;
          }
        });
        let findData = data.findIndex((res) => res.Email == payload.Email);
    
        console.log("user--", findData);
        if (findData == -1) {
          toast.success("Successfully Registered ",{
            position: "top-center"
          });
          setTimeout(() => {
             navigate("/login");
           }, 2000);
        
    
          fetch("http://localhost:3000/Register", {
            method: "POST", // or 'PUT'
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then((res) => console.log("res", res));
        } else {
          toast.warn("Already Registered",{
            position: "top-center",
          });
          setTimeout(() => {
            navigate("/login");
          }, 1000)
        }
      }
      else{
        // const NameregEx = /[A-Z]{1,}[a-z]{1,}?/;
        if(name=== ''){
         setNameErr("** Name is required.")
        }
         else{
           if (regExName.test(name)) {
             setNameErr(false);
           } else if (!regExName.test(name)) {
             setNameErr("**Name contains atleast 1 uppercase with 3 character.");
            } 
         }
         
        //  const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
         
         if(email=== '' ){
             setEmailErr("**Email is required.")
           }
           else{
         if (regExEmail.test(email)) {
           setEmailErr(false);
         } else if (!regExEmail.test(email)) {
           setEmailErr("** Invalid Email.");
         } 
       }
      
      //  const regExPass =  /[A-Z]{1,}[a-z]{3,}[!@#*]{1}[0-9]{1,} ?/g;
      
       if(password=== '' ){
         setPasswordErr("**  Password is required.")
       }
       else{
         if (regExPass.test(password)) {
           setPasswordErr(false);
         } else if (!regExPass.test(password)) {
           setPasswordErr("**Password contain atleast 1 uppercase with, 1 special character.");
         } 
       }
      }
      }
    
      
      useEffect(() => {
        fetch("http://localhost:3000/Register")
          .then((response) => response.json())
          .then((data) => setData(data));
      }, []);
    
      function routePage(e){
        navigate('/login')
      }
    
      return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
         <a className="navbar-brand" style={{ color:"#34eb74",marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/')}}>Webiwork</a>          
         <button className="btn btn-outline-light" id="btnlog" onClick={() => navigate('/login')}>Login</button>&nbsp;&nbsp;
                   <button className="btn btn-light" id="btnsign">Signup</button>
        </nav>
        
        <div>
        <br/><br/>
         <div className="container-sm bg-light"><br/>
         <h4>Register</h4>
            {/* <form className="needs-validation"   onSubmit={loginHandle}> */}
            <form className="needs-validation" onSubmit={dataStore}>
              <div className="mb-6 ">
              <label className="form-label">Username</label>
                <input
                  type="text"
                  name=""
                  className="form-control"
                  id="username"
                  placeholder="Enter Your Name"
                  onChange={handleName}
                  //value={name}
                />
                <span className="alerterr" >{nameErr}</span> 
              </div>
              <div className="mb-6">
                
                <label className="form-label" style={{marginLeft:"-290px"}}>Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                  onChange={handleEmail}
                   //value={email}
                />
                <span className="alerterr">{emailErr}</span>
              </div>
  
              <div className="mb-6">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name=""
                  className="form-control"
                  id="password"
                  placeholder="Enter Password"
                 // value={password}
                  onChange={handlePassword}/>
                <span id="passwordError" className="required text-denger font-weight-bolder"></span>
                <span className="alerterr">{passwordErr}</span>
              </div>
              <br/>
             
           
              <button  className="row btn btn-primary" 
              
              
              >Create Account</button>
            
              &nbsp; &nbsp; &nbsp;
            </form>
            <br />
            <span style={{fontSize:"14px",color:"red"}}>
              Already have an Account? &nbsp;&nbsp;&nbsp;
              <a className="text-primary"
                onClick={routePage}
               >Login</a>
            </span>
          </div>
          <br/>
          </div>
          <ToastContainer/>
        </>
      );
    }
    export default Signup;






  ///Yesterday,s if else expression
 // else if (name !== "^[A-Za-z]{8}$"){
      //   setNameErr("** Name atleast 6 character ")
      // }
      //  else if(email=== '' ){
      //   setEmailErr("**  Email is required.")
      // }
      // else if (email !== '^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$'){
      //   setEmailErr("** email contains atleast 6 character ")
      // }
       //else 
      //  if(password=== '' ){
      //   setPasswordErr("**  Password is required.")
      // }
      // else if (password !== "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"){
      //   setPasswordErr("** password contains atleast 6 character ")
      // }


   






  
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [nameErr, setNameErr] = useState(false);
//   const [emailErr, setEmailErr] = useState(false);
//   const [passwordErr, setPasswordErr] = useState(false);
//   const [data, setData] = useState([]);
//   var navigate = useNavigate();

//   function dataStore(e) {
//     e.preventDefault();
//     const payload = {
//       Name: name,
//       Email: email,
//       Password: password,
//     };

//     console.log("payload", payload);
//     var users = data.find((res) => {
//       console.log("rrrrrrrrrrrr", res);
//       if (res && res.Email !== payload.Email) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     let findData = data.findIndex((res) => res.Email == payload.Email);

//     console.log("user--", findData);
//     if (findData == -1) {
//       navigate("/Login");

//       fetch("http://localhost:3000/Register", {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }).then((res) => console.log("res", res));
//     } else {
//       navigate("/login");
//       alert("Already Registered")
//         //   .then(response =>  navigate('/Login')
//         // )

//         .catch((error) => {
//           console.error("Error:", error);
//         });
//     }
//   }
//   useEffect(() => {
//     fetch("http://localhost:3000/Register")
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   function userHandle(e){
//     let item=e.target.value;
//     if(name.length<3 )
//     {
//        setUserErr(true)
//     }
//     else
//     {
//         setUserErr(false)
//     }
//     setUser(item)
// }

// function passwordHandle(e){
//     let item=e.target.value;
//     if(email.length<7 )
//     {
//        setPassErr(true)
//     }
//     else
//     {
//         setPassErr(false)
//     }
//     setPassword(item)

// }
// function passwordHandle(e){
//   let item=e.target.value;
//   if(password.length<7 )
//   {
//      setPassErr(true)
//   }
//   else
//   {
//       setPassErr(false)
//   }
//   setPassword(item)

// }

//   function routePage(e){
//     navigate('/Login')
//   }

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-info">
//             <a className="navbar-brand" href="https://in.linkedin.com/company/webiwork-technologies-pvt-ltd">Webiwork</a>          
//                 <button className="btn btn-outline-dark"  onClick={() => navigate('/Login')}>Login</button> &nbsp;&nbsp;&nbsp;
//                     <button className="btn btn-outline-dark"  >Signup</button>
//         </nav>
//     <div className=""></div>
//       <h1>My Sign-Up</h1>
//       <div className="container-sm bg-info">
//         {/* <form className="needs-validation"   onSubmit={loginHandle}> */}
//         <form className="needs-validation" onSubmit={dataStore}>
//           <div className="mb-6 ">
//             <label className="form-label"></label>
//             <input
//               type="text"
//               name=""
//               className="form-control"
//               id="username"
//               placeholder="Enter Your Name"
//               onClick={handleName}
//               required
//             />
//             <span
//               id="nameError"
//               className="text-danger font-weight-bolder"
//             ></span>
//             {nameErr ? <span text>User Not Valid</span> : ""}
//           </div>
//           <div className="mb-6">
//             <label className="form-label"></label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               placeholder="Enter Your Email"
//               onClick={handleEmail}
//               required
//             />
//             <span
//               id="emailError"
//               className="text-denger font-weight-bolder"
//             ></span>
//             {emailErr ? <span>Email Not Valid, Must use @ symbol</span> : ""}
//           </div>
//           <div className="mb-6">
//             <label className="form-label"></label>
//             <input
//               type="password"
//               name=""
//               className="form-control"
//               id="password"
//               placeholder="Enter Password"
//               value={password}
//               onClick={handlePassword}
//               required
//             />
//             <span
//               id="passwordError"
//               className="text-denger font-weight-bolder"
//             ></span>
//             {passwordErr ? <span>Password Not Valid</span> : ""}
//           </div>
//           <div className="mb-6">
//             <label className="form-label"></label>
//           </div>
//           <hr />
//           <button type="submit" className="btn btn-outline-danger form-text">
//             Create Account
//           </button>
//           &nbsp; &nbsp; &nbsp;
//         </form>
//         <br />
//         <span>
//           Already have an Account? &nbsp;&nbsp;&nbsp;
//           <a  className="text-primary" onClick={routePage}>Login</a>
//         </span>{" "}
//         <br />
//         <br />
//       </div>
//     </>
//   );
// }

// export default Signup;

//  {
//         const [user,setUser]=useState("");
//         const [password,setPassword]=useState("");
//         // const [user,setUser]=useState("");
//         // const [password,setPassword]=useState("");
//         const [userErr,setUserErr]=useState(false);
//         const [passErr,setPassErr]=useState(false);

//       function loginHandle(e)
//         {
//             if(user.length<3 || password.length<3)
//             {
//                 alert("Please Enter Valid Input")
//             }
//             else
//             {
//                 alert("Welcome to My Login )")
//             }

//             e.preventDefault()
//         }
//         function userHandler(e){
//             let item=e.target.value;
//             if(item.length<3 )
//             {
//                setUserErr(true)
//             }
//             else if(item.length<0 )
//                 {
//                     alert("Please Enter Password");
//                 }
//             else
//             {
//                 setUserErr(false)
//             }
//             setUser(item)
//         }
//         function passwordHandler(e){
//             let item=e.target.value;
//             if(item.length<3 )
//             {
//                setPassErr(true)
//             }
//             else
//             {
//                 setPassErr(false)
//             }
//             setPassword(item)

//         }
// // States for registration
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [Cpassword, setCPassword] = useState('');

// // States for checking the errors
// const [submitted, setSubmitted] = useState(false);
// const [error, setError] = useState(false);

// // Handling the name change
// const handleName = (e) => {
//   setName(e.target.value);
//   setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
//   setEmail(e.target.value);
//   setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
//   setPassword(e.target.value);
//   setSubmitted(false);
// };

// // Handling the form submission
// const handleSubmit = (e) => {
//   e.preventDefault();
//   if (name === '' || email === '' || password === '') {
//     setError(true);
//   } else {
//     setSubmitted(true);
//     setError(false);
//   }
// };

// // Showing success message
// const successMessage = () => {
//   return (
//     <div
//       classNameName="success"
//       style={{
//         display: submitted ? '' : 'none',
//       }}>
//       <h1>User {name} successfully registered!!</h1>
//     </div>
//   );
// };

// // Showing error message if error is true
// const errorMessage = () => {
//   return (
//     <div
//       className="error"
//       style={{
//         display: error ? '' : 'none',
//       }}>
//       <h1>Please enter all the fields</h1>
//     </div>
//   );
// };
//  {/* Calling to the methods */}
//     <div className="messages">
//       {errorMessage()}
//       {successMessage()}
//     </div>
// function validation(){
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const number = document.getElementById('number').value;
//     const password = document.getElementById('password').value;
//     const cpassword = document.getElementById('cpassword').value;

//     const usernamecheck = /^[A-Za-z ]{7,20}$/;
//     const emailcheck =/^[A-Za-z]{7,}[0-9]{2}[@]{1}[.]{1}{8,16}$/;
//     const numbercheck =/^[6789][0-9]{9}$/;
//     const passwordcheck =/^[A-Za-z]{8,}[@#*]{1}[0-9]{1}$/;

//     if(usernamecheck.test(username)){
//         document.getElementById('nameError').innerHTML = "";
//     }
//     else{
//         document.getElementById('nameError').innerHTML = "** Username is Invalid. Use atleast 1 Uppecase, 1 lowercase, or @,#,* Symbol";
//         return false;
//     }
//     if(emailcheck.test(email)){
//         document.getElementById('emailError').innerHTML = "";
//     }
//     else{
//         document.getElementById('emailError').innerHTML = "** Email is Invalid.";
//         return false;
//     }
//     if(numbercheck.test(number)){
//         document.getElementById('numberError').innerHTML = "";
//     }
//     else{
//         document.getElementById('numberError').innerHTML = "** Number is invalid ";
//         return false;
//     }
//     if(passwordcheck.test(password)){
//         document.getElementById('passwordError').innerHTML = "";
//     }
//     else{
//         document.getElementById('passwordError').innerHTML = "** Password contain atleast 1 uppercase, 1 lower case and @,#,* symbol";
//         return false;
//     }
//     if(cpassword.match(password)){
//         document.getElementById('cpasswordError').innerHTML = "";
//     }
//     else{
//         document.getElementById('cpasswordError').innerHTML = "** Password does not match";
//         return false;
//     }

// function loginHandle(e) {
//   e.preventDefault();
// const payload = {
//   Name: name,
//   Email: email,
//   Password: password,
// };
// console.log("payload--->", payload);

//   fetch("http://localhost:3000/Register", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(payload),
//   }).then(res =>console.log(res));
//   if (name.length < 7 || password.length < 6 || email.length < 5) {
//   alert("Please Enter Valid Input");
// } else {
//   alert("Successfully Login");
// }
// }

// fetch ("http://localhost:3000/Register")
// .then(console.log("Response"))
// if(Response.status == 201){
//   Navigate("http://localhost:3000/Login")
// }
// else{
//   Navigate("http://localhost:3000/Register")
// }
// if (!Response.status == 201)
