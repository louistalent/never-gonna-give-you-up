
declare interface ServiceTierType {
	title: string
	desc: string
	delievery: number
	revisions: number
	price: number
	scope: Array<{label: string, value: boolean|number}>
	extra: Array<{label: string, cost: number, time: number}>
}

declare interface ServiceType {
	_id:					number
	seller?: {
		uid:					number
		username?:				number
		fullname?:				number
		summary?:				string
		langs?:					LanguageType[]
		location?:				LocationType
		completedServiceCount?:	number
		services:			Array<{
			_id:	number
			title: string
			desc: string
			medias: string[]
			level:	number
			score:	number
			completedServiceCount:	number
		}>
	}
	title:					string
	desc:					string
	tags:					string[]
	categoryId:				number
	serviceType:			Array<{
		label: 				string[]
		meta: 				Array<{label: string, values: string[]}>
	}>
	tiers:					ServiceTierType[]
	media:					string[]
	docs:					string[]
	level:					number
	score:					number
	readingCnt:				number
	bookmarkCnt:			number
	completedCnt:			number
	ongoingCnt:				number
	queueCnt:				number
	reviews?:				Array<{
		uid: number
		username: string
		avatar: string
		country: string
		score: number
		desc: string
		timestamp: number
		image: string[]
	}>
	timestamp:				number
}