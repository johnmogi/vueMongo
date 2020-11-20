0. setup: 
mkdir Server
touch app.js
npm init-y
npm i cors joi mongoose express

0. folder naming convention- NEW:
app.js --> server.js
data-access-layer/dal.js --> db.js
buisness-logic-layer --> logic/project-logic.js
controllers/project-controller.js --> ctrl/project-ctrl.js

0. touch dal.js:
const mongoose = require("mongoose");
function connectAsync() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://localhost:27017/practice",
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, mongo) => {
                if(err) {
                    reject(err);
                    return;
                }
                resolve(mongo);
            });
    });
}
module.exports = {
    connectAsync
};

0. models/project-model.js:
const mongoose = require("mongoose");
// Create Schema of a Project - מה יש במוצר אחד
const ProjectSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Number
}, { versionKey: false }); // versionKey: false - לא להוסיף פרמטר נוסף עבור גרסה
// Create a Project Model: 
const Project = mongoose.model("Project", ProjectSchema, "projects"); // Model Name, Schema, Collection
module.exports = Project;

0. logic/project-logic.js: 
const dal = require("../db");
const Project = require("../models/Project");
dal.connectAsync()
    .then(db => console.log("We're connected to " + db.name + " on MongoDB."))
    .catch(err => console.log(err));
function getAllProjectsAsync() {
    return new Promise((resolve, reject) => {
        Project.find({}, (err, projects) => { // {} = החזר את כל המוצרים
            if (err) {
                reject(err);
                return;
            }
            resolve(projects);
        });
    });
}
module.exports = {
    getAllProjectsAsync
}

0. controllers/project-ctrl.js:
const express = require("express");
const projectsLogic = require("../logic/project-logic");
const Project = require("../models/Project");
const router = express.Router();
// GET http://localhost:3000/api/projects
router.get("/", async (request, response) => {
    try {
        const projects = await projectsLogic.getAllProjectsAsync();
        response.json(projects);
    }
    catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
});
module.exports = router;

0. server.js:
const express = require("express");
const cors = require("cors");
const projectsController = require("./controllers/project-ctrl");
const server = express();
server.use(cors());
server.use(express.json());
server.use("/api/projects", projectsController);
server.listen(3000, () => console.log("Listening on http://localhost:3000"));

0. 