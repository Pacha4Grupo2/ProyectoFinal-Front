<template>
	<div class="view-home">
		<Phone />
		<Menu v-if="modal" />
		<LandingPage />
		<CardCourse />
		<Comunity />
		<Beneficios />
		<FormHome />
		<Footer />
	</div>
</template>

<script>
import Phone from './components/Phone';
import Menu from '@/components/Menu';
import CardCourse from './components/CardCourse';
import LandingPage from '@/components/LandingPage';
import Comunity from '@/components/Comunity';
import Beneficios from '@/components/Beneficios';
import FormHome from '@/views/Home/components/FormHome';
import Footer from '@/components/Footer';

import { mapState, mapActions } from 'vuex';

export default {
	name: 'Home',
	components: {
		CardCourse,
		Phone,
		LandingPage,
		Comunity,
		Beneficios,
		FormHome,
		Footer,
		Menu,
	},
	data() {
		return {};
	},
	created() {},
	watch: {},
	computed: {
		...mapState({
			modal: (state) => state.HomeStore.modal,
		}),
	},
	methods: {
		...mapActions({
			getProducts: 'HomeStore/getProducts',
		}),
	},
	mounted() {
		this.getProducts();
	},
	destroyed() {},
};
</script>

<style></style>
