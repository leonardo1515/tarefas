import { DataSource } from "typeorm";
import { databaseEnv } from "../../app/envs/database.envs";

let entites = "src/app/shared/database/entities/**/*.ts";
let migrations = "src/app/shared/database/migrations/**/*.ts";

if (databaseEnv.nodeEnv !== "dev") {
  entites = "build/app/shared/database/entities/**/*.js";
  migrations = "build/app/shared/database/migrations/**/*.js";
}

let source = new DataSource({
  type: "postgres",
  port: 5432,
  host: databaseEnv.host,
  username: databaseEnv.username,
  password: databaseEnv.password,
  database: databaseEnv.database,
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,

  entities: [entites],
  migrations: [migrations],
  schema: "public",
});

export default source;
