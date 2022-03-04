import React, {useEffect, useState } from 'react';
import {useNavigate} from 'react-router';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login()
{
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userErr,setUserErr]=useState('');
    const [passErr,setPassErr]=useState('');
    const [data , setData] = useState([])
    let navigate = useNavigate();  
   

    function handleUser(e) {
      let item = e.target.value;
      setUser(item);
      setUserErr("");
    }
  
    function handlePassword(e) {
      let item = e.target.value;
      setPassword(item);
      setPassErr("");
    }

   function loginHandle(e)
        {
          e.preventDefault();
          const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;  
        if(user=== '' ){
          setUserErr("**Email is required")
           }
           else{
            if (regExEmail.test(user)) {
              setUserErr(false);
            } else if (!regExEmail.test(user)) {
              setUserErr("**  Invalid Email.");
            } 
          }
         if(password===''){
            setPassErr('** Password is required')
             }
    else{
      e.preventDefault();
      var payload = 
      {
      Email: user,
      Password: password,
      };

      console.log("payload" , payload);
      console.log("ldldldldllldd",users);
      var users = data.find((res)=>
     
      {
        console.log("rrrrrrrrrrrr",res);
        return  res.Email === payload.Email && res.Password===payload.Password
      })
      if(users){
        localStorage.setItem('user', JSON.stringify(users))
      
      e.preventDefault();
      const payload =
     {
      Email: user,
      Password: password,
     };
     console.log("payload" , payload);
     fetch('http://localhost:3000/login', 
     {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
      body: JSON.stringify(payload),
     })
     toast.success("Successfully Login",{
       position: "top-center"
     });
     setTimeout(() => {
       navigate('/home')
     }, 1000);
    
     console.log("navigate herre ",navigate);
     }
     else
     {
       toast.error("Invalid email or password",{
         position: "top-center"
     
       });
       //alert("No user found. Please Enter Valid credential")
     }

    }
        }


        useEffect(() => {
        fetch('http://localhost:3000/Register')
        .then(response => response.json())
        .then(data => setData(data));
          },[])

    function routePage(){
      navigate('/signup')
    }

    console.log('user---',user);

    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
             <a className="navbar-brand" style={{ color:"#34eb74",marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/')}}>Webiwork</a>          
                 <button className="btn btn-light" id="btnlog">Login</button> &nbsp;&nbsp;
                 <button className="btn btn-outline-light" id="btnsign" onClick={() => navigate('/signup')}>Signup</button>
         </nav>
         <div >
           <br/>
                <div className="container bg-light">
                <br/>
                <h4>Login</h4>
                <form onSubmit={loginHandle}>
                        <div className="mb-6">
                        <label className="form-label" style={{marginLeft:"-290px"}}>Email</label>
                        <br/>
                                <input type="text" className="form-control" id="email" placeholder="Enter Your Email"   onChange={handleUser} />
                                {/* {userErr?<span className="alerterr"># &nbsp;&nbsp; {userErr}</span>:""} */}

                                <span className="alerterr"> {userErr}</span>
                                    <div id="emailHelp" className="form-text"></div>
                        </div>
                        <div className="mb-6">
                        <label className="form-label">Password</label>
                          <br/>
                        <input type="password" className="form-control" placeholder="Password"   onChange={handlePassword} />
                        
                        {/* {passErr?<span className="alerterr"> #&nbsp;&nbsp;{passErr}</span>:""} */}

                     <span className="alerterr" > {passErr}</span>
                            
                        </div> 
                        <br/>
                        <div>
                        <button type="submit" className="btn btn-primary btn-lg" //onClick={validate}
                         >Submit</button>&nbsp; &nbsp;  &nbsp;
                        <a className="text-primary" onClick={() => navigate('/resetemail')}id="link">Forgot Password ?</a>
                    </div>
                    <br/>
                    <span style={{fontSize:"14px", color:"red"}}>New to Webiwork? &nbsp;
                            <a className="text-primary" onClick={routePage}>Create Account</a>
                            </span>
                </form>
        </div><br/>
        </div>
        <ToastContainer/>
</>

    );
  }
  
  export default Login;





// function Login()
// {
//     const [user,setUser]=useState("");
//     const [password,setPassword]=useState("");
//     const [userErr,setUserErr]=useState(false);
//     const [passErr,setPassErr]=useState(false);
//     const [data , setData] = useState([])
//     let navigate = useNavigate();  
   
