import Article from "../models/articles.js";
import mongoose from "mongoose"

export const getArticle = async (req, res) => {
    const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  try {
    const articleLists = await Article.find().skip(skip).limit(limit);
    const response = { page, limit, data: articleLists };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getArticleById = async (req, res) => {
    const id = req.params.id;
  try {
    const oneArticle = await Article.findById(id);
    res.status(200).json(oneArticle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const createArticle = async (req, res) => {
    const article = req.body;
    const newArticle = new Article({ ...article });
    try {
      await newArticle.save();
      res.status(201).json(newArticle);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  
export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const article = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No article with that id");
    try {
      const updateArticle = await Article.findByIdAndUpdate(id, article, { new: true });
      res.status(200).json(updateArticle);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  export const deleteArticle = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No article with that id");
    try {
      await Article.findByIdAndDelete(id);
      res.status(200).json({ message: "article deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
