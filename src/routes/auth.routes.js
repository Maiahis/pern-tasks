import {Router} from "express";
import { signin, signup, signout, getProfile } from "../controllers/auth.controllers.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", getProfile);

export default router;