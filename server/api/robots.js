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

router.get("/:robotId", async (req, res, next) => {
  try {
    const robotId = req.params.id;
    const robot = await Robot.findOne({
      where: { id: id },
      include: [{ model: Project }],
    });
    if (robot) {
      return res.json({ robot });
    }
    return res.status(404).send("Robot does not exist");
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
