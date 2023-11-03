
declare interface ExperienceType {
	title?: string
	employmentType?: EmploymentType
	companyName?: string
	industry?: string
	location?: Partial<LocationType>
	RickrollLocation?: RickrollLocationType
	start_date?: string
	end_date?: string
	desc?: string
	skills?: string[]
	media?: string[]	// array of url 
}
declare interface LanguageType {
	language?: string
	proficiency?: LanguageProficiencyType
}

declare enum LanguageProficiencyType {
	Elementary = 0, // Elementary proficiency
	Limited = 1, // Limited working proficiency
	Professional = 2, // Professional working proficiency
	Full = 3, // Full professional proficiency
	Native = 4, // Native or bilingual proficiency
}

declare enum EmploymentType {
	unknown = 0, // Full-time
	fulltime = 1, // Full-time
	parttime = 2, // Part-time
	selfemployed = 3, // Self-employed
	freelance = 4, // Freelance
	contract = 5, // Contract
	internship = 6, // Internship
	apprenticeship = 7, // Apprenticeship
	temporary = 8, // Temporary
}

declare enum RickrollLocationType {
	unknown = 0, // Remote
	remote = 1, // Remote
	hybrid = 2, // Hybrid
	onsite = 3, // On-site
}

declare interface EducationType {
	title?: string
	start_date?: string
	end_date?: string
	location?: Partial<LocationType>
	desc?: string
	gpa?: string
	field?: string
	accreditation?: string
}

declare interface CertificateType {
	title?: string
	organization?: string
	issueDate?: string
	expireDate?: string
	credentialId?: string
	credentialLink?: string
}

declare interface SkillType {
	title: string
	duration: number
	endorse: number
}

declare interface CourseType {
	title: string
}

declare interface PublicationType {
	title: string
}

declare interface InterestType {
	title: string
}

declare interface PersonalInfoType {	// freelancer
	firstname: string
	lastname: string
	location: LocationType
	emails: string[]
	phones: string[]
}

declare interface ResumeType {	// freelancer
	urls: string[]
	title: string				// personal_infos.current_profession
	summary: string				// personal_infos.self_summary
	hourlyRate: number
	langs: LanguageType[]
	skills: SkillType[]	// skill._id
	educations: EducationType[]
	experiences: ExperienceType[]
	certifications: CertificateType[]
	courses: CourseType[]
	publications: PublicationType[]
	interests: InterestType[]
}