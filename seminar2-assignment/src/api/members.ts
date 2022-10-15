import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

const members = [{
    name: "권세훈",
    group: "ob",
},
{
    name: "박수린",
    group: "yb",
},
{
    name: "남지윤",
    group: "ob",
},
{
    name: "김혜수",
    group: "ob",
},
{
    name: "이종현",
    group: "ob",
}]

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    members
  });
});

module.exports = router;