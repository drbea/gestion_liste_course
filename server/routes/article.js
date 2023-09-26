import { getArticle, getArticleById,
createArticle, updateArticle,
deleteArticle } from "../controllers/article.js";
import express from "express"

const router = express.Router();

router.get('/listCourse', getArticle);
router.get("/:id", getArticleById);
router.post("/", createArticle);
router.patch('/update/:id', updateArticle);
router.delete('/delete/:id', deleteArticle)

export default router