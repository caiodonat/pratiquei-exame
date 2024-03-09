import { Question } from "../../domain/entity/question/question.entity";
import { AppDataSource } from "../data-source";


export class QuestionRepository {

	private readonly _ds = AppDataSource.getRepository(Question);

	public async createQuestion(newEntity: Question) {
		return await this._ds.save(newEntity);
	}

	public async selectQuestion(id: string) {
		return await this._ds.findOneBy({
			id: id
		});
	}

	public async selectQuestionFull(id: string): Promise<Question> {
		return await this._ds.findOneOrFail({
			where: {
				id: id
			},
			relations: {
				alternatives: true
			}
		});
	}

	public async selectAllQuestion() {
		return await this._ds.find();
	}
}
