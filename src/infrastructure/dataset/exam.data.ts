import { Exam } from "src/domain/entity/exam/Exam";
import { IInputCreateExamDTO } from "src/domain/entity/exam/create-exam.dto";

export const requestCreateExam: IInputCreateExamDTO = {
	"title": "string",
	"area": "string"
}

export const responseCreateExam: Exam = {
	"id": "118a44bd-6104-4647-b676-6014012ab886",
	"title": "Titulo 01",
	"area": "Área 01"
}