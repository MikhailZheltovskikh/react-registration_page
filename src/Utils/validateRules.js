const rules = {
	isRequired: (value) => Boolean(value.trim()),
	isEmail: (value) => {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(value).toLowerCase());
	},
	isPassword: (value) => {
		const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])/;
		return re.test(String(value).toLowerCase());
	},
	min: (value, params) => value.length >= params,
	max: (value, params) => value.length <= params,
	matchPassword: (value, params, data) => value === data[params],
};

export default rules;

