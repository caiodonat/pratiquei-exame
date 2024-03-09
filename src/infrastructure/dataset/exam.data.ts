import { Exam } from "src/domain/entity/exam/exam.entity";
import { IInputCreateExamDTO } from "src/domain/entity/exam/create-exam.dto";
import { QUESTION_TYPE } from "src/domain/entity/question/question.entity";


export const requestCreateExam: IInputCreateExamDTO = {
	"title": "Exame 1",
	"courseDisciplineCode": "FSI",
	"questions": [
		{
			"subject": "Questão 1",
			"description": "",
			"type": QUESTION_TYPE.MULTIPLE_SINGLE,
			// "alternatives": [
			// 	{
			// 		"id": "",
			// 		"subject": "Questão 1 / Alternativa 1",
			// 		"isCorrect": true
			// 	}
			// ]
		}
	]
}

export const responseCreateExam: Exam = {
	"id": "118a44bd-6104-4647-b676-6014012ab886",
	"title": "Titulo 01",
	"courseDisciplineCode": "Área 01"
}