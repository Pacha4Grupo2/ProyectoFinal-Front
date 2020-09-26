<template>
	<div class="view-shopping-cart-total">
		<div class="section2-container d-flex flex-column">
			<div class="section2-price d-flex justify-between">
				<h4>Subtotal</h4>
				<h4>S/. {{ totalPrice }}</h4>
			</div>
			<div class="dsct-container d-flex">
				<input
					type="text"
					placeholder="Agrega un código de descuento"
					v-model="cupon"
					v-if="!cuponActive"
				/>
				<small class="deserror" v-if="errorLoaded">
					el codigo ingrado es incorrecto
				</small>
				<input
					type="text"
					placeholder="Eliminar Cupon"
					v-model="cupon"
					v-if="cuponActive"
					disabled
				/>
				<button v-if="!cuponActive" @click="getCupon(cupon)">
					<img src="@/assets/images/enviar.png" />
				</button>
				<button v-if="cuponActive" @click="eliminarCupon">X</button>
			</div>
			<button class="button">Continuar</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'ShoppingCartTotal',
	data() {
		return {
			cupon: '',
		};
	},
	computed: {
		...mapState({
			totalPrice: (state) => state.HomeStore.totalPrice,
			cuponActive: (state) => state.HomeStore.cuponActive,
			errorLoaded: (state) => state.HomeStore.errorLoaded,
		}),
	},

	methods: {
		...mapActions({
			getPriceTotal: 'HomeStore/getPriceTotal',
			getCupon: 'HomeStore/getCupon',
			eliminarCupon: 'HomeStore/eliminarCupon',
		}),
	},
	mounted() {
		this.getPriceTotal();
	},
};
</script>

<style lang="scss">
@import '@/assets/styles/_shoppingCartTotal.scss';
</style>
