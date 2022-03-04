import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router";
import { exact, path, component } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function Form(props) {
  const params = useParams();
  let { id } = useParams();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);
  // const [items, setItems] = useState({});
  const [isAdded, setIsAdded] = useState(true);

  console.log(id, "----params");

  let navigate = useNavigate();

  function navigatePath() {
    navigate("/List");
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
    
    
    if(typeof(params?.id)==='undefined'){
        // let data =  await axios.get(`http://localhost:3000/Employee?email=${payload.email}`)
        await axios.get("http://localhost:3000/Employee")
        .then(response=>{
          setData(response.data);
          console.log("---result-- email-",response.data[0].email)
          console.log('-----------state data----', response.data)
          console.log('----data length----',response.data.length);
           
            if(payload.email===response.data[0].email)
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
              navigate('/List')
            }, 1000);
            // navigate("/List");
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
            navigate('/List')
          }, 1000);
          // navigate("/List");
        });
      });
    }
 
    
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
      <div className="container">
        <h1>Form</h1>
        <button className="btn btn-dark left" onClick={navigatePath}>
          Back
        </button>
        <form onSubmit={formHandle}>
          <br />
          <br />
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // onChange={() => handleChange(e)}
              value={name}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Mobile Number </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setMobile(e.target.value)}
              id="mobile"
              value={mobile}
              placeholder="Enter Mobile number"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setSalary(e.target.value)}
              //  onChange={e => handleChange(e)}
              id="salary"
              value={salary}
              placeholder="Enter Employee Salary"
              required
            />
          </div>
          <br />
          <button className="btn btn-outline-dark" >Submit</button>
          
        </form>
        <br />
       
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <ToastContainer/>
    </>
  );
}
export default Form;










import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router";
import { exact, path, component } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";



function Form(props) {
  const params = useParams();
  let { id } = useParams();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState([]);
  // const [items, setItems] = useState({});
  const [isAdded, setIsAdded] = useState(true);
 

  console.log(id, "----params");

  let navigate = useNavigate();

  function navigatePath() {
    navigate("/List");
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

 

  //async 
  function formHandle(e) {

    e.preventDefault();
    var payload = {
      //  id: 1,
      name: name,
      mobile: mobile,
      email: email,
      salary: salary,
    };
    console.log("------payload-----", payload);
    
    
    if(typeof(params?.id)==='undefined'){
        // let data =  await axios.get(`http://localhost:3000/Employee?email=${payload.email}`)
       
        var users = data.find((res) => {
          console.log("rrrrrrrrrrrr", res);
          // if (res && res.email !== payload.email) {
          //   return true;
          // } else {
          //   return false;
          // }
        });
        console.log('-------user---',users);
        // let findData = data.findIndex((response) => response.email == payload.email);
    
        // console.log("------user--", findData);
        // if (findData == -1) {
        //   toast.success("Successfully Registered ",{
        //     position: "top-center"
        //   });
        //   setTimeout(() => {
        //      navigate("/Login");
        //    }, 2000);
        
    
        //   fetch("http://localhost:3000/Employee", {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload),
        //   }).then((res) => console.log("res", res));
        // } 
        // else {
        //   toast.warn("Already Registered",{
        //     position: "top-center"
        //   });
        //   setTimeout(() => {
        //     // navigate("/Login");
        //   }, 2000)
          // navigate("/login");
          // alert("Already Registered")
            //   .then(response =>  navigate('/Login')
            // )
    
            // .catch((error) => {
            //   console.error("Error:", error);
            // });
       // }
      }
      
        // await axios.get("http://localhost:3000/Employee")
        // .then(response=>{
        //   setData(response.data);
        //   console.log("---result-- email-",response.data[12].email)
        //   console.log('-----------state data----', response.data)
        //   console.log('----data length----',response.data.length);

        //   //  for(let i =0 ;i<=response.data.length-1;i++)
          
        //     if(payload.email===response.data[12].email)
        //     {
        //       toast.warn("Already Registered",{
        //         position: "top-center"
        //       });
        //       setTimeout(() => {
        
        //       }, 2000)
        //     }
        //     else{
        //       fetch("http://localhost:3000/Employee", {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(payload),
        //   }).then((result) => {
        //     console.log('after Add ', result)
        //     toast.success("Successfully Submitted",{
        //       position: "top-center"
        //     });
        //     setTimeout(() => {
        //       navigate('/List')
        //     }, 1000);
        //     // navigate("/List");
        //   });
        //     }
       //  })
       // }
    else{
       alert('execute else')
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
            navigate('/List')
          }, 1000);
          // navigate("/List");
        });
      });
    }
  }
  
  useEffect(() => {
    console.log("wwwwww-----")
    fetch("http://localhost:3000/Employee" ,
      {
        method: "GET",
      }).then((response) => response.json())
      .then((data) => setData(data));
      console.log("wwwwww-----", data)
  }, []);
  
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
      <div className="container">
        <h1>Form</h1>
        <button className="btn btn-dark left" onClick={navigatePath}>
          Back
        </button>
        <form onSubmit={formHandle}>
          <br />
          <br />
          <div className="form-group">
            <label>Enter Your Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // onChange={() => handleChange(e)}
              value={name}
              placeholder="Enter Your Name"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Mobile Number </label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setMobile(e.target.value)}
              id="mobile"
              value={mobile}
              placeholder="Enter Mobile number"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              value={email}
              placeholder="Enter Your Email"
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label>Salary</label>
            <input
              type="number"
              className="form-control"
              onChange={(e) => setSalary(e.target.value)}
              //  onChange={e => handleChange(e)}
              id="salary"
              value={salary}
              placeholder="Enter Employee Salary"
              required
            />
          </div>
          <br />
          <button className="btn btn-outline-dark" >Submit</button>
          
        </form>
        <br />
       
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
      <ToastContainer/>
    </>
  );
}
export default Form;


