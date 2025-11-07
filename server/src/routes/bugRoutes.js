import express from "express";
import {
  createBug,
  getBugs,
  getBugById,
  updateBug,
  deleteBug
} from "../controllers/bugController.js";

const router = express.Router();

// ✅ Routes
router.post("/", createBug);       // Create a bug
router.get("/", getBugs);          // Get all bugs
router.get("/:id", getBugById);    // Get one bug
router.put("/:id", updateBug);     // Update bug
router.delete("/:id", deleteBug);  // Delete bug

export default router;
