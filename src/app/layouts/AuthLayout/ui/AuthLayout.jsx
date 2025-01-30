import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import styles from './AuthLayout.module.scss';

const AuthLayout = () => {
	const location = useLocation();
	const [windowLocation, setWindowLocation] = useState(location.pathname);

	useEffect(() => {
		console.log('Location changed:', location.pathname);
		setWindowLocation(location.pathname);
	}, [location.pathname]);

	return (
		<div className={styles.authLayout}>
			<form className={styles.authFormWrapper}>
				<div className={styles.authFormContent}>
					<Outlet />
					<nav>
						<Link
							className={windowLocation === '/login' ? styles.active : ''}
							to='/login'
						>
							Login
						</Link>{' '}
						<span>|</span>
						<Link
							className={windowLocation === '/register' ? styles.active : ''}
							to='/register'
						>
							Register
						</Link>
					</nav>
				</div>
			</form>
		</div>
	);
};

export { AuthLayout };
