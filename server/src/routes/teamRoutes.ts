import { Router } from "express";

import { getTeams } from "../contollers/teamController";

const router = Router();

router.get("/", getTeams);

export default router;