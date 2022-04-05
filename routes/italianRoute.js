const { Router } = require("express");
const express = require("express");
const italianCon = require("../controllers/italianCon");
const router = express.Router();

router.route("/").get(italianCon.getAllRecipes);
router.route("/").post(italianCon.createRecipe);

router.route("/:id").get(italianCon.getRecipe);
router.route("/:id").patch(italianCon.updateRecipe);
router.route("/:id").delete(italianCon.deleteRecipe);

module.exports = router;