// import React, { useEffect, useState } from "react";
// import Login from "./Login";
// import { useNavigate } from "react-router";
// import { exact, path, component } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from "axios";


// function Form(props) {
//   const params = useParams();
//   let { id } = useParams();
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmail] = useState("");
//   const [salary, setSalary] = useState("");
//   const [data, setData] = useState([]);
//   // const [items, setItems] = useState({});
//   const [isAdded, setIsAdded] = useState(true);

//   console.log(id, "----params");

//   let navigate = useNavigate();

//   function navigatePath() {
//     navigate("/List");
//   }
//   // function getUsers() {
//   //   fetch(`http://localhost:3000/Employee/${params.id}`, {
//   //     method: "GET",
//   //   })
//   //     .then((response) => response.json())
//   //     .then((data) => setData(data));
//   //   console.log("gfcfgdgdgfdgd", data);
//   // }

//   const handleChange =   (e) => {
//     setName(e.target.value);
//   };

//   async function formHandle(e) {

//     e.preventDefault();
//     var payload = {
//       //  id: 1,
//       name: name,
//       mobile: mobile,
//       email: email,
//       salary: salary,
//     };
//     console.log("------payload-----", payload);
    
    
//     if(typeof(params?.id)==='undefined'){

     

//      let data =  await axios.get(`http://localhost:3000/Employee?email=${payload.email}`)
//       console.log("---data---",data)
     
//     if(data?.data.lenght === 0)
//     {
//       fetch("http://localhost:3000/Employee", {
//         method: "POST", // or 'PUT'
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }).then((result) => {
//         console.log('after Add ', result)
//         toast.success("Submitted Successfully",{
//           position: "top-center"
//         });
//         setTimeout(() => {
//           navigate('/List')
//         }, 1000);
//         // navigate("/List");
//       });
//        }
      
//       fetch(`http://localhost:3000/Employee/${params?.id}`, {
//         method: "PUT",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       }).then((result) => {
//         console.log('after update ', result)
//         result.json().then((resp) => {
//           console.log('resp ', resp);
//           toast.success("Submitted successfully",{
//             position: "top-center"
//           });
//           setTimeout(() => {
//             navigate('/List')
//           }, 1000);
//           // navigate("/List");
//         });
//       });
//     }
 
    
//   }
  
//   useEffect(() => {
//     if (id) {
//       fetch(`http://localhost:3000/Employee/${params?.id}`, {
//         method: "GET",
//       }).then((response) =>
//         response.json().then((items) => {
//           // setItems(items);
//           setName(items.name);
//           setMobile(items.mobile);
//           setEmail(items.email);
//           setSalary(items.salary);
//           console.log("res", items);
//           setIsAdded(false)
//         })
//       );
//     }

//   }, [id]);



//   return (
//     <>
//       <div className="container">
//         <h1>Form</h1>
//         <button className="btn btn-dark left" onClick={navigatePath}>
//           Back
//         </button>
//         <form onSubmit={formHandle}>
//           <br />
//           <br />
//           <div className="form-group">
//             <label>Enter Your Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               // onChange={() => handleChange(e)}
//               value={name}
//               placeholder="Enter Your Name"
//               required
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Mobile Number </label>
//             <input
//               type="number"
//               className="form-control"
//               onChange={(e) => setMobile(e.target.value)}
//               id="mobile"
//               value={mobile}
//               placeholder="Enter Mobile number"
//               required
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               className="form-control"
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//               value={email}
//               placeholder="Enter Your Email"
//               required
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label>Salary</label>
//             <input
//               type="number"
//               className="form-control"
//               onChange={(e) => setSalary(e.target.value)}
//               //  onChange={e => handleChange(e)}
//               id="salary"
//               value={salary}
//               placeholder="Enter Employee Salary"
//               required
//             />
//           </div>
//           <br />
//           <button className="btn btn-outline-dark" >Submit</button>
          
//         </form>
//         <br />
       
//         <br />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//       </div>
//       <ToastContainer/>
//     </>
//   );
// }
// export default Form;

// function dataStore(e) {
//   e.preventDefault();
//   const payload = {
//     Name: name,
//     Email: email,
//     Password: password,
//   };

//   console.log("payload", payload);
//   var users = data.find((res) => {
//     console.log("rrrrrrrrrrrr", res);
//     if (res && res.Email !== payload.Email) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   let findData = data.findIndex((res) => res.Email == payload.Email);

//   console.log("user--", findData);
//   if (findData == -1) {
//     navigate("/Login");

//     fetch("http://localhost:3000/Register", {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(payload),
//     }).then((res) => console.log("res", res));
//   } else {
//     navigate("/login");
//     alert("Already Registered")
//       //   .then(response =>  navigate('/Login')
//       // )

//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }
// }





// function Form(){
//     return(
//         <>
//         <form>
//         <div class="form-group">
//     <label for="exampleInputEmail1">Enter Your Name</label>
//     <input type="text" class="form-control" id="Name" aria-describedby="name" placeholder="Name"/>  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label>Designation</label>
//     <input type="text" class="form-control" id="designation" placeholder="Designaation"/>
//   </div>
//   <div class="form-group">
//     <label>Mobile Number </label>
//     <input type="Number" class="form-control" id="mobile" placeholder="Enter Mobile number"/>  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label>Salary</label>
//     <input type="number" class="form-control" id="salary" placeholder="Mobile Number"/>  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <button type="submit" class="btn btn-outline-primary">Submit</button>
// </form>
// </>
//     )
// }

// export default Form;
