import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME || "default_db_name",
  process.env.DB_USER || "default_db_user",
  process.env.DB_PASSWORD || "default_db_password",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres" // or mysql, sqlite, etc.
  }
);

module.exports = sequelize;
