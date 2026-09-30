import Router from "express-promise-router";
import { signin, signup, signout, getProfile } from "../controllers/auth.controllers.js";
import { isAuth } from "../middlewares/auth.middlewares.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", signup);

router.post("/signout", signout);

router.get("/profile", isAuth, getProfile);

export default router;