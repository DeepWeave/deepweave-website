/** @format */

interface ServiceObject {
	idAttribute: string;
	service: string;
	mainInfo: string;
	secondaryInfo: {
		intro: string;
		bulletPoints: string[];
	}[];
	resources: {
		title: string;
		href: string;
		tags: string[];
	}[];
}

interface ValuesObject {
	value: string;
	mainInfo: string;
}

export const serviceObjects: ServiceObject[] = [
	{
		idAttribute: "ImpactPlanning",
		service: "Impact Planning",
		mainInfo:
			"Design iteration and learning into program design from the start.",
		secondaryInfo: [
			{
				intro: "Iteration and learning is best built into program design from the start. DeepWeave can help with:",
				bulletPoints: [
					"Identifying need and relating the needs to the embedded systems",
					"Developing theories of change",
					"Integrating iteration and learning into programs",
					"Designing evaluation and accountability (based on Results Based Accountability)",
				],
			},
		],
		resources: [
		],
	},
	{
		idAttribute: "Implementation",
		service: "Implementation",
		mainInfo:
			"Build simple systems to coordinate services, collect data, and report",
		secondaryInfo: [
			{
				intro: "Effective delivery needs simple, well-designed systems to coordinate and track services,\
				collect data, and manage reporting for funders and executive and board leadership.\
				We understand that  introducing new methodologies, procedures, and systems requires a process\
				of design and change management that honors the expertise and concerns of those directly impacted.\
				DeepWeave can help with:",
				bulletPoints: [
					"Designing systems to coordinate and track services internally and with external partners",
					"Planning and supporting usable data systems that can adapt to multiple reporting needs",
					"Developing reports and processes to support iteration and learning",
					"Managing the changes required to integrate new systems and processes",
				],
			},
		],
		resources: [
		],
	},
	{
		idAttribute: "ImpactEvaluation",
		service: "Impact Evaluation",
		mainInfo:
			"Evaluate the impact of your programs through metrics and narrative data",
		secondaryInfo: [
			{
				intro: "A program and its underlying theory of change are essentially a set of hypotheses.\
						Traditional program performance measures are inadequate for effective learning and iteration\
						or for understanding how a program interacts with the rest of the community ecosystem – all\
						critical to drive resilient change. DeepWeave can help with:",
				bulletPoints: [
					"Designing evaluations to fuel learning",
					"Implementing and integrating the Results Based Accountability methodology",
					"Incorporating narrative data collection and analysis",
				],
			},
		],
		resources: [ 
		],
	},
];

export const valuesObjects: ValuesObject[] = [
	{
		value: "Centered on Community",
		mainInfo:
			"Governments and nonprofits exist to serve the community and thus community impact and community perspective are critical lenses for everything these organizations do.",
	},
	{
		value: "Accountable",
		mainInfo:
			"Programs and initiatives must communicate clearly what they intend to accomplish, how things are going, and how they are responding to challenges along the way.",
	},
	{
		value: "Equitable",
		mainInfo:
			"For everyone in the community to thrive, organizations must take into account how historical and current systems create an uneven playing field.",
	},
];
