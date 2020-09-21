<template>
	<div class="view-productdetail">
		<Header />
		<Menu v-if="modal" />
		<PhoneProduct />
		<LandingPageProduct />
		<Respaldo />
		<Horarios />
		<Malla />
		<Eleccion />
		<Empleabilidad />
		<Certificacion />
		<FormProduct />
		<FooterCourseDetail />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Menu from '@/components/Menu.vue';
import LandingPageProduct from '@/components/mery/LandingPageProduct.vue';
import Respaldo from '@/components/mery/Respaldo.vue';
import Horarios from '@/components/mery/Horarios.vue';
import Malla from '@/components/mery/Malla.vue';
import Eleccion from '@/components/mery/Eleccion.vue';
import Certificacion from '@/components/mery/Certificacion.vue';
import Empleabilidad from '@/components/mery/Empleabilidad.vue';

import PhoneProduct from './components/PhoneProduct.vue';
import FormProduct from '@/views/Home/components/FormProduct.vue';
import FooterCourseDetail from '@/components/mery/FooterCourseDetail.vue';

import { mapState } from 'vuex';

export default {
	name: 'ProductDetail',
	components: {
		Header,
		Menu,
		LandingPageProduct,
		Respaldo,
		Horarios,
		Malla,
		Eleccion,
		Certificacion,
		Empleabilidad,
		PhoneProduct,
		FormProduct,
		FooterCourseDetail,
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
	methods: {},
};
</script>

<style></style>
