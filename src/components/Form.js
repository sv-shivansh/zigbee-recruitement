import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/detail";
import Capture from "../img/Capture.PNG"
import PropTypes from "prop-types";

const Form = ({register, registration}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    semester: "",
    branch: "",
    usn: "",
    ques1: "",
    ques2: "",
    github:"",
    skills:""
  });
  let { name, email, phone, semester, branch, usn } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    register({ name, email, phone, semester, branch, usn})
    console.log(formData, registration);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
      (!registration?
    <div className="page-wrapper bg-gra-02 p-t-50 p-b-100 font-poppins">
      <div className="wrapper wrapper--w1000">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">4 Days 4 Projects</h2>
            <div className="details">
              <p>
              Let’s make some projects that will help in your resume and allow you to gain some practical knowledge with Web Development fundamentals and technologies. .
              </p>
              <p> The projects what you are going to develop are :</p>
              <p> • Day 1: Random Color Generator [11 Sept'21]</p>
              <p> • Day 2: Stopwatch [11 Sept'21]</p>
              <p> • Day 3: Todo List With FireBase [18 Sept'21]</p>
              <p> • Day 4: Client Server Architecture w/ API Calls [19 Sept'21]</p>
            </div>
            <form id="form" onSubmit={(e) => onSubmit(e)}>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Full name</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">USN</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="usn"
                      value={usn}
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Branch</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="branch"
                      value={branch}
                      onChange={(e) => onChange(e)}
                      placeholder="Ex- IOT, AI ,CTIS"
                    ></input>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Semester</label>
                    <div className="p-t-10">
                      <label className="radio-container m-r-45">
                        3
                        <input
                          type="radio"
                          name="semester"
                          value="3"
                          onChange={(e) => onChange(e)}
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                      <label className="radio-container">
                        5
                        <input
                          type="radio"
                          name="semester"
                          value="5"
                          onChange={(e) => onChange(e)}
                        ></input>
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Email (College Official ID)</label>
                    <input
                      className="input--style-4"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                </div>
                <div className="col-2">
                  <div className="input-group">
                    <label className="label">Phone Number</label>
                    <input
                      className="input--style-4"
                      type="text"
                      name="phone"
                      value={phone}
                      onChange={(e) => onChange(e)}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="p-t-15">
                <button className="btn btn--radius-2 btn--blue" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>:<section class="bg-new">
    <div class="container">
      <div class ="card">
        <div class ="content">
          <div class="imgBx"><img src={Capture} alt="zigbee logo"/></div>
          <div class ="contentBx">
            <h2>Thank You<br /><span>You have Successfully registered for the event</span></h2><br/>
            <span class="small">All the details will be sent to you via Email</span>
          </div>
        </div>
      </div>
    </div>
  </section>)
  );
};

Form.propTypes = {
    register: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = (state) => ({
      registration: state.register.registration
  });
  
  export default connect(mapStateToProps, {register})(Form);
  