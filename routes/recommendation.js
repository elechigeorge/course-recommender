import express from "express";
import { makeRecommendation } from "../controller/recommendation.js";

import { protect } from "../middleware/authentication.js";

const router = express.Router();

// ROUTES DEFINITION
router.route("/").post(protect, makeRecommendation);

export default router;
