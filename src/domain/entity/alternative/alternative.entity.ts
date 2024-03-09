import { IsUUID } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "../question/question.entity";

@Entity()
export class Alternative {

	@PrimaryGeneratedColumn("uuid")
	@IsUUID('4', {
		message: '"ID" com formato invalido'
	})
	id: string;

	@ManyToOne(() => Question, (question) => question.alternatives)
	question?: Question

	/** Enunciado da _Questão_ */
	@Column()
	subject: string;

	/** Alternativa é correta ? */
	@Column()
	isCorrect: boolean;

}
