const router = require("express").Router();
const Project = require("../db/project");
const Robot = require("../db/robot");

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/:projectId", async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.projectId, {
      include: [Robot, { model: Robot }],
    });
    res.json(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
