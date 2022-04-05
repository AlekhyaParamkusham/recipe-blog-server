const { Router } = require("express");
const express = require("express");
const americanCon = require("../controllers/americanCon");
const router = express.Router();

router.route("/").get(americanCon.getAllRecipes);
router.route("/").post(americanCon.createRecipe);

router.route("/:id").get(americanCon.getRecipe);
router.route("/:id").patch(americanCon.updateRecipe);
router.route("/:id").delete(americanCon.deleteRecipe);

module.exports = router;
