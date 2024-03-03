import { ExamRepository } from "../../infrastructure/repository/exam.repository";
import { Exam } from "../entity/Exam";


export class ExamService {

	private readonly _repository: ExamRepository;

	constructor() {
		this._repository = new ExamRepository();
	}

	public async newExamTeste(newEntity: Exam): Promise<Exam | null> {

		// fake
		const newExam = new Exam();
		newExam.id = '51dcfc83-5fe5-4b27-a46b-5275b7dcb426';
		newExam.area = 'EC 1';
		newExam.title = 'AOP 1';


		return await this._repository.createExam(newExam);
	}

	public async findExam(
		id: string
	): Promise<Exam | null> {

		/*
			validations...
		*/

		return await this._repository.selectExam(id);
	}

	public async findAllExam(): Promise<Exam[]> {

		return await this._repository.selectAllExam();

	}
}
