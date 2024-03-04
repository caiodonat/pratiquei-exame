import { IsUUID } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { ICreateExamDTO } from './create-exam.dto';
// import { randomUUID } from 'crypto';


@Entity()
export class Exam {

	@PrimaryGeneratedColumn("uuid")
	@IsUUID('4', {
		message: '"ID" com formato invalido'
	})
	id: string;

	/** Título */
	@Column()
	title: string;

	/** Área de estudo */
	@Column()
	area: string;

	// /** Questões */
	// questions?: {

	// }
}
