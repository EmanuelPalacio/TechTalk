import express from "express";
import { login, register } from "../controllers/auth.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Rutas de prueba solamente
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user, you are logged IN")
})

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user, you are logged IN and you can DELETE register")
})

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello user ADMIN, you are logged IN")
})
// fin rutas de prueba

router.post("/register", register);
router.post("/login", login);


export default router;
