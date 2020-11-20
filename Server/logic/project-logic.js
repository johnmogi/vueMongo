const dal = require("../db");
const Project = require("../models/Project");

dal.connectAsync()
    .then(db => console.log("We're connected to " + "Practice Db" + " on MongoDB."))
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

// function getOneProjectAsync(_id) {
//     return new Promise((resolve, reject) => {
//         Project.findOne({ _id }, (err, project) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(project);
//         });
//     });
// }

// function addProjectAsync(project) {
//     return project.save();
// }


// function updateProjectAsync(project) {
//     return new Promise((resolve, reject) => {
//         Project.updateOne({ _id: project._id }, project, (err, info) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve(info.n ? project : null); // info.n - מספר המוצרים שנמצאו
//         });
//     });
// }

// function deleteProjectAsync(_id) {
//     return new Promise((resolve, reject) => {
//         Project.deleteOne({ _id }, (err, info) => {
//             if (err) {
//                 reject(err);
//                 return;
//             }
//             resolve();
//         });
//     });
// }

// // Comparison Query Operators: 
// // $gt  - Greater Than...
// // $gte - Greater Than or Equal
// // $lt  - Less Than
// // $lte - Less Than or Equal
// // $eq  - Equal
// // $ne  - Not Equal
// // $in  - In
// // $nin - Not In

// function getProjectsByPriceRangeAsync(minPrice, maxPrice) {
//     return new Promise((resolve, reject) => {
//         Project.find({ price: { $gte: minPrice, $lte: maxPrice } }, (err, projects)=>{
//             if(err) {
//                 reject(err);
//                 return;
//             }
//             resolve(projects);
//         });
//     });
// }

module.exports = {
    getAllProjectsAsync,
    // getOneProjectAsync,
    // addProjectAsync,
    // updateProjectAsync,
    // deleteProjectAsync,
    // getProjectsByPriceRangeAsync
};