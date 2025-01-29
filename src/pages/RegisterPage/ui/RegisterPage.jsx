import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
	return (
		<div>
			<header>
				<h1>You are welcome!{' <3'}</h1>
			</header>
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
