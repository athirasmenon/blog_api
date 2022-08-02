import { createConnection } from "typeorm";
import entities from "./entity";

import * as dotenv from "dotenv";

const { Blog } = entities;

dotenv.config();

const { DB_USER_DEV, DB_PASSWORD_DEV, DB_NAME_DEV, DB_HOST_DEV } = process.env;


class DBConfig {
  /**
   * @constructor
   * @since 0.001
   *
   * @param {}
   */
  constructor() {
    this.dbConfig();
  }

  /**
   * @param {}
   * @returns createConnection
   */
  dbConfig = () => {
    // console.log("Database config initiated...");
    return createConnection({
      type: "mysql",
      database: DB_NAME_DEV,
      username: DB_USER_DEV,
      password: DB_PASSWORD_DEV,
      host: DB_HOST_DEV,
      port: 3306,
      entities: [Blog],
      logging: false,
      synchronize: true,
    });
  };
}

export default DBConfig;