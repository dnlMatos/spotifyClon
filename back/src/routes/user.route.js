// import { Router } from "express";
// import { protectRoute } from "../middleware/auth.middleware.js";
// import { getAllUsers, getMessages } from "../controller/user.controller.js";

// // Define rotas para o endpoint de usuários
// const router = Router();

// router.get("/", protectRoute, getAllUsers);
// router.get("/messages/:userId", protectRoute, getMessages);

// export default router;

import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";

const router = Router();

router.get("/", protectRoute, getAllUsers);

//get all messages
export default router;
