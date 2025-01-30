import styles from './LoginPage.module.scss';

const LoginPage = () => {
	return (
		<div>
			<h1>Welcome back!{' <3'}</h1>

			<div className={styles.loginForm}>
				<input placeholder='Email' type='email' />
				<input placeholder='Password' type='password' />
			</div>
			<a className={styles.forgotPassword} href='#'>
				Forgot your password?
			</a>
		</div>
	);
};

export { LoginPage };
