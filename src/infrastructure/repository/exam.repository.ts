import { Exam } from "../../domain/entity/Exam";
import { AppDataSource } from "../data-source";


export class ExamRepository {

	private readonly _ds = AppDataSource.getRepository(Exam);

	public async createExam(newEntity: Exam) {
		return await this._ds.save(newEntity);
	}

	public async selectExam(id: string) {

		return await this._ds.findOneBy({
			id: id
		});
	}

	public async selectAllExam() {
		return await this._ds.find();
	}


}
