import { DataSource } from "typeorm";
import { Exam } from "../domain/entity/Exam";

export const AppDataSource = new DataSource({
	type: "postgres",
	host: "db",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "postgres",
	synchronize: true,
	logging: true,
	entities: [Exam],
	subscribers: [],
	migrations: [],
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))
