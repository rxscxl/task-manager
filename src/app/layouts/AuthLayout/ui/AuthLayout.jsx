import { Link, Outlet } from 'react-router';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
	return (
		<div className={styles.authLayout}>
			<div className={styles.authLayoutWrapper}>
				<main className={styles.authContent}>
					<div className={styles.authContentWrapper}>
						<Outlet />
						<nav>
							<Link to='/login'>Login</Link> <span>|</span>
							<Link to='/register'>Register</Link>
						</nav>
					</div>
				</main>
			</div>
		</div>
	);
};

export { AuthLayout };
