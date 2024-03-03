import { Controller, Get, Route } from "tsoa";
import { ExamService } from "../../domain/service/exam.service";
import { Exam } from "../../domain/entity/Exam";

@Route("exam")
export class ExamController extends Controller {

	private readonly _service: ExamService;

	constructor() {
		super();
		this._service = new ExamService();
	}

	@Get("/post")
	public async postExam(newEntity: Exam): Promise<Exam | null> {
		return await this._service.newExamTeste(newEntity);
	}

	@Get("/all")
	public async getAllExam(): Promise<Exam[]> {
		return await this._service.findAllExam();
	}

	@Get("/:id")
	public async getExam(id: string): Promise<Exam | null> {
		return await this._service.findExam(id);
	}
}
