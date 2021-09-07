import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../actions/detail";
import PropTypes from "prop-types";
import Typewriter from "typewriter-effect";

const Form = ({ register, registration }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    semester: "",
    branch: "",
    usn: "",
  });
  const [start, setStart] = useState(false);
  const [boolName, setBoolName] = useState(false);
  const [inputName, setInputName] = useState(false);
  const [boolUSN, setBoolUSN] = useState(false);
  const [inputUSN, setInputUSN] = useState(false);
  const [boolEmail, setBoolEmail] = useState(false);
  const [inputEmail, setInputEmail] = useState(false);
  const [boolPhone, setBoolPhone] = useState(false);
  const [inputPhone, setInputPhone] = useState(false);
  const [boolBranch, setBoolBranch] = useState(false);
  const [inputBranch, setInputBranch] = useState(false);
  const [boolSemester, setBoolSemester] = useState(false);
  const [inputSemester, setInputSemester] = useState(false);

  let { name, email, phone, semester, branch, usn } = formData;
  const onSubmit = async (e) => {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    register({ name, email, phone, semester, branch, usn });
    console.log(formData, registration);
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const onChangeforRadio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setInputSemester(true);
    console.log(formData);
  };
  const handleKeyPress1 = (event) => {
    if (event.key === "Enter") {
      setInputName(true);
      console.log("enter press here! 1");
    }
  };
  const handleKeyPress2 = (event) => {
    if (event.key === "Enter") {
      setInputUSN(true);
      console.log("enter press here! 1");
    }
  };
  const handleKeyPress3 = (event) => {
    if (event.key === "Enter") {
      setInputEmail(true);
      console.log("enter press here! 1");
    }
  };
  const handleKeyPress4 = (event) => {
    if (event.key === "Enter") {
      setInputPhone(true);
      console.log("enter press here! 1");
    }
  };
  const handleKeyPress5 = (event) => {
    if (event.key === "Enter") {
      setInputBranch(true);
      console.log("enter press here! 1");
    }
  };
  return !registration ? (
    <div className="page-wrapper bg-gra-02">
      <div className="outer-container">
        <div className="inner-container">
          <h2 className="title">4 Days 4 Projects</h2>
          <div className="details">
            <p>
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pasteString(
                      "Let’s make some projects that will help in your resume and allow you to gain some practical knowledge with Web Development fundamentals and technologies."
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .start();
                }}
              />
            </p>
            <p>
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("• Day 1: Random Color Generator [11 Sept'21]")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)

                    .start();
                }}
              />
            </p>
            <p>
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("• Day 2: Stopwatch [12 Sept'21]")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)

                    .start();
                }}
              />
            </p>
            <p>
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("• Day 3: Todo List With FireBase [18 Sept'21]")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)

                    .start();
                }}
              />
            </p>
            <p>
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      " • Day 4: Client Server Architecture w/ API Calls [19 Sept'21]"
                    )
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setStart(true);
                    })
                    .start();
                }}
              />
            </p>
            {/* <p> The projects what you are going to develop are :</p>
              <p> • Day 1: Random Color Generator [11 Sept'21]</p>
              <p> • Day 2: Stopwatch [12 Sept'21]</p>
              <p> • Day 3: Todo List With FireBase [18 Sept'21]</p>
              <p> • Day 4: Client Server Architecture w/ API Calls [19 Sept'21]</p> */}
          </div>
        </div>
      </div>
      <div className="outer-container">
        <div className="inner-container">
          {start ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter your Name")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolName(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolName ? (
            <div className="userInput">
              <span>&gt;</span>
              <input
                id="btn"
                type="text"
                name="name"
                placeholder="e.g.Shivansh Vishwakarma"
                value={name}
                onChange={(e) => onChange(e)}
                onKeyPress={handleKeyPress1}
                autoFocus={true}
                readOnly={inputName}
                autoComplete="off"
              />
            </div>
          ) : (
            ""
          )}
          {inputName ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter your USN")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolUSN(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolUSN ? (
            <div className="userInput">
              <span>&gt;</span>
              <input
                id="btn"
                type="text"
                name="usn"
                value={usn}
                placeholder="19BTRCY029"
                onChange={(e) => onChange(e)}
                onKeyPress={handleKeyPress2}
                autoFocus={true}
                readOnly={inputUSN}
                autoComplete="off"
              />
            </div>
          ) : (
            ""
          )}
          {inputUSN ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter your Email")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolEmail(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolEmail ? (
            <div className="userInput">
              <span>&gt;</span>
              <input
                id="btn"
                type="email"
                name="email"
                placeholder="abc@jainuniversity.ac.in"
                value={email}
                onChange={(e) => onChange(e)}
                onKeyPress={handleKeyPress3}
                autoFocus={true}
                readOnly={inputEmail}
                autoComplete="off"
              />
            </div>
          ) : (
            ""
          )}
          {inputEmail ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter your Phone(Whatsapp)")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolPhone(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolPhone ? (
            <div className="userInput">
              <span>&gt;</span>
              <input
                id="btn"
                type="text"
                name="phone"
                value={phone}
                placeholder="+91 9876543210"
                onChange={(e) => onChange(e)}
                onKeyPress={handleKeyPress4}
                autoFocus={true}
                readOnly={inputPhone}
                autoComplete="off"
              />
            </div>
          ) : (
            ""
          )}
          {inputPhone ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Enter your Branch")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolBranch(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolBranch ? (
            <div className="userInput">
              <span>&gt;</span>
              <input
                id="btn"
                type="text"
                name="branch"
                placeholder="CSE-IoT"
                value={branch}
                onChange={(e) => onChange(e)}
                onKeyPress={handleKeyPress5}
                autoFocus={true}
                readOnly={inputBranch}
                autoComplete="off"
              />
            </div>
          ) : (
            ""
          )}
          {inputBranch ? (
            <div className="desc">
              <Typewriter
                options={{
                  cursor: "",
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Select Your Semester")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(250)
                    .callFunction(() => {
                      setBoolSemester(true);
                    })
                    .start();
                }}
              />
            </div>
          ) : (
            ""
          )}
          {boolSemester ? (
            <div className="userInput">
              <span>&gt;</span>
              <div className="radio">
                <label className="radio-container m-r-45">
                  3
                  <input
                    type="radio"
                    name="semester"
                    value="3"
                    onChange={(e) => onChangeforRadio(e)}
                  ></input>
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">
                  5
                  <input
                    type="radio"
                    name="semester"
                    value="5"
                    onChange={(e) => onChangeforRadio(e)}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          ) : (
            ""
          )}
          {inputSemester ? (
            <div className="button">
              <button type="submit" onClick={(e) => onSubmit(e)}>
                Submit
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="outer-container">
          <div className="inner-container thank zigbee1">
            Regards,<br/> Team Zigbee
          </div>
          </div>
    </div>
  ) : (
    <div className="page-wrapper bg-gra-02">
      <div className="outer-container">
        <div className="inner-container thank">
          <Typewriter
            options={{
              cursor: "|",
              delay: 50,
              loop: true
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Thank you for your interest.")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(500)
                .deleteAll()
                .typeString(
                  "You'll Soon recieve an Email to your registered mail ID with all the details regarding the Event."
                )
                .start();
            }}
          />
        </div>
      </div>
      <div className="outer-container">
        <div className="inner-container thank zigbee">
          Regards,
          <br /> Team Zigbee
        </div>
      </div>
    </div>
  );
};

Form.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  registration: state.register.registration,
});

export default connect(mapStateToProps, { register })(Form);
