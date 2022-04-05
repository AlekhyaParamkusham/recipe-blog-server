const { Indian } = require("../models/model");
const catchAsync = require("../catchAsync");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const indian = await Indian.find();

  res.status(200).json({
    status: "success",
    length: indian.length,
    indian,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const indian = await Indian.findById(req.params.id);

  //   if (!indian) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",
    indian,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  const newBlog = await Indian.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await Indian.findByIdAndUpdate(req.params.id, req.body, {
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
  const blog = await Indian.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
