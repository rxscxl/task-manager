import { Route, Routes } from 'react-router';
import { AuthLayout } from '../../app/layouts/AuthLayout';
import { HomePage } from '../../pages/HomePage';
import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route element={<AuthLayout />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='register' element={<RegisterPage />} />
			</Route>
		</Routes>
	);
};

export { Router };
