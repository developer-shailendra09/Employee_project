import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router";
import { exact, path, component } from "react-router-dom";
import { useParams } from "react-router-dom";

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

  function formHandle(e) {

    e.preventDefault();
    var payload = {
      //  id: 1,
      name: name,
      mobile: mobile,
      email: email,
      salary: salary,
    };
    console.log("------a-------", payload);
    // navigate("/List");
    fetch("http://localhost:3000/Employee", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((res) => console.log("res", res));
  }

  function updateData() {
    {
      let payload = {
        name: name,
        mobile: mobile,
        email: email,
        salary: salary,
      };

      console.log("--updateData--", payload);
      console.log('id ', params?.id);
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

    //axios code for GET method
    // axios.get(`http://localhost:3000/Employee/${params.id}`)
    // .then(response=>{
    //   setItems(response.data)
    //   console.log("response------",response.data)
    // })
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
          {/* <button className="btn btn-outline-dark" onClick={updateData}> Submit
        </button> */}
        {
          isAdded ? (
                <button className="btn btn-outline-dark" onClick={addEmployee}>Submit</button>
          )
          :
          (
            <button className="btn btn-outline-dark" onClick={updateEmployee}>Submit
            </button>
          )
        }
          
        </form>
        <br />
       
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </>
  );
}
export default Form;
