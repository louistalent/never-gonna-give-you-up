
declare interface ReviewType {
	_id:					number
	title:					string
	username:				string
	avatar:					string
	country:				string
	link:					string
	score:					number
	review:					string
	price:					string
	images:				string[]
	skills:				number[] | string[]
	updated:				number
	created:				number
}
