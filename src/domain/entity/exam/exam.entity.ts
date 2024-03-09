import { IsUUID } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from '../question/question.entity';
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
	courseDisciplineCode: string;

	/** _Questões_ */
	@OneToMany(() => Question, (question) => question.exam, { cascade: true })
	questions?: Question[]
}
