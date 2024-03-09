import { /* Body, */ Controller, Get, Path, /* Post, */ /* Response as ApiResponse,  */Route, Tags, Inject/* , SuccessResponse */ } from "tsoa";
import { QuestionService } from "../../domain/service/question.service";
import { Question } from "../../domain/entity/question/question.entity";
// import { ICreateQuestionDTO } from "../../domain/entity/question/create-question.dto";
import { Request, Response } from "express";
// import { responseCreateQuestion } from "src/infrastructure/dataset/question.data";
// import { responseCreateQuestion } from "../../infrastructure/dataset/question.data";
// import NotificationContext from "../../domain/validators/notificationContext.validators";

@Route("questions")
@Tags("Question")
export class QuestionController extends Controller {

	private readonly _service: QuestionService;

	constructor() {
		super();
		this._service = new QuestionService();
	}

	// @Post("/")
	// @SuccessResponse(201, 'Success')
	// public async postQuestion(
	// 	@Inject() req: Request,
	// 	@Inject() res: Response,
	// 	@Body() newEntity: ICreateQuestionDTO
	// )/* : Promise<Question | string[]> */ {

	// 	const result = await this._service.newQuestionTeste(newEntity);

	// 	if (result instanceof Question) {
	// 		res.status(201).send(result);
	// 		return result;
	// 	} else {
	// 		res.status(422).send(result._notifications);
	// 		return result._notifications;
	// 	}
	// }

	@Get("/all")
	public async getAllQuestion(): Promise<Question[]> {
		return await this._service.findAllQuestions();
	}

	@Get("/:id")
	public async getQuestion(
		@Path() id: string
	): Promise<Question | null> {
		return await this._service.findQuestion(id);
	}

	@Get("/:id/full")
	public async getQuestionFull(
		@Inject() req: Request,
		@Inject() res: Response,
		@Path() id: string
	): Promise<Question | string[]> {
		const result = await this._service.findQuestionFull(id);

		if (result instanceof Question) {
			res.status(200).send(result);
			return result;
		} else {
			res.status(422).send(result._notifications);
			return result._notifications;
		}
	}
}
