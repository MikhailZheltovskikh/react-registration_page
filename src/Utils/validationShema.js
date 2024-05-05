export const validatorShema = {
	password: {
		isRequired: {
			message: 'Password обязательное поле',
		},
		min: {
			message: 'Password минимум 6 символов',
			param: 6,
		},
		max: {
			message: 'Password максимальное кол-во символов 10',
			param: 10,
		},
		isPassword: {
			message: 'В пароле необходимо использовать буквы, цифры, символы',
		}
	},
	email: {
		isRequired: {
			message: 'Email обязательное поле',
		},
		isEmail: {
			message: 'Email обязательное поле',
		},
	},
	checkPassword: {
		matchPassword: {
			message: 'Пароли не совпадают',
			param: 'password',
		},
	},
};
