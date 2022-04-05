const { Italian } = require("../models/model");
const catchAsync = require("../catchAsync");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const italian = await Italian.find();

  res.status(200).json({
    status: "success",
    length: italian.length,
    italian,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const italian = await Italian.findById(req.params.id);

  //   if (!italian) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",
    italian,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  const newBlog = await Italian.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await Italian.findByIdAndUpdate(req.params.id, req.body, {
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
  const blog = await Italian.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
