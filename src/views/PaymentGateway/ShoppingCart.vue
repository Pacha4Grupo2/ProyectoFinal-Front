<template>
	<div class="view-shopping-cart">
		<div class="shopping-cart-detail">
			<article
				class="shopping-cart-detail__container"
				v-for="producto in totalProducts"
				:key="producto.id"
			>
				<img :src="producto.imagen_card" />

				<div
					class="shopping-cart-detail__container__description d-flex flex-column justify-between"
				>
					<div class="shopping-cart-detail__container__description__title">
						<h2>{{ producto.nombre }}</h2>
						<p>Dto. {{ producto.descuento }}%</p>
					</div>
					<button class="btn-eliminar" @click="eliminar(producto.id)">
						Eliminar
					</button>
				</div>

				<div class="shopping-cart-detail__container__price">
					<h3>S/. {{ producto.precio }}</h3>
				</div>
			</article>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'ShoppingCart',
	computed: {
		...mapState({
			totalProducts: (state) => state.HomeStore.totalProducts,
		}),
	},
	methods: {
		...mapActions({
			eliminar: 'HomeStore/eliminar',
		}),
		confirmDelete(id) {
			this.$swal({
				title: 'Deseas eliminar este producto?',
				showDenyButton: true,

				confirmButtonText: `SI`,
				denyButtonText: `NO`,
			}).then((result) => {
				if (result.isConfirmed) {
					this.eliminar(id);
				}
			});
		},
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/_shoppingCartDetail.scss';
</style>
