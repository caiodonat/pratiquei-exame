import { IsUUID } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Alternative } from "../alternative/alternative.entity";
import { Exam } from "../exam/exam.entity";

export enum QUESTION_TYPE {

	/** Múltipla escolha com apenas uma resposta */
	'MULTIPLE_SINGLE' = 'MULTIPLE_SINGLE',

	/** Múltipla escolha com varias respostas */
	'MULTIPLE_MANY' = 'MULTIPLE_MANY',

	/** Discursiva */
	'DISCURSIVE' = 'DISCURSIVE',

	/** Informativo */
	'TEXT' = 'TEXT'
}

@Entity()
export class Question {

	@PrimaryGeneratedColumn("uuid")
	@IsUUID('4', {
		message: '"ID" com formato invalido'
	})
	id: string;

	@ManyToOne(() => Exam, (Exam) => Exam.questions)
	exam?: Exam

	/** Enunciado da _Questão_ */
	@Column()
	subject: string;

	/** Descrição da _Questão_ */
	@Column()
	description?: string;

	/** Tipos de _Questão_ */
	@Column()
	type: QUESTION_TYPE;

	/** _Alternativas da Questão_ */
	@OneToMany(() => Alternative, (alternative) => alternative.question, { cascade: true })
	alternatives?: Alternative[]
}
