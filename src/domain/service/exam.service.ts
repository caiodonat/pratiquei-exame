import { ExamRepository } from "../../infrastructure/repository/exam.repository";
import { Exam } from "../entity/exam/Exam";
import { ICreateExamDTO as CreateExamDTO } from "../entity/exam/create-exam.dto";
import NotificationContext from "../validators/notificationContext.validators";


export class ExamService {

	private readonly _repository: ExamRepository;

	private _contextErrors: NotificationContext;

	constructor() {
		this._repository = new ExamRepository();
		this._contextErrors = new NotificationContext();

	}

	public async newExamTeste(newEntity: CreateExamDTO): Promise<Exam | NotificationContext> {
		try {
			const newExam = new CreateExamDTO(newEntity);

			const validated = await newExam.validateAsync();
			this._contextErrors.addNotification(validated);

			if (!this._contextErrors.hasNotifications()) {
				return await this._repository.createExam(newExam.convert());
			} else {
				return this._contextErrors;
			}
		} catch (ex) {
			return this._contextErrors;
		}
	}

	public async findExam(id: string): Promise<Exam | null> {

		return await this._repository.selectExam(id);
	}

	public async findAllExam(): Promise<Exam[]> {

		return await this._repository.selectAllExam();

	}
}
