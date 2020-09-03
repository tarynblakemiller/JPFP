const router = require("express").Router();
const Robot = require("../db/robot");
const Project = require("../db/project");

router.get("/", async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.json(robots);
  } catch (err) {
    next(err);
  }
});

router.get("/robots/:robotId", async (req, res, next) => {
  try {
    const id = req.params.robotId;
    const robot = await Robot.findByPk(id, {
      include: [Project],
    });
    if (robot) {
      return res.json(robot);
    }
    return res.status(404).send("Robot does not exist");
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
