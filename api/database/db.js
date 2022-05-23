const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB);

const main = async () => {
  try {
    await sequelize.sync({ force: true });
    await sequelize.authenticate();
    console.log("The connection has been stablished successfully");
  } catch (error) {
    console.log(error);
  }
};

main();

module.exports = sequelize;
