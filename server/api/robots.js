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

router.delete("/:robotId", async (req, res, next) => {
  try {
    const id = req.params.robotId;
    const robot = await Robot.findByPk(id, {
      where: {
        id: id,
      },
    });
    await robot.destroy();
    res.send(204);
  } catch (error) {
    next(error);
  }
});

router.get("/:robotId", async (req, res, next) => {
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

router.post("/", async (req, res, next) => {
  try {
    const newRobot = await Robot.create(req.body);
    res.send(newRobot);
  } catch (error) {
    next(error);
  }
});

router.put("/robotId", async (req, res, next) => {
  try {
    const updateRobot = await Robot.findById(req.params.id);
    res.send(await updateRobot.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
