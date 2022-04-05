const { French } = require("../models/model");
const catchAsync = require("../catchAsync");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const french = await French.find();

  res.status(200).json({
    status: "success",
    length: french.length,
    french,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const french = await French.findById(req.params.id);

  //   if (!french) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",
    french,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  const newBlog = await French.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await French.findByIdAndUpdate(req.params.id, req.body, {
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
  const blog = await French.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
