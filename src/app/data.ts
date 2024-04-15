/** @format */

interface ServiceObject {
	idAttribute: string;
	service: string;
	mainInfo: string;
	secondaryInfo: {
		title: string;
		bulletPoints: string[];
	}[];
	articles: {
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
		idAttribute: "PerformanceManagement",
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
					"Use an iterative data-driven process to design program change or development strategies",
					"Develop an open data program that provides value to the community and to your organization",
				],
			},
			{
				title:
					"Build Organizational Capacity for Value-Driven Data-Informed Decision Making",
				bulletPoints: [
					"Develop a long-term strategy to build your organization's capacity to use data to drive results",
					"Get training in data informed decision-making and effective data governance for a team, department or an entire organization",
				],
			},
		],
		articles: [
			{
				title: "What is Data-Driven Decision Making? A Case Study",
				href: "https://www.linkedin.com/pulse/what-data-driven-decision-making-case-study-eric-jackson-nyvre/",
				tags: ["Performance", "Data-driven Decisions"],
			},
		],
	},
	{
		idAttribute: "DataManagement",
		service: "Data Management and Data Governance",
		mainInfo:
			"Ensure quality and prevent harm in data uses ranging from performance measurement to AI",
		secondaryInfo: [
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
				title: "Avoid Data Problems by Asking the Right Questions",
				href: "https://www.linkedin.com/pulse/avoid-data-problems-asking-right-questions-eric-jackson-zlkge/",
				tags: ["Data Governance"],
			},
		],
	},
	{
		idAttribute: "RFP",
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
				title: "Coming soon ...", // Weaving Equity into Grant and Vendor Evaluations
				href: "",
				tags: ["Equity"], // Tags made up for the article
			},
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
