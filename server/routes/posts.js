import express from "express";
const router = express.Router();
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controller/posts.js";

router.get("/", getPosts);
router.post("/", createPost);
router.patch("/:id", updatePost); //id me asli id hai api wale page se axios.patch(`${url}/${id}`,
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
