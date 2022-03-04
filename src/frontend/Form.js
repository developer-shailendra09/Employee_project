import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router";
import { exact, path, component } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Navbar, Nav , NavDropdown} from 'react-bootstrap';
import axios from "axios";
import './form.css'


function Form(props) {
  const params = useParams();
  let { id } = useParams();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);
  const [order, setOrder] = useState("DES")
  const [nameErr, setNameErr] = useState("");
  const [mobileErr, setMobileErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [salaryErr, setSalaryErr] = useState(false);

  const [isAdded, setIsAdded] = useState(true);
  let user = JSON.parse(localStorage.getItem('user'));

  console.log(id, "----params");

  let navigate = useNavigate();

  function navigatePath() {
    navigate("/list");
  }
  // function getUsers() {
  //   fetch(`http://localhost:3000/Employee/${params.id}`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data));
  //   console.log("gfcfgdgdgfdgd", data);
  // }

  const handleChange = (e) => {
    setName(e.target.value);
  };


  const regExName = /[A-Z]{1,}[a-z]{1,}?/g;
  const regExEmail = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
  const regExMobile = /^[\+91]?[6-9]{1}[0-9]{9,11}$/;
  const regExSalary = /^[0-9]{4,10}$/;;

  function handleName(e) {
    let item = e.target.value;
    setName(item);
    setNameErr("");
  }

  function handleNumber(e) {
    let item = e.target.value;
    setMobile(item);
    setMobileErr("");
  }

  function handleEmail(e) {
    let item = e.target.value;
    setEmail(item);
    setEmailErr("");
  }

  function handleSalary(e) {
    let item = e.target.value;
    setSalary(item);
    setSalaryErr("");
  }

  async function formHandle(e) {

    e.preventDefault();
    var payload = {
      //  id: 1,
      name: name,
      mobile: mobile,
      email: email,
      salary: salary,
    };
    console.log("------payload-----", payload);
    
    if(regExEmail.test(email) === true && regExMobile.test(mobile)=== true && regExSalary.test(salary)=== true && regExName.test(name) === true){

      if(typeof(params?.id)==='undefined'){
            // let data =  await axios.get(`http://localhost:3000/Employee?email=${payload.email}`)
            await axios.get("http://localhost:3000/Employee")
            .then(response=>{
              setData(response.data);
              // console.log("---result-- email-",response.data[0].email)
              // console.log('-----------state data----', response.data)
              // console.log('----data length----',response.data.length);
               
                if(response.data.find(dt => dt.email === payload.email))
                {
                  toast.warn("Already Registered",{
                    position: "top-center"
                  });
                  setTimeout(() => {
            
                  }, 2000)
                }
                else{
                  fetch("http://localhost:3000/Employee", {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
              }).then((result) => {
                console.log('after Add ', result)
                toast.success("Successfully Submitted",{
                  position: "top-center"
                });
                setTimeout(() => {
                  navigate('/list')
                }, 1000);
              });
                }
            })
        }
        else{
           
          fetch(`http://localhost:3000/Employee/${params?.id}`, {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }).then((result) => {
            console.log('after update ', result)
            result.json().then((resp) => {
              console.log('resp ', resp);
              toast.success("Submitted successfully......",{
                position: "top-center"
              });
              setTimeout(() => {
                navigate('/list')
              }, 1000);
            });
          });
        }

    }
    if(name=== ''){
      setNameErr("** Name is required.")
     }
      else{
        if (regExName.test(name)) {
          setNameErr(false);
        } else if (!regExName.test(name)) {
          setNameErr("**Name contain atleast 1 uppercase with 3 character.");
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
   
    if(mobile=== '' ){
      setMobileErr("**Mobile Number is required.")
    }
    else{
      if (regExMobile.test(mobile)) {
        setMobileErr(false);
      } else if (!regExMobile.test(mobile)) {
        setMobileErr("**Mobile number is invalid");
      } 
    }

    if(salary=== '' ){
      setSalaryErr("**Salary is required.")
    }
    else{
      if (regExSalary.test(salary)) {
        setSalaryErr(false);
      } else if (!regExSalary.test(salary)) {
        setSalaryErr("**Salary contain Number only.");
      } 
    }
    
    // 
 
    
  }
  
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/Employee/${params?.id}`, {
        method: "GET",
      }).then((response) =>
        response.json().then((items) => {
          // setItems(items);
          setName(items.name);
          setMobile(items.mobile);
          setEmail(items.email);
          setSalary(items.salary);
          console.log("res", items);
          setIsAdded(false)
        })
      );
    }

  }, [id]);

  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand" style={{color:"#c5d2d4" ,marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/home')}}>Webiwork</a>
                 {/* <div style={{cursor:"pointer"}}> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon">
                    </span>
                    </button>*/}
                    {/* <div  style={{marginLeft:"-50vw"}}>
                    <a className="text-light text-decoration-none">Home</a>&nbsp;&nbsp;&nbsp;
                    <a className="text-light text-decoration-none">About</a>&nbsp;&nbsp;&nbsp;
                    </div> */}
                    {/* <a className="text-danger text-decoration-none" onClick={() => navigate('/List')}>Employee List</a> */}
                {/* </div> */}
                 {/* <Navbar>
                        <NavDropdown title={user && user.Name}>
                             <NavDropdown.Item>Active Now</NavDropdown.Item> 
                        </NavDropdown>
                </Navbar>  */}
                    {/* <button className="btn btn-outline-dark"  onClick={() => navigate('/Signup')}>Signup</button> */}
        </nav>
      <div className="container form">
        <br/>
        <h4>Form</h4>
        <form onSubmit={formHandle}>
        
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
               //onChange={(e) => setName(e.target.value)}
              // onChange={() => handleChange(e)}
              value={name}
              placeholder="Enter full Name"
              onChange={handleName}
              />
          </div>
      
          <span className="alerterr" >{nameErr}</span> 
         <br/>
          <div className="form-group">
            <label>Mobile Number </label>
            <input
              type="text"
              className="form-control"
              //onChange={(e) => setMobile(e.target.value)}
              id="mobile"
              value={mobile}
              placeholder="Enter Mobile number"
              onChange={handleNumber}
             />
          </div>

          <span className="alerterr" >{mobileErr}</span> 
          <br/>
          <div className="form-group">
            <label  style={{marginLeft:"-410px"}}>Email</label>
            <input
              type="text"
              className="form-control"
              //onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              placeholder="Enter Your Email"
              onChange={handleEmail}
             />
          </div>

          <span className="alerterr" >{emailErr}</span> 
          <br/>
          <div className="form-group">
            <label style={{marginLeft:"-410px"}}>Salary</label>
            <input
              type="text"
              className="form-control"
              //onChange={(e) => setSalary(e.target.value)}
              //  onChange={e => handleChange(e)}
              id="salary"
              value={salary}
              placeholder="Enter Employee Salary"
              onChange={handleSalary}
            />
          </div>

          <span className="alerterr" >{salaryErr}</span> 
         
          <br />
          <button className="btn btn-dark left" onClick={navigatePath}>
          Back
        </button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-outline-success">Submit</button>
        </form>
      
       
       
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <ToastContainer/>
    </>
  );
}
export default Form;