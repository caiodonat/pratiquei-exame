import { IExam } from "../../domain/model/exam.model";

export class ExamRepository {


	public async selectExam(id: string): Promise<IExam> {

		const dbResult: IExam = {
			// id: id,
			title: 'AOP 1',
			area: 'EC 1'
		}

		return await dbResult;

	}


}
