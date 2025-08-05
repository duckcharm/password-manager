import { Sequelize } from "sequelize-typescript";
import { basename, equalsIgnoreCase } from "./utils";

export const sequelize = new Sequelize(process.env.DB_URL!, {
  dialect: "postgres",
  models: [__dirname + "/models"],
  modelMatch: (filename, member) => {
    return equalsIgnoreCase(basename(filename), member);
  },
  logging: false,
});

export async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
