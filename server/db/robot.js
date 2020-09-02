const Sequelize = require("sequelize");
const db = require("./database");

//robot models

const Robot = db.define("robot", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  fuelType: {
    type: Sequelize.ENUM({ values: ["gas", "diesel", "electric"] }),
    defaultValue: "electric",
  },
  fuelLevel: {
    type: Sequelize.FLOAT,
    defaultValue: 100,
    validate: {
      min: 0,
      max: 100,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://www.indiewire.com/wp-content/uploads/2017/07/screen-shot-2017-07-22-at-12-17-05-pm.png?resize=800,531",
  },
});

module.exports = Robot;
