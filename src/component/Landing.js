import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function Landing() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const { username, email, mobile, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your username is ${username}, email is ${email}, mobile is ${mobile} and password is ${password}`
    );
  };

  const [isOpened, setIsOpened] = useState(false);

  const [data, setData] = useState([]);

  function toggle() {
    setIsOpened(!isOpened);   
  }

  const getApi = () => {
    axios.get("https://recruitingmonk-v2.azurewebsites.net/qna").then((res) => {
      const users = res.data;
      setData(users);
      console.log(res);
    });
  };

  return (
    <>
      <button className="btn btn-primary" style={{marginLeft:"50%", marginTop:"20px"}} onClick={toggle}>
        Form
      </button>
      {isOpened && (
        <div
          className="container-fluid"
          style={{ border: "4px solid gold", width: "320px", padding: "10px" }}
        >
          <form
            className="d-flex flex-column"
            onSubmit={onSubmit}
            style={{ width: "80%" }}
          >
            <div className="form-group">
              <label for="exampleInputPassword1">Username</label>
              <input
                type="text"
                onChange={onChange}
                name="username"
                value={username}
                style={{ height: "40px" }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Username"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                onChange={onChange}
                name="email"
                value={email}
                style={{ height: "40px" }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Mobile</label>
              <input
                type="text"
                onChange={onChange}
                name="mobile"
                value={mobile}
                style={{ height: "40px" }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mobile"
                required
              />
            </div>

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                onChange={onChange}
                name="password"
                value={password}
                style={{ height: "40px" }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                required
              />
            </div>
            <br />
            <div className="d-flex">
            <button
              style={{ width: "50%" }}
              className="btn btn-secondary"
              type="submit"
            >
            
              Submit
            </button>
            <button
              style={{ width: "50%" }}
              className="btn btn-light"
              onClick={toggle}
            >
            
              Close
            </button>
            </div>
          </form>
        </div>
      )}
      <div>
        <button className="btn btn-primary" style={{marginLeft:"50%", marginTop:"20px"}} onClick={getApi}>
          API
        </button>
      

        <ul>
          {data.map((item) => (
            <div>
              <Card style={{ width: "45rem", marginTop: "20px" }}>
                <Card.Body>
                  <Card.Title>
                    <div
                      className="d-flex align-items-center"
                      style={{ height: "50px" }}
                    >
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                          style={{
                            border: "1px solid black",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                          }}
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <div className="d-flex align-items-center">
                          &nbsp;{item.name}
                          <span style={{ fontSize: "18px", color: "#24a0ed " }}>
                            &nbsp;Follow
                          </span>
                        </div>
                        <div style={{ fontSize: "18px" }}>
                          &nbsp;{item.date}
                        </div>
                      </div>
                    </div>
                  </Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle> */}
                  <Card.Text>
                    <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                      {item.question}
                    </div>
                    <div
                      className="d-flex justify-content-between"
                      style={{ width: "100%", height: "50px", padding: "8px" }}
                    >
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "175px" }}
                      >
                        <div
                          className="d-flex align-items-center"
                          style={{
                            backgroundColor: "#dee2e6",
                            borderRadius: "10px",
                            width: "110px",
                          }}
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{
                              borderRight: "1px solid lightgrey",
                              fontSize: "14px",
                              width: "65%",
                            }}
                          >
                            <span className="material-icons-outlined">
                              keyboard_arrow_up
                            </span>
                            168
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="material-icons-outlined">
                              keyboard_arrow_down
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons-outlined">sync</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons-outlined">
                            chat_bubble_outline
                          </span>
                        </div>
                      </div>
                      <div
                        className="d-flex justify-content-between"
                        style={{ width: "70px" }}
                      >
                        <div className="d-flex align-items-center">
                          <span className="material-icons-outlined">shortcut</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="material-icons-outlined">
                            more_horiz
                          </span>
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="input-group d-flex justify-content-between">
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "35px",
                          height: "35px",
                        }}
                      ></div>
                      <div
                        className="form-outline d-flex justify-content-between"
                        style={{ width: "75%" }}
                      >
                        <input
                          type="search"
                          placeholder="Add a comment"
                          id="form1"
                          className="form-control"
                          style={{ borderRadius: "20px" }}
                        />
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary"
                        style={{ borderRadius: "20px" }}
                      >
                        Add Comment
                      </button>
                    </div>
                    <br />
                    <div
                      className="d-flex align-items-center"
                      style={{ height: "50px" }}
                    >
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "50%",
                          width: "35px",
                          height: "35px",
                        }}
                      >
                        <img
                          src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
                          style={{
                            border: "1px solid black",
                            borderRadius: "50%",
                            width: "35px",
                            height: "35px",
                          }}
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column">
                        <div
                          className="d-flex align-items-center"
                          style={{ fontWeight: "bold" }}
                        >
                          &nbsp;{" "}
                          {item.answers.map((sub) => (
                            <>{sub.name}</>
                          ))}
                        </div>
                        <div style={{ fontSize: "18px" }}>
                          &nbsp;
                          {item.answers.map((sub) => (
                            <>{sub.date}</>
                          ))}
                        </div>
                      </div>
                    </div>
                    <br />
                    <div style={{ fontSize: "20px" }}>
                      {item.answers.map((sub) => (
                        <>{sub.content}</>
                      ))}
                    </div>
                  </Card.Text>
                  {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
              </Card>
            </div>
          ))}
          {/* 
        {JSON.stringify(data)} */}
        </ul>
      </div>
    </>
  );
}

export default Landing;
