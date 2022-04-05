const { Turkish } = require("../models/model");
const catchAsync = require("../catchAsync");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const turkish = await Turkish.find();

  res.status(200).json({
    status: "success",
    length: turkish.length,
    turkish,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const turkish = await Turkish.findById(req.params.id);

  //   if (!turkish) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",
    turkish,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  const newBlog = await Turkish.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await Turkish.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

exports.deleteRecipe = catchAsync(async (req, res, next) => {
  const blog = await Turkish.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
