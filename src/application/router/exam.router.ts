import type { Request, Response } from 'express';
import express from 'express';
import { ExamController } from '../controller/exam.controller';
// import { ICreateExam } from '../../domain/entity/exam/create-exam.dto';


const router = express.Router();
const _controller = new ExamController();

router.post("/", async (req: Request, res: Response) => {
	const body = req.body;

	return await _controller.postExam(req, res, body);
});

router.get("/all", async (req: Request, res: Response) => {
	return res.status(200).send(
		await _controller.getAllExam()
	);
});

router.get("/:id/full", async (req: Request, res: Response) => {
	const id = req.params.id;

	return await _controller.getExamFull(req, res, id);
});

router.get("/:id", async (req: Request, res: Response) => {
	const id = req.params.id;

	return res.status(200).send(
		await _controller.getExam(id)
	);
});

export default router;
