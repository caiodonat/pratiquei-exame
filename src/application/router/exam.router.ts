import type { Request, Response } from 'express';
import express from 'express';

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
	return res.status(200).send({
		exame: 'e'
	})
});

export default router;