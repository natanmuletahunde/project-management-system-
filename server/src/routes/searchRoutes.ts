import { Router } from "express";
import { search } from "../contollers/searchController";

const router = Router();

router.get("/", search);

export default router;