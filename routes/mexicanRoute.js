const { Router } = require("express");
const express = require("express");
const mexicanCon = require("../controllers/mexicanCon");
const router = express.Router();

router.route("/").get(mexicanCon.getAllRecipes);
router.route("/").post(mexicanCon.createRecipe);

router.route("/:id").get(mexicanCon.getRecipe);
router.route("/:id").patch(mexicanCon.updateRecipe);
router.route("/:id").delete(mexicanCon.deleteRecipe);

module.exports = router;
