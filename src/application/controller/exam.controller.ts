import { Body, Controller, Get, Path, Post, /* Response as ApiResponse,  */Route, Tags, Inject, SuccessResponse } from "tsoa";
import { ExamService } from "../../domain/service/exam.service";
import { Exam } from "../../domain/entity/exam/exam.entity";
import { CreateExamDTO } from "../../domain/entity/exam/create-exam.dto";
import { Request, Response } from "express";
// import { responseCreateExam } from "src/infrastructure/dataset/exam.data";
// import { responseCreateExam } from "../../infrastructure/dataset/exam.data";
// import NotificationContext from "../../domain/validators/notificationContext.validators";

@Route("exams")
@Tags("Exam")
export class ExamController extends Controller {

	private readonly _service: ExamService;

	constructor() {
		super();
		this._service = new ExamService();
	}

	@Post("/")
	@SuccessResponse(201, 'Success')
	public async postExam(
		@Inject() req: Request,
		@Inject() res: Response,
		@Body() newEntity: CreateExamDTO
	)/* : Promise<Exam | string[]> */ {

		const result = await this._service.newExamTeste(newEntity);

		if (result instanceof Exam) {
			res.status(201).send(result);
			return result;
		} else {
			res.status(422).send(result._notifications);
			return result._notifications;
		}
	}

	@Get("/all")
	public async getAllExam(): Promise<Exam[]> {
		return await this._service.findAllExam();
	}

	@Get("/:id")
	public async getExam(
		@Path() id: string
	): Promise<Exam | null> {
		return await this._service.findExam(id);
	}

	@Get("/:id/full")
	public async getExamFull(
		@Inject() req: Request,
		@Inject() res: Response,
		@Path() id: string
	): Promise<Exam | string[]> {
		const result = await this._service.findExamFull(id);

		if (result instanceof Exam) {
			res.status(200).send(result);
			return result;
		} else {
			res.status(422).send(result._notifications);
			return result._notifications;
		}
	}
}
