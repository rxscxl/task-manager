import styles from './LoginPage.module.scss';

const LoginPage = () => {
	return (
		<div>
			<header>
				<h1>Welcome back!{' <3'}</h1>
			</header>
			<div className={styles.loginForm}>
				<input placeholder='Email' type='email' />
				<input placeholder='Password' type='password' />
			</div>
		</div>
	);
};

export { LoginPage };
