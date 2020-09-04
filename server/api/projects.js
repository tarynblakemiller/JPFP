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
    const id = req.params.projectId;
    const project = await Project.findByPk(id, {
      include: [Robot],
    });
    if (project) {
      return res.json(project);
    }
    return res.status(404).send("Project does not exist");
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
