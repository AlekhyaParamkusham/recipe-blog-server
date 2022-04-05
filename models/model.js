const mongoose = require("mongoose");
const data = () => ({
  title: {
    type: String,
    required: [true, "Please provide a title!"],
    unique: [true, "Title needs to be unique"],
  },
  imageUrl: { type: String },
  ingredients: { type: [String], required: true },
  directions: { type: [String], required: true },
  yields: { type: String, required: true },
  prepTime: { type: String, required: true },
  totalTime: { type: String, required: true },
});

const italianSchema = new mongoose.Schema(data());
const Italian = mongoose.model("Italian", italianSchema);

const indianSchema = new mongoose.Schema(data());
const Indian = mongoose.model("Indian", indianSchema);

const mexicanSchema = new mongoose.Schema(data());
const Mexican = mongoose.model("Mexican", mexicanSchema);

const frenchSchema = new mongoose.Schema(data());
const French = mongoose.model("French", frenchSchema);

const turkishSchema = new mongoose.Schema(data());
const Turkish = mongoose.model("Turkish", turkishSchema);

const americanSchema = new mongoose.Schema(data());
const American = mongoose.model("American", americanSchema);

const koreanSchema = new mongoose.Schema(data());
const Korean = mongoose.model("Korean", koreanSchema);

module.exports = {
  Italian,
  Indian,
  Mexican,
  French,
  Turkish,
  American,
  Korean,
};
