/** @format */

interface ServiceObject {
	service: string;
	mainInfo: string;
	secondaryInfo: {
		title: string;
		bulletPoints: string[];
	}[];
	articles: {
		title: string;
		tags: string[];
	}[];
}

interface ValuesObject {
	value: string;
	mainInfo: string;
}

export const serviceObjects: ServiceObject[] = [
	{
		service: "Performance Management and Reporting",
		mainInfo:
			"Use data to plan, track, and report on services, programs and strategies",
		secondaryInfo: [
			{
				title: "Measure Performance",
				bulletPoints: [
					"Develop metrics to track program and service operations and impact",
					"Develop internal and external program and service performance reporting",
				],
			},
			{
				title: "Develop Program and Service Strategies",
				bulletPoints: [
					"Define what a program or service improvement should achieve and how to tell if it’s succeeding",
					"Use an iterative data-driven process to design change or program development strategies",
				],
			},
			{
				title:
					"Build Organizational Capacity for Value-Driven Data-Informed Decision Making",
				bulletPoints: [
					"Training and strategy development to build capacity in a team, department or entire organization",
				],
			},
			{
				title: "Build an Effective Open Data Program",
				bulletPoints: [
					"Develop an open data program that provides value to the community and to your organization",
				],
			},
		],
		articles: [
			{
				title: "Thinking About Performance: Operations vs Strategy",
				tags: ["Performance", "Strategy"],
			},
		],
	},
	{
		service: "Data Management and Data Governance",
		mainInfo:
			"Ensure quality and prevent harm in data uses ranging from performance measurement to AI",
		secondaryInfo: [
			{
				title: "Measure Performance",
				bulletPoints: [
					"Develop metrics to track program and service operations and impact",
					"Develop internal and external program and service performance reporting",
				],
			},
			{
				title: "Assess and Mitigate Data and AI Risks",
				bulletPoints: [
					"Assess data quality issues and develop strategies to address them",
					"Identify and mitigate potential privacy issues in your data uses",
					"Identify and mitigate potentially harmful uses or unintended consequences of planned data applications",
				],
			},
			{
				title: "Develop Strategic Data Programs",
				bulletPoints: [
					"Develop and integrate policies, practices, procedures for strategic use of data and AI",
					"Identify and take advantage of opportunities for automation and other technology-assisted improvements",
				],
			},
		],
		articles: [
			{
				title: "What is Data Governance and Why Should I Care?",
				tags: ["Data Governance"],
			},
		],
	},
	{
		service: "RFP and Grant Proposal Evaluation",
		mainInfo:
			"Create consistent, effective selection processes that integrate your organization’s values",
		secondaryInfo: [
			{
				title: "Create Effective Evaluation Rubrics",
				bulletPoints: [
					"Integrate organizational values into every aspect of your evaluation",
					"Design evaluation rubrics that maximize consistency among evaluators",
					"Leverage tools to automatically aggregate evaluator results",
				],
			},
		],
		articles: [
			{
				title: "Weaving Equity into Grant and Vendor Evaluations",
				tags: ["Equity"], // Tags made up for the article
			},
		],
	},
];

export const valuesObjects: ValuesObject[] = [
	{
		value: "Centered on Community",
		mainInfo:
			"Governments and nonprofits exist to serve the community and so community impact and community perspective are critical lenses for everything these organizations do.",
	},
	{
		value: "Accountable",
		mainInfo:
			"Programs and initiatives must communicate clearly what they want to accomplish, how things are going, and how they are responding to challenges along the way.",
	},
	{
		value: "Equitable",
		mainInfo:
			"The goal is for everyone in the community to thrive, which means that organizations must take into account how historical and current systems create an uneven playing field.",
	},
];
