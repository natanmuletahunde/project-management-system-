import { Router } from "express";

import { getUser, getUsers, postUser } from "../contollers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/:cognitoId", getUser);

export default router;