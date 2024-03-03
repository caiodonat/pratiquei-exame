
export interface IExam {

	/** Título */
	title: string;

	/** Área de estudo */
	area: string;

	/** Questões */
	questions?: {

		/** Enunciado da _Questão_ */
		statement: string;

		/** tipo de _Questão_ */
		type: QUESTION_TYPE;

		/** Alternativas */
		alternatives: {

			/** Enunciado da _Alternativa_ */
			statement: string

			/** É correta */
			isCorrect: boolean

		}[]

	}[]

}


export enum QUESTION_TYPE {

	/** Múltipla escolha, uma alternativa */
	'MULTIPLE_ONE',

	/** Múltipla escolha, varias alternativa */
	'MULTIPLE_MANY',

	/** Dissertativa */
	'ESSAY',

	/** Explicativa */
	'TEXT'

}
