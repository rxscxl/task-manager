import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
	return (
		<div>
			<h1>You are welcome!{' <3'}</h1>

			<div className={styles.registerForm}>
				<input placeholder='Email' type='email' />
				<input placeholder='Username' type='text' />
				<input placeholder='Password' type='password' />
				<input placeholder='Repeat password' type='password' />
			</div>
		</div>
	);
};

export { RegisterPage };
