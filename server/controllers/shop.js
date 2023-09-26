import shop from "../models/shop.js";
import mongoose from "mongoose"

export const getList = async (req, res) => {
    const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit;
  try {
    const shopLists = await shop.find().skip(skip).limit(limit);
    const response = { page, limit, data: shopLists };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getListById = async (req, res) => {
    const id = req.params.id;
  try {
    const shopList = await shop.findById(id);
    res.status(200).json(shopList);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const createShoplist = async (req, res) => {
    const shopList = req.body;
    const newShopList = new shop({ ...shopList});
    try {
      await newShopList.save();
      res.status(201).json(newShopList);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };

  
export const updateList = async (req, res) => {
    const { id } = req.params;
    const listCourse = req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No product with that id");
    try {
      const updateShopList = await shop.findByIdAndUpdate(id, listCourse, { new: true });
      res.status(200).json(updateShopList);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



  export const deleteShopList = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No shopList with that id");
    try {
      await shop.findByIdAndDelete(id);
      res.status(200).json({ message: "shopList deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
