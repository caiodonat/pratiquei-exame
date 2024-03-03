import type { Request, Response } from 'express';
import express from 'express';
import { ExamService } from '../../domain/service/exam.service';


const router = express.Router();
const _service = new ExamService();

router.get("/post", async (req: Request, res: Response) => {
	return res.status(200).send(
		await _service.newExamTeste()
	)
});

router.get("/all", async (req: Request, res: Response) => {

	return res.status(200).send(
		await _service.findAllExam()
	)
});

router.get("/:id", async (req: Request, res: Response) => {
	const id = req.params.id;

	return res.status(200).send(
		await _service.findExam(id)
	)
});

export default router;