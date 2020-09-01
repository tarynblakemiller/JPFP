const { green, red } = require("chalk");
const { db, Project, Robot } = require("./server/db");

export const anHourFromNow = new Date(Date.now() + 60 * (60 * 1000)).toString();

const robots = [
  { id: 1, name: "R2-D2", imageUrl: "/images/r2d2.png" },
  { id: 2, name: "WALL-E", imageUrl: "/images/walle.jpeg" },
  { id: 3, name: "IRON-GIANT", imageUrl: "/images/walle.jpeg" },
];

const projects = [
  { id: 1, title: "Build barn", description: "Lorem Ipsum" },
  { id: 2, title: "Discover love", completed: true, deadline: anHourFromNow },
  { id: 3, title: "Open the pod bay doors", priority: 10 },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(
      robots.map((robot) =>
        Robot.create({
          name: robot.name,
          imageUrl: robot.imageUrl,
        })
      )
    );

    await Promise.all(
      projects.map((project) =>
        Project.create({
          id: project.id,
          title: project.title,
        })
      )
    );

    // seed your database here!
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
