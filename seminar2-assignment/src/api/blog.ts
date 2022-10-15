import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "blog 라우터지렁이",
  });
});

module.exports = router;