//    function loginHandle(e)
//         {
//              e.preventDefault();
//              var payload = 
//              {
//              Email: user,
//              Password: password,
//              };
             
//              console.log("payload" , payload);
//              var users = data.find((res)=>
//              {
//                console.log("rrrrrrrrrrrr",res);
//                return  res.Email === payload.Email && res.Password===payload.Password
//              })
//              if(users){
//               localStorage.setItem('user', JSON.stringify(users))
//              navigate('/Homes');
//              e.preventDefault();
//              const payload =
//             {
//              Email: user,
//              Password: password,
//             };
//             console.log("payload" , payload);
//             fetch('http://localhost:3000/Login', 
//             {
//             method: 'POST', // or 'PUT'
//             headers: {
//               'Content-Type': 'application/json',
//             },
//              body: JSON.stringify(payload),
//             })
//             }
//             else
//             {
//               alert("No user found. Please Enter Valid credential")
//             }
//         }


//         useEffect(() => {
//         fetch('http://localhost:3000/Register')
//         .then(response => response.json())
//         .then(data => setData(data));
//           },[])


//     function handleEmailChange(e){
//         let item=e.target.value;
//         if(user.length<3 )
//         {
//            setUserErr(true)
//         }
//         else
//         {
//             setUserErr(false)
//         }
//         setUser(item)
//     }

//     function passwordHandler(e){
//         let item=e.target.value;
//         if(password.length<7 )
//         {
//            setPassErr(true)
//         }
//         else
//         {
//             setPassErr(false)
//         }
//         setPassword(item)

//     }
//     function routePage(){
//       navigate('/Signup')
//     }

//     function Forgot(){
//       navigate('/Fp')
//     }

//     return (
//         <>
//         <nav className="navbar navbar-expand-lg navbar-light bg-info">
//             <a className="navbar-brand" href="https://in.linkedin.com/company/webiwork-technologies-pvt-ltd">Webiwork</a>          
//                 <button className="btn btn-outline-dark" >Login</button> &nbsp;&nbsp;&nbsp;
//                     <button className="btn btn-outline-dark"  onClick={() => navigate('/Signup')}>Signup</button>
//         </nav>
//             <h1>My Login</h1>
//                 <div className="container cards bg-info">
//                 <form onSubmit={loginHandle}>
//                         <div className="mb-6">
//                         <br/>
//                                 <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required onClick={handleEmailChange} />
//                                 {userErr?<span className="text-denger">User Not Valid</span>:""}
//                                     <div id="emailHelp" className="form-text"></div>
//                         </div><br/>
//                         <div className="mb-6">
//                         <input type="password" className="form-control" placeholder="Password" required onClick={passwordHandler} />{passErr?<span>Password Not Valid</span>:""}
                            
//                         </div><br/>
                    
//                         <br/>
//                         <div>
//                         <button type="submit" className="btn btn-outline-danger">
//                         <a href="/Homes"></a>Submit</button>&nbsp; &nbsp;  &nbsp;
//                         <a  className="text-primary" onClick={Forgot} id="link">Forgot Password ?</a>
//                     </div>
//                     <br/><br/>
//                     <span>New to My Login? &nbsp;
//                             <a className="text-primary" onClick={routePage}>Create Account</a>
//                             </span>
//                 </form><br/><br/>
//         </div>
// </>

//     );
//   }
  
//   export default Login;





   // e.preventDefault()
        // console.log("payload" , payload);

        // const data = axios.post("http://localhost:5000/login" , payload)
        // console.log("data" , data)  


        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({payload})
        // };
        // fetch('http://localhost:5000/login', requestOptions)
        //     .then(response =>console.log("response" , response))
        //     // .then(data => setAlldata({ postId: data.id }));

        // console.log("data" , data);



          {/* <div class="mb-12 ">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                             <label class="form-check-label fs-9" for="exampleCheck1" > &nbsp;&nbsp;
                              I agree to My Login's &nbsp;
                                  <a href="https://www.zomato.com/policies/terms-of-service/" class="red" target="_blank">Terms of Service,</a> &nbsp;
                                  <a href="https://www.zomato.com/policies/privacy/" class="red" target="_blank">Privacy Policy,</a>&nbsp;
                                  and &nbsp;
                                  <a href="https://www.zomato.com/policies/" class="red" target="_blank">Content Policies.</a>
                              </label>
                    </div> */} 
                    
        // if(user.length<7 || password.length<6)
        // {
        //     alert("Please Enter Valid Input")
        // }
        // else
        // {
        //     alert("Successfully Login")
        // }