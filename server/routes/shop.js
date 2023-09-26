import { getList, getListById,
     createShoplist, deleteShopList,
      updateList} from "../controllers/shop.js"
import express from "express"

const router = express.Router();

router.get('/listCourse', getList);
router.get("/:id", getListById)
router.post("/", createShoplist);
router.patch('/update/:id', updateList)
router.delete('/delete/:id', deleteShopList)

export default router