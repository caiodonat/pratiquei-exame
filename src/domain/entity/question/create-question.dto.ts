import { MinLength, ValidateNested, ValidationError, validate, validateOrReject } from "class-validator";
import { QUESTION_TYPE, Question } from "./question.entity";
import { randomUUID } from "crypto";
import { Exam } from "../exam/exam.entity";
import { Type } from "class-transformer";
// import { Alternative } from "../alternative/alternative.entity";
// import { Question } from "../question/question.entity";

export interface IInputCreateQuestionDTO {

	exam?: Exam

	subject: string;

	description?: string;

	type: QUESTION_TYPE;

}


export class CreateQuestionDTO implements IInputCreateQuestionDTO {

	constructor(data: CreateQuestionDTO) {
		this.subject = data.subject;
		this.description = data.description;
		this.type = data.type;
		// this.alternative = data.alternative;
	}

	@ValidateNested()
	@Type(() => Exam)
	exam?: Exam | undefined;

	/** Enunciado */
	@MinLength(3, {
		message: '"Enunciado" deve conter mais que $constraint1 caracteres'
	})
	subject: string;

	/** Código da Disciplina */
	@MinLength(3, {
		message: '"Disciplina" deve conter mais que $constraint1 caracteres'
	})
	description: string;

	type: QUESTION_TYPE;

	// alternative?: Alternative[] | undefined;


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

	public convert(): Question {
		const newQuestion = new Question();

		newQuestion.id = randomUUID();
		newQuestion.subject = this.subject;
		newQuestion.type = this.type;
		newQuestion.description = newQuestion.description;

		// if (this.questions && this.questions?.length > 0) {
		// 	console.debug(newQuestion.questions?.length);

		// 	for (let i = 0; i < this.questions.length; i++) {
		// 		const questionI = this.questions[i];

		// 		const newQuestion = new Question();
		// 		newQuestion.description = questionI.description;
		// 		newQuestion.subject = questionI.subject;
		// 		newQuestion.type = questionI.type;

		// 		newQuestion.questions.push(newQuestion);
		// 	}
		// }

		return newQuestion;
	}
}
