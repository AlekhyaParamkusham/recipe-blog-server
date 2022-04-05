const { Router } = require("express");
const express = require("express");
const koreanCon = require("../controllers/koreanCon");
const router = express.Router();

router.route("/").get(koreanCon.getAllRecipes);
router.route("/").post(koreanCon.createRecipe);

router.route("/:id").get(koreanCon.getRecipe);
router.route("/:id").patch(koreanCon.updateRecipe);
router.route("/:id").delete(koreanCon.deleteRecipe);

module.exports = router;
