const path = require("path");
const express = require("express");
const connectDB = require("./server/config/db");
const { check, validationResult } = require("express-validator");
const Feedback = require("./server/models/feedback");
const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/api", async (req, res) => {
  res.send("API RUNNING");
});
app.get("/api/getdata", async(req,res) => {
  let details = await Feedback.find()
  res.send(details)
})

app.post(
  "/api/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("usn", "USN is required").not().isEmpty(),
    check("email", "Email is required").not().isEmpty(),
    check("branch", "Branch is required").not().isEmpty(),
    check("semester", "Semester is required").not().isEmpty(),
    check("rating", "Rating is required").not().isEmpty(),
    check("feedback", "Feedback is required").not().isEmpty(),
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
      branch,
      semester,
      rating,
      feedback,
      suggestion
    } = req.body;
    try {
      let detail = await Feedback.findOne({ usn });
      if (detail) {
        return res
          .status(400)
          .json({
            errors: [
              {
                msg: "Response already submitted. If done by mistake contact the Zigbee Team.",
              },
            ],
          });
      }
      detail = new Feedback({
        name,
        usn,
        email,
        branch,
        semester,
        rating,
        feedback,
        suggestion
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
