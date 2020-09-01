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
    defaultValue: "../public/irongiant.png",
  },
});

module.exports = Robot;
