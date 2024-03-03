import type { Request, Response } from 'express';
import express from 'express';
import { ExamController } from '../controller/exam.controller';
import { Exam } from '../../domain/entity/Exam';


const router = express.Router();
const _controller = new ExamController();

router.get("/post", async (req: Request, res: Response) => {
	const body: Exam = req.body;

	return res.status(200).send(
		await _controller.postExam(body)
	);
});

router.get("/all", async (req: Request, res: Response) => {
	return res.status(200).send(
		await _controller.getAllExam()
	);
});

router.get("/:id", async (req: Request, res: Response) => {
	const id = req.params.id;

	return res.status(200).send(
		await _controller.getExam(id)
	);
});

export default router;
