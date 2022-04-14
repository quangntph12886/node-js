import { Router } from "express";
import { create, list, read, remove, update } from "../controller/product";
import {userAuth,roleAuth} from "../middlewares/check"
const router = Router();


router.get('/products', list);

router.get('/products/:id',read);

router.post('/products',create);

router.delete('/products/:id',userAuth,roleAuth,remove);

router.patch('/products/:id',update);

export default router;