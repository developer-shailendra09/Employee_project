import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import "./list.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { confirmable } from 'react-confirm';
// import Dialog from './Dialog';
import {Navbar , NavDropdown} from 'react-bootstrap';
//import {confirmDialog , setConfirmDialog} from '@material-ui/core'

function List() {
  let [searchData, setSearchData] = useState(null);
  var navigate = useNavigate();
  const [data, setData] = useState([]);
  var [value, setValue] = useState(false);
  const [order, setOrder] = useState("DES")
  // const [show, setShow] = useState(false);

  //const [confirmDialoge , setconfirmDialoge] = useState({isOpen:false, title:'' , subTitle:''})
  // let { id } = useParams();
  function navigateHome() {
    navigate("/home");
  }

  function Search(key, e) {
    console.log(key);
    if (key.length >= 3) {
      fetch("http://localhost:3000/Employee?q=" + key).then((data) => {
        data.json().then((response) => {
          console.log("resp", response);
          setData(response);
        });
      });
    }
  }

  useEffect(() => {
    getUsers();
  }, []);
  console.log("---list---",data);
  function navigatePage() {
    navigate("/form");
  }

  function getUsers() {
    fetch("http://localhost:3000/Employee")
      .then((response) => response.json())
      .then((dataUser) => setData(dataUser));
  }

  function deleteEmployee(id) {

    if( window.confirm("Are You Sure want to delete")){
  
    fetch(`http://localhost:3000/Employee/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then(() => {
        console.log(result);
        getUsers();
      });
    });
  }
}
 
  //   setShow(true) 
  //   return(
  //     <Dialog
  //     />
  //     setShow={false}
  //     title="Delete ?"
  //     description="Do you really want to delete this dels?"
  //     confirm={confirm}
  //     cancel={cancel}
      
      
  //   )
  // }
  // const confirm = () => {
  //   setShow(false);
  // };

  // const cancel = () => {
  //   setShow(false);

  // };



  function navigatePath() {
    navigate("/view");
  }


  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-dark">
     <a className="navbar-brand" style={{color:"#c5d2d4",cursor:"pointer" ,marginLeft:"33px"}} onClick={() => {navigate('/home')}}>Webiwork</a>
                 <div style={{cursor:"pointer"}}>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> 
                    <span className="navbar-toggler-icon">
                    </span>
                    </button>*/}
                    {/* <div  style={{marginLeft:"-50vw"}}>
                    <a className="text-light text-decoration-none">Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a className="text-light text-decoration-none">About</a>
                    </div> */}
                    {/* <a className="text-danger text-decoration-none" onClick={() => navigate('/List')}>Employee List</a> */}
                </div>
               
                    {/* <button className="btn btn-outline-dark"  onClick={() => navigate('/Signup')}>Signup</button> */}
        </nav>
        {/* <button onClick={sortDescending}>desc</button> */}
       
      <div className="container-lg">
        <br/>
      <h3 style={{color:"black"}}>Employee List</h3>
        <nav class=" addbutton navbar navbar navbar-light">
          <form className="form-inline">
            <input
              className="form-control mr-sm-2" style={{cursor:"pointer"}}
              type="search"
              placeholder="Search Employee"
              aria-label="Search"
              onChange={(e) => Search(e.target.value)}
            />
          </form>
          <button className="btn btn-outline-primary" onClick={navigatePage}>
            Add Employee
          </button>
        </nav>
        <br />
        <div>
          {searchData ? (
            <div>
              {searchData.map((item) => (
                <div>{item.name}</div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Mobile No.</th>
              <th>Salary</th>
              <th>action</th>
            </tr>
            {data.sort((a,b)=>b.id - a.id ).map((dt, i) => (
              <tr key={i}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.email}</td>
                <td>{dt.mobile}</td>
                <td>{dt.salary}</td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/view/" + dt.id)}
                  >
                    View
                  </button>
                  {/* <a href={`/View/${dt.id}`}>View</a>*/}
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/form/" + dt.id)}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;

                  
                  <button className="btn btn-outline-dark" onClick={() => {deleteEmployee(dt.id)}}>Delete</button>
                
                  {/* <button
                   className="btn btn-outline-dark"
                   onClick={() =>
                     deleteEmployee(dt.id)}>
                   Delete
                 </button> */}
                  &nbsp;&nbsp;
                </td>
              </tr>
            ))}
          </thead><br/>
          <button className="btn btn-outline-dark left" onClick={navigateHome}>
          Back
        </button>
        </table>
      </div>
      {/* <confirmDialoge 
       confirmDialog = {confirmDialog}
       setConfirmDialog = {setConfirmDialog}
           /> */}
           
            </>
  );
}

export default List;
