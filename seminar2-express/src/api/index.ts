import express, { Router } from "express";

const router: Router = express.Router(); // express의 라우팅 시스템을 받아올 것이다.

router.use("/user", require("./user"));

module.exports = router;