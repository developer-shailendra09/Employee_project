import React,{useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router";
import './view.css'
function View(){
  const[data, setData]=useState('');
  const params = useParams()
  let {ids} = useParams();
  var navigate = useNavigate();

  function navigatePath(){
    navigate('/list')
  }
  
  function getUsers(){
    fetch(`http://localhost:3000/Employee/${params.id}`)
    .then(response => response.json())
    .then(data => setData(data));
  }

  useEffect(()=>{
    getUsers()
  },[])
     return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-light" style={{marginLeft:"33px",cursor:"pointer"}} onClick={() => {navigate('/Homes')}}>Webiwork</a>          
            {/* <div style={{cursor:"pointer"}}>
                    <a className="text-light text-decoration-none">Home</a>&nbsp;&nbsp;&nbsp;
                    <a className="text-light text-decoration-none">About</a>&nbsp;&nbsp;&nbsp;
                </div> */}
        </nav>
        <br/>
        <div className="card ">
          <br/>
           <h4>Employee details</h4>
           <center><img src="https://www.pageuppeople.com/wp-content/uploads/2019/01/Top-60-Employee-Engagement-image14-1024x511.png" height="200px" width="390px" alt="pic"/></center>
            <div className="card-header">
            <h5>Employee Id :  {data.id}</h5></div>
            <div className="card-body">   
            <span>&nbsp;&nbsp;&nbsp;&nbsp;Name &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;{data.name} </span><br/>
            <span>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.email} </span><br/>
            <span>Mobile No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.mobile} </span><br/>
            <span>Salary &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.salary}</span><br/>
           </div>
</div><br/>
<button className="btn btn-dark" onClick={navigatePath} style={{marginBottom:"12px"}}>Back</button>
       <br/>
        </>
          
    )
}

export default View;


  