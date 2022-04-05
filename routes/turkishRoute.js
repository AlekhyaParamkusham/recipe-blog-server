const { Router } = require("express");
const express = require("express");
const turkishCon = require("../controllers/turkishCon");
const router = express.Router();

router.route("/").get(turkishCon.getAllRecipes);
router.route("/").post(turkishCon.createRecipe);

router.route("/:id").get(turkishCon.getRecipe);
router.route("/:id").patch(turkishCon.updateRecipe);
router.route("/:id").delete(turkishCon.deleteRecipe);

module.exports = router;
