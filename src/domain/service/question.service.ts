import { QuestionRepository } from "../../infrastructure/repository/question.repository";
import { Question } from "../entity/question/question.entity";
// import { ICreateQuestionDTO as CreateQuestionDTO } from "../entity/question/create-question.dto";
import NotificationContext from "../validators/notificationContext.validators";


export class QuestionService {

	private readonly _repository: QuestionRepository;

	private _contextErrors: NotificationContext;

	constructor() {
		this._repository = new QuestionRepository();
		this._contextErrors = new NotificationContext();

	}

	// public async newQuestionTeste(newEntity: CreateQuestionDTO): Promise<Question | NotificationContext> {
	// 	try {
	// 		const newQuestion = new CreateQuestionDTO(newEntity);

	// 		const validated = await newQuestion.validateAsync();
	// 		this._contextErrors.addNotification(validated);

	// 		if (!this._contextErrors.hasNotifications()) {
	// 			return await this._repository.createQuestion(newQuestion.convert());
	// 		} else {
	// 			return this._contextErrors;
	// 		}
	// 	} catch (ex) {
	// 		this._contextErrors.addNotification([`${ex}`]);
	// 		return this._contextErrors;
	// 	}
	// }

	public async findQuestion(id: string): Promise<Question | null> {
		return await this._repository.selectQuestion(id);
	}

	public async findQuestionFull(id: string): Promise<Question | NotificationContext> {
		try {
			return await this._repository.selectQuestionFull(id);


		} catch (ex) {
			this._contextErrors.addNotification([`${ex}`]);
			return this._contextErrors;
		}
	}

	public async findAllQuestions(): Promise<Question[]> {

		return await this._repository.selectAllQuestion();

	}
}
