<template>
	<div class="container-main">
		<div class="container-cursos">
			<h2 class="container-cursos__title">
				Conoce nuestros Programas de Especialización
			</h2>
			<div class="container-cursos__list">
				<div class="curso" v-for="(product, index) in products" :key="index">
					<figure>
						<img :src="product.imagen_card" class="img-cursos" />
						<div class="curso__ditail">
							<div class="curso-description">
								<p class="programa">PROGRAMA DE ESPECIALIZACIÓN EN</p>
								<h3 class="curso__title">{{ product.nombre }}</h3>
							</div>
							<div class="curso__ditail-button">
								<svg
									class="imagen-mas"
									xmlns="http://www.w3.org/2000/svg"
									fill="#ffffff"
									height="24"
									width="24"
									viewBox="0 0 24 24"
								>
									<rect opacity="0" width="24" height="24"></rect>
									<path
										d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
									></path>
									<path
										d="M15,11H13V9a1,1,0,0,0-2,0v2H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V13h2a1,1,0,0,0,0-2Z"
									></path>
								</svg>
								<p>Ver más</p>
							</div>
						</div>
					</figure>
				</div>
			</div>
		</div>
		<div class="container-comunidad"></div>
		<div class="container-beneficios"></div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'CardCourse',
	data() {
		return {};
	},
	created() {},
	watch: {},
	computed: {
		...mapState({
			products: (state) => state.HomeStore.products,
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

<style lang="scss"></style>
