import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Exam {

	@PrimaryGeneratedColumn("uuid")
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