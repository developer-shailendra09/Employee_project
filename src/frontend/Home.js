import { useNavigate } from "react-router";
import Signup from './Signup';
import Login from './Login'

function Home() {
    let navigate = useNavigate();  
    // function pageRoute(){
    // navigate ('/List')
    // }
    return (
        <>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
             <a className="navbar-brand" style={{ color:"#34eb74",marginLeft:"33px"}} href="https://in.linkedin.com/company/webiwork-technologies-pvt-ltd">Webiwork</a>          
                 <button className="btn btn-outline-light" id="btnlog" onClick={() => navigate('/login')}>Login</button>
                 <button className="btn btn-outline-light" id="btnsign" onClick={() => navigate('/signup')}>Signup</button>
      </nav>
            
            <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tx6hv1rwj5boduhypxve" height="350px" style={{marginTop:"136px"}}/>
            {/* <hr/> */}
            {/* <Login/>
            <Signup/> */}
            <br/>   <br/>   <br/>
        </>
    );
}
export default Home;














// import React from 'react';
// import axios from "axios";
// // import { withRouter } from "react-router-dom";

// function Home() {
// //   constructor(props) {
// //     super(props);
//     const [userId,setUserId]=useState("");
//     const [title,setTitle]=useState("");
//     // this.state = {
//     //   userId: "",
//     //   title: "",

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: [e.target.value] });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:3000/Employee", this.state)
//       .then((response) => {
//         console.log(response.data);
//         this.props.todos(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // this.props.history.push("/");
//       };
//     // {
//     // const { userId, title } = this.state;
//     // }
//     return (
//     //   <div style={{ width: "30%", margin: "25px auto", textAlign: "center" }}>
//         <form onSubmit={submitHandler}>
//             <div>
//                <input type="text" name="userId" value={userId} onChange={changeHandler} className="form-control" placeholder="Enter Your Name"/>
//             </div>
//           <div>
//             <input type="number" value={number} onChange={changeHandler} style={{ display: "none" }} className="form-control" placeholder="Mobile Number "/>
//           </div>
//           <div>
//             <input type="number" name="title" value={salary} onChange={changeHandler} className="form-control" placeholder="Employee Salary"/>
//           </div>
//           <button className="btn btn-primary">Submit</button>
//         </form>
//     );
// }

// export default Home;

















// import React from 'react';
// import Login from './Login'
// import './home.css'
 
// function Home() {
//     return (
//         <>
//         <nav class="navbar navbar-expand-lg navbar-light bg-success">
//             <a class="navbar-brand" href="https://in.linkedin.com/company/webiwork-technologies-pvt-ltd">Webiwork</a>
//                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                 <span class="navbar-toggler-icon"></span>
//                 </button>
                {/* <a href='/Login'>Login</a>
                <button href="http://localhost:3001/Login/Signup">Signup</button> */}
             
// </nav>
//             <h1>Hii User</h1>
//             <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/tx6hv1rwj5boduhypxve"/>
//             <hr/>
            {/* <div className="container">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Mobile No.</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>admin</td>
                        <td>Jr. Software Engineer</td>
                        <td>9000090000</td>
                        <td>90000</td>
                        <button className="btn btn-outline-dark">Edit User</button>&nbsp;
                        <button className="btn btn-outline-primary">Delete User</button>
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>admin 2</td>
                        <td>Team Leader</td>
                        <td>9000090001</td>
                        <td>55000/-</td>
                        <button className="btn btn-outline-dark">Edit User</button>&nbsp;
                        <button className="btn btn-outline-primary">Delete User</button>
                       
                    </tr>
                    <tr>
                         <th scope="row">3</th>
                            <td col>admin 3</td>
                            <td col>QA Tester</td>
                            <td>9000090003</td>
                            <td>40000/-</td>
                            <button className="btn btn-outline-dark">Edit User</button>&nbsp;
                            <button className="btn btn-outline-primary">Delete User</button>
                         
                    </tr>
                </tbody>
            </table> 
             <button className="btn btn-outline-primary ">Add Users</button>&nbsp; &nbsp; 
            </div> 
         </>
  );
}

export default Home; */}