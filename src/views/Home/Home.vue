<template>
	<div class="view-home">
		<LandingPage />
		<CardCourse />
		<Comunity />
		<Beneficios />
	</div>
</template>

<script>
import CardCourse from './components/CardCourse';
import LandingPage from '@/components/LandingPage';
import Comunity from '@/components/Comunity';
import Beneficios from '@/components/Beneficios';

export default {
	name: 'Home',
	components: {
		CardCourse,
		LandingPage,
		Comunity,
		Beneficios,
	},
	data() {
		return {
			courses: [
				{
					id: 1,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
				{
					id: 2,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
				{
					id: 3,
					name: 'Desarrollo Front-End',
					description: '',
					itsBuy: true,
				},
			],
		};
	},
};
</script>

<style></style>
