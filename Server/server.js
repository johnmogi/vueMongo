const express = require("express");
const cors = require("cors");
const projectsController = require("./controllers/project-ctrl");
const server = express();

server.use(cors());
server.use(express.json());
server.use("/api/projects", projectsController);

server.listen(3000, () => console.log("Listening on http://localhost:3000"));