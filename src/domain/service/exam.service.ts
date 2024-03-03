import { ExamRepository } from "../../infrastructure/repository/exam.repository";
import { IExam } from "../model/exam.model"


export class ExamService {

	private readonly _repository: ExamRepository;

	constructor() {
		this._repository = new ExamRepository();
	}

	public async findExam(
		id: string
	): Promise<IExam> {

		/*
			validations...
		*/

		return await this._repository.selectExam(id);

	}
}
