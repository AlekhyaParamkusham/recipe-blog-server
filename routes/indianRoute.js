const { Router } = require("express");
const express = require("express");
const indianCon = require("../controllers/indianCon");
const router = express.Router();

router.route("/").get(indianCon.getAllRecipes);
router.route("/").post(indianCon.createRecipe);

router.route("/:id").get(indianCon.getRecipe);
router.route("/:id").patch(indianCon.updateRecipe);
router.route("/:id").delete(indianCon.deleteRecipe);

module.exports = router;
