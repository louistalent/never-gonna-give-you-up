interface FreelancerProfileType extends Partial<ResumeType> {
	score?:					number
	houlyRate?:				number		// $20 
	weeklyWorktime?:		number		// 45h/week
	serviceCount?: 			number
	reviewCount?: 			number
	onGoingTaskCount?:		number
	completedTaskCount?:	number
	serviceInQueue?:		number
	completedServiceCount?:	number
	reviews?:				ReviewType[]
	step?:			        number
	exp?:			        ExperienceLevelType
	goal?:			        WorkingGoalType
	worktype?:		        WorkLikeType
	forFulltime?:	        boolean
	resumeLink?:	        string
	info?: {
		image?:		        string
		banner?:			string
		firstname?:         string
		lastname?: 	        string
		district?: 	        string
		city?: 		        string
		state?: 	        string
		country?: 	        string
		zipcode?: 	        string
	}
	created?:				number
}