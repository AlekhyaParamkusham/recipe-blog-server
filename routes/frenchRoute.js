const { Router } = require("express");
const express = require("express");
const frenchCon = require("../controllers/frenchCon");
const router = express.Router();

router.route("/").get(frenchCon.getAllRecipes);
router.route("/").post(frenchCon.createRecipe);

router.route("/:id").get(frenchCon.getRecipe);
router.route("/:id").patch(frenchCon.updateRecipe);
router.route("/:id").delete(frenchCon.deleteRecipe);

module.exports = router;
