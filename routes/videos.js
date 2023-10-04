import { Router } from "express";
import { postCreateVideo } from "../controllers/videos.js";

const videosRouter = Router();

videosRouter.post("/", postCreateVideo);

export default videosRouter;