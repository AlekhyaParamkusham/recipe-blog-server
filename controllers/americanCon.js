const { American } = require("../models/model");
const catchAsync = require("../catchAsync");
const { reset } = require("nodemon");

exports.getAllRecipes = catchAsync(async (req, res, next) => {
  const american = await American.find();

  res.status(200).json({
    status: "success",
    length: american.length,
    american,
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  const american = await American.findById(req.params.id);

  //   if (!american) {
  //     return next(new AppError("No tour found with that ID", 404));
  //   }

  res.status(200).json({
    status: "success",

    american,
  });
});

exports.createRecipe = catchAsync(async (req, res, next) => {
  // console.log(res.body);
  const newBlog = await American.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateRecipe = catchAsync(async (req, res, next) => {
  const blog = await American.findByIdAndUpdate(req.params.id, req.body, {
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
  const blog = await American.findByIdAndDelete(req.params.id);

  // if (!tour) {
  //   return next(new AppError("No tour found with that ID", 404));
  // }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
