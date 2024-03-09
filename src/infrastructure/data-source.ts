import { DataSource } from "typeorm";
import { Exam } from "../domain/entity/exam/Exam";

require('dotenv').config();


export const AppDataSource = new DataSource({
	type: "postgres",
	host: process.env['DB_HOST'],
	port: 5432,
	username: process.env['DB_USERNAME'],
	password: process.env['DB_PASSWORD'],
	database: process.env['DB_DATABASE'],
	synchronize: true,
	logging: ['error'],
	entities: [Exam],
	subscribers: [],
	migrations: [],
})

AppDataSource.initialize()
	.then(() => {
		// here you can start to work with your database
	})
	.catch((error) => console.log(error))
