const { Korean } = require("../models/model");
const catchAsync = require("../catchAsync");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const korean = await Korean.find();

  res.status(200).json({
    status: "success",
    length: korean.length,
    korean,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const korean = await Korean.findById(req.params.id);

  //   if (!korean) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",
    korean,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  const newBlog = await Korean.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await Korean.findByIdAndUpdate(req.params.id, req.body, {
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
  const blog = await Korean.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
