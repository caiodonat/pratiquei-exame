import { MinLength, ValidationError, validate, validateOrReject } from "class-validator";
import { Exam } from "./Exam";
import { randomUUID } from "crypto";

// interface IValidatedResult {
// 	success: boolean;
// 	error: string[];
// }
export interface IInputCreateExamDTO {
	title: string;
	area: string;
}


export class ICreateExamDTO implements IInputCreateExamDTO {

	constructor(data: ICreateExamDTO) {
		this.title = data.title;
		this.area = data.area;
	}

	/** Título */
	@MinLength(3, {
		message: '"Título" deve ser maior que $constraint1'
	})
	title: string;

	/** Área de estudo */
	@MinLength(3, {
		message: '"Área de estudo" deve ser maior que $constraint1'
	})
	area: string;


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

	public convert(): Exam {
		const newExam = new Exam();

		newExam.id = randomUUID();
		newExam.title = this.title;
		newExam.area = this.area;

		return newExam;
	}
}
