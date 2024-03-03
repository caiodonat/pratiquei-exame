import express, {Request, Response} from "express";
import swaggerUi from "swagger-ui-express";
import exam from './exam.router';
import swaggerDocs from "../../../docs/swagger.json";

const appRouters = express();

appRouters.get("/", async (req: Request, res: Response) => {
	return res.redirect("/swagger");
});

appRouters.use("/swagger", swaggerUi.serve, async (req: Request, res: Response) => {
	return res.send(swaggerUi.generateHTML(swaggerDocs,
		// {
		// 	// customSiteTitle: "",
		// 	// customCss: swaggerDarkUI,
		// }
	));
});

appRouters.use('/exam', exam);

export default appRouters;
