import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
// import Form from './frontend/Form';
import "./list.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmDialog from './ConfirmDialog'
import {confirmDialog,setConfirmDialog} from '@material-ui/core'

function List() {
  let [searchData, setSearchData] = useState(null);
  var navigate = useNavigate();
  const [data, setData] = useState([]);
  var [value, setValue] = useState(false);
  const [confirmDialog , setConfirmDialog] = useState({isOpen:true, title:'' , SubTitle:''})
  // let { id } = useParams();
  function navigateHome() {
    navigate("/Homes");
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
    navigate("/Form");
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
  
  function navigatePath() {
    navigate("/View");
  }

  return (
    <>
      <h1>Employee List</h1>
      <br />
      <br />
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input
              class="form-control mr-sm-2"
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
            {data.map((dt, i) => (
              <tr key={i}>
                <td>{dt.id}</td>
                <td>{dt.name}</td>
                <td>{dt.email}</td>
                <td>{dt.mobile}</td>
                <td>{dt.salary}</td>
                <td>
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/View/" + dt.id)}
                  >
                    View
                  </button>
                  {/* <a href={`/View/${dt.id}`}>View</a>*/}
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/Form/" + dt.id)}
                  >
                    Edit
                  </button>
                  &nbsp;&nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() =>
                      deleteEmployee(dt.id)}>
                    Delete
                  </button>
                  &nbsp;&nbsp;
                </td>
              </tr>
            ))}
          </thead>
        </table>
        <br />
        <button className="btn btn-dark left" onClick={navigateHome}>
          Back
        </button>
      </div>
       <confirmDialog 
      confirmDialog = {confirmDialog}
      setConfirmDialog = {setConfirmDialog}
      
      
      /> */}
            </>
  );
}

export default List;
