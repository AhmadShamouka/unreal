const express = require("express");
const cors = require("cors");
const { spawn } = require("child_process");

const app = express();
app.use(cors());

app.get("/runPython", (req, res) => {
  const python = spawn("python", ["../../augmentedreality/main.py"]);
  python.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
    res.send(data.toString());
  });
  python.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
});

app.listen(4000, () => console.log("Server running on port 4000"));
