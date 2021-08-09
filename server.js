const path = require("path");
const express = require("express");
const connectDB = require("./server/config/db");
const { check, validationResult } = require("express-validator");
const Detail = require("./server/models/details");
const { defaultMaxListeners } = require("stream");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/api", async (req, res) => {
  res.send("API RUNNING");
});

app.post(
  "/api/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("usn", "USN is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("phone", "Phone Number is required").not().isEmpty(),
    check("branch", "Branch is required").not().isEmpty(),
    check("semester", "Semester is required").not().isEmpty(),
    check("ques1", "Answering the questions is necessary").not().isEmpty(),
    check("ques2", "Answering the questions is necessary").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      name,
      usn,
      email,
      phone,
      branch,
      semester,
      ques1,
      ques2,
    } = req.body;
    try {
      let detail = await Detail.findOne({ usn });
      if (detail) {
        return res
          .status(400)
          .json({
            errors: [
              {
                msg: "Response already submitted. If done by mistake contact the administrator",
              },
            ],
          });
      }
      detail = new Detail({
        name,
        usn,
        email,
        phone,
        branch,
        semester,
        ques1,
        ques2,
      });
      await detail.save();
      res.json({ msg: "Response Successfully recorded" });
    } catch (err) {
      console.error(err.message + "\n" + err);
      res.status(500).send("Server error");
    }
  }
);

app.use(express.static(path.join(__dirname, "build")));
//app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
