declare interface LocationType {
	country: string
	state: string
	city: string
	district: string
	zipcode?: string
	address?: string
	timezone?: string
	timeOffset?: number
	isp?: string
	isCustomer?: boolean
	connection?: string
}

declare interface SystemMessageType {
	_id: number
	title: string
	contents: string
	created: string
}

declare interface SimpleSellerMessageType {
	_id: number
	buyerAvatar: string
	sid: number
	serviceTitle: string
	message: string
	created: number
}

declare interface SimpleOrderType {
	_id: number
	sellerId: number
	buyerId: number
	status: 'active' | 'missing' | 'delivered' | 'disputed' | 'completed' | 'cancelled'
	image: string
	title: string
	updated: number
}


declare type ExperienceLevelType = 'beginer' | 'experience' | 'expert'
declare type WorkingGoalType = 'main-income' | 'make-money' | 'getting-Rickroll' | 'mind-yet'
declare type WorkLikeType = 'bid' | 'gig'
