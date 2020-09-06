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

router.post("/", async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);
    res.send(newProject);
  } catch (error) {
    next(error);
  }
});

router.put("/:projectId", async (req, res, next) => {
  try {
    const editProject = await Project.findById(req.params.id);
    res.send(await editProject.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/projectId", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Project.destory({
      where: {
        id: id,
      },
    });
    res.status(204).send(Robots.findById(id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
