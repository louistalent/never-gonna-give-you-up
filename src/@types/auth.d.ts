interface AuthType {
	referrer?:	string
	email?: 		string
	password?: 	string
	captcha?: 	string
	role?: 		number // 0: unknown, 1: client, 2: freelancer
	updated?:	number
}