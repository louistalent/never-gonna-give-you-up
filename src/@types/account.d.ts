interface AccountType {
	uid: 					string
	username: 				string
	fullname:				string
	firstname:				string
	lastname:				string
	email:					string
	avatar:					string
	loginMethod:			number
	hasPassword:			boolean
	twofactor:				boolean
	isAgency:				boolean
	isBuyer:				boolean
	isSeller:				boolean
	currency:				string
	timezone:				string
	timeoffset:				number
	verifyLevel:			number
	lastIp:					string
	connectedApps:			{
		google: 			boolean
		twitter: 			boolean
		microsoft: 			boolean
		github: 			boolean
		linkedin: 			boolean
		facebook: 			boolean
	},
	location:				LocationType
	lastLocation:			LocationType
	lastLogged:				number
	loginCount:				number
	timestamp:				number
	systemMessages:			SystemMessageType[],
	sellerMessages:			SimpleSellerMessageType[],
	orderMessages:			SimpleOrderType[]
}