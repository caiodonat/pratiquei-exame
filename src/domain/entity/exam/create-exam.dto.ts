import { MinLength, ValidateNested, ValidationError, validate, validateOrReject } from "class-validator";
import { Exam } from "./exam.entity";
import { randomUUID } from "crypto";
// import { Question } from "../question/question.entity";
import { CreateQuestionDTO, IInputCreateQuestionDTO } from "../question/create-question.dto";
import { Type } from "class-transformer";

export interface IInputCreateExamDTO {

	title: string;

	courseDisciplineCode: string;

	questions?: IInputCreateQuestionDTO[];
}


export class CreateExamDTO implements IInputCreateExamDTO {

	constructor(data: CreateExamDTO) {
		this.title = data.title;
		this.courseDisciplineCode = data.courseDisciplineCode;
		this.questions = data.questions;
	}

	/** Título */
	@MinLength(3, {
		message: '"Título" deve ser maior que $constraint1'
	})
	title: string;

	/** Código da Disciplina */
	@MinLength(3, {
		message: '"Disciplina" deve ser maior que $constraint1'
	})
	courseDisciplineCode: string;

	@ValidateNested({ each: true })
	@Type(() => CreateQuestionDTO)
	questions?: CreateQuestionDTO[] | undefined;


	public validate(): string[] {
		let result: string[] = [];

		validate(this).then(errors => {

			if (errors.length > 0) {
				console.log('validation failed. errors: ', errors);
				result = this.prettifyErrors(errors);
			} else {
				console.log('validation succeed');
			}
		});

		return result;
	}

	public async validateAsync(): Promise<string[]> {
		let result: string[] = [];

		try {
			await validateOrReject(this);
		} catch (ex) {
			console.warn(ex);
			result = this.prettifyErrors(ex as ValidationError[]);
		}

		return result;
	}

	private prettifyErrors(validationErros: ValidationError[]): string[] {
		let errors: any[] = [];

		for (let i = 0; i < validationErros.length; i++) {
			const validationErrosI = validationErros[i].constraints;

			for (let key in validationErrosI) {

				errors.push(validationErrosI[key]);
			}
		}
		return errors;
	}

	public convert(): Exam {
		const newExam = new Exam();

		newExam.id = randomUUID();
		newExam.title = this.title;
		newExam.courseDisciplineCode = this.courseDisciplineCode;
		newExam.questions = newExam.questions;

		// if (this.questions && this.questions?.length > 0) {
		// 	console.debug(newExam.questions?.length);

		// 	for (let i = 0; i < this.questions.length; i++) {
		// 		const questionI = this.questions[i];

		// 		const newQuestion = new Question();
		// 		newQuestion.description = questionI.description;
		// 		newQuestion.subject = questionI.subject;
		// 		newQuestion.type = questionI.type;

		// 		newExam.questions.push(newQuestion);
		// 	}
		// }

		return newExam;
	}
}
