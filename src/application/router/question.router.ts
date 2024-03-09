import type { Request, Response } from 'express';
import express from 'express';
import { QuestionController } from '../controller/question.controller';
// import { ICreateQuestion } from '../../domain/entity/question/create-question.dto';


const router = express.Router();
const _controller = new QuestionController();

// router.post("/", async (req: Request, res: Response) => {
// 	const body = req.body;

// 	return await _controller.postQuestion(req, res, body);
// });

router.get("/all", async (req: Request, res: Response) => {
	return res.status(200).send(
		await _controller.getAllQuestion()
	);
});

router.get("/:id/full", async (req: Request, res: Response) => {
	const id = req.params.id;

	return await _controller.getQuestionFull(req, res, id);
});

router.get("/:id", async (req: Request, res: Response) => {
	const id = req.params.id;

	return res.status(200).send(
		await _controller.getQuestion(id)
	);
});

export default router;
