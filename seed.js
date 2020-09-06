const { green, red } = require("chalk");
const { db, Project, Robot } = require("./server/db");

const anHourFromNow = new Date(Date.now() + 60 * (60 * 1000)).toString();

const robots = [
  {
    id: 1,
    name: "R2-D2",
    imageUrl:
      "https://www.sideshow.com/storage/product-images/400155/r2-d2_star-wars_feature.jpg",
  },
  {
    id: 2,
    name: "WALL-E",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/I/417h1G2gbJL._AC_.jpg",
  },
  {
    id: 3,
    name: "IRON-GIANT",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTQ5NTM4NTY5MV5BMl5BanBnXkFtZTgwOTg2Mzc2NjE@._V1_UX477_CR0,0,477,268_AL_.jpg",
  },
];

const projects = [
  { id: 1, title: "Build barn", description: "Lorem Ipsum" },
  { id: 2, title: "Discover love", completed: true, deadline: anHourFromNow },
  { id: 3, title: "Open the pod bay doors", priority: 10 },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    const employees = await Promise.all(
      robots.map((robot) =>
        Robot.create({
          name: robot.name,
          imageUrl: robot.imageUrl,
        })
      )
    );

    const assignments = await Promise.all(
      projects.map((project) =>
        Project.create({
          id: project.id,
          title: project.title,
        })
      )
    );

    await employees[0].addProject(assignments[0]);
    await employees[1].addProject(assignments[1]);

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
