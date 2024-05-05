import { useEffect, useState, useRef } from 'react';
import styles from './app.module.css';
import { TextField } from './Components';
import { validate, validatorShema } from './Utils';

export const App = () => {
	const [data, setData] = useState({
		email: '',
		password: '',
		checkPassword: '',
	});

	const buttonRef = useRef(null)

    const [error, setError] = useState({})
    const isValid = Object.keys(error).length === 0

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(data);
	};

	const hendelChange = (event) => {
		const { name, value } = event.target;

		setData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	useEffect(() => {
		const error = validate(data, validatorShema);
		setError(error);
	}, [data]);


    useEffect(() => {
        if (isValid) {
            buttonRef.current.focus()
        }
    }, [isValid])

	return (
		<div className={styles.app}>
			<form className={styles.form} onSubmit={onSubmit}>
				<TextField
					label={'Email'}
					error={error.email}
					name={'email'}
					value={data.email}
					onChange={hendelChange}
					type="text"
				/>

				<TextField
					label={'Password'}
					error={error.password}
					name={'password'}
					value={data.password}
					onChange={hendelChange}
					type="password"
				/>

				<TextField
					label={'CheckPassword'}
					error={error.checkPassword}
					name={'checkPassword'}
					value={data.checkPassword}
					onChange={hendelChange}
					type="password"
				/>
				<button className={styles.btn} ref={buttonRef} disabled={!isValid} type="submit">
					Отправить
				</button>
			</form>
		</div>
	);
};
