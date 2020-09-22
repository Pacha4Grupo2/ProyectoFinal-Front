export default {
	path: '/auth',
	name: 'auth-layout',
	component: () => import('./AuthLayout.vue'),
	children: [
		{
			path: 'login',
			name: 'auth-login',
			component: () => import('./AuthLogin.vue'),
		},
		{
			path: 'register',
			name: 'auth-register',
			component: () => import('./AuthRegister.vue'),
		},
	],
};
