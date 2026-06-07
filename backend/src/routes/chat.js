import express
from "express";

import {
 ask
}
from "../controllers/chat.controller.js";

import {
 authenticate
}
from "../middleware/auth.middleware.js";

const router =
 express.Router();

router.post(
 "/ask",
 authenticate,
 ask
);

export default router;