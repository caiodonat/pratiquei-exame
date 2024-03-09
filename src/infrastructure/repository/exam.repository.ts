// import { Question } from "../../domain/entity/question/question.entity";
import { IInputCreateExamDTO } from "../../domain/entity/exam/create-exam.dto";
import { Exam } from "../../domain/entity/exam/exam.entity";
import { AppDataSource } from "../data-source";


export class ExamRepository {

	private readonly _ds = AppDataSource.getRepository(Exam);
	// private readonly _dsQuestion = AppDataSource.getRepository(Question);

	public async createExam(newEntity: IInputCreateExamDTO): Promise<Exam> {
		console.debug(newEntity);

		// if (newEntity.questions && newEntity.questions?.length > 0) {
		// 	for (let i = 0; i < newEntity.questions.length; i++) {
		// 		const questionI = newEntity.questions[i];

		// 		newEntity.questions[i] = await this._dsQuestion.save(questionI);
		// 	}
		// }
		const tt: Exam = await this._ds.save(newEntity);
		return await this._ds.findOneOrFail({
			where: {
				id: tt.id
			}
		})
	}

	public async selectExam(id: string) {
		return await this._ds.findOneBy({
			id: id
		});
	}

	public async selectExamFull(id: string): Promise<Exam> {
		return await this._ds.findOneOrFail({
			where: {
				id: id
			},
			relations: {
				questions: {
					alternatives: true
				}
			}
		});
	}

	public async selectAllExam() {
		return await this._ds.find();
	}
}
