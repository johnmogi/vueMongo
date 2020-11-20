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