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

// // GET http://localhost:3000/api/projects/7
// router.get("/:_id", async (request, response) => {
//     try {
//         const _id = request.params._id;
//         const project = await projectsLogic.getOneProjectAsync(_id);

//         if (!project) {
//             response.sendStatus(404);
//             return;
//         }

//         response.json(project);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // POST http://localhost:3000/api/projects
// router.post("/", async (request, response) => {
//     try {
//         const project = new Project(request.body);
//         const addedProject = await projectsLogic.addProjectAsync(project);
//         response.status(201).json(addedProject);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // PUT http://localhost:3000/api/projects/7
// router.put("/:_id", async (request, response) => {
//     try {
//         const _id = request.params._id;
//         const project = new Project(request.body);
//         project._id = _id;
//         const updatedProject = await projectsLogic.updateProjectAsync(project);

//         if (updatedProject === null) {
//             response.sendStatus(404);
//             return;
//         }

//         response.json(updatedProject);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // PATCH http://localhost:3000/api/projects/7
// router.patch("/:_id", async (request, response) => {
//     try {
//         const _id = request.params._id;
//         const project = new Project(request.body);
//         project._id = _id;
//         const updatedProject = await projectsLogic.updateProjectAsync(project);

//         if (updatedProject === null) {
//             response.sendStatus(404);
//             return;
//         }

//         response.json(updatedProject);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // DELETE http://localhost:3000/api/projects/7
// router.delete("/:_id", async (request, response) => {
//     try {
//         const _id = request.params._id;
//         await projectsLogic.deleteProjectAsync(_id);
//         response.sendStatus(204);
//     }
//     catch (err) {
//         response.status(500).send(err.message);
//     }
// });

// // --------------------------------------------------
// // Queries: 
// router.get("/by-price-range/:minPrice/:maxPrice",async (request, response) => {
//     try {
//         const minPrice = +request.params.minPrice;
//         const maxPrice = +request.params.maxPrice;
//         const projects = await projectsLogic.getProjectsByPriceRangeAsync(minPrice, maxPrice);
//         response.json(projects);
//     }
//     catch(err) {
//         response.status(500).send(err.message);
//     }
// });

module.exports = router;
