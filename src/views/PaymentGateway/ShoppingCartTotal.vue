<template>
	<div class="view-shopping-cart-total">
		<div class="section2-container d-flex flex-column">
			<div class="section2-price d-flex justify-between">
				<h4>Subtotal</h4>
				<h4>S/. {{ totalPrice }}</h4>
			</div>
			<div class="dsct-container d-flex">
				<input type="text" placeholder="Agrega un código de descuento" />
				<button>
					<img src="@/assets/images/enviar.png" />
				</button>
			</div>
			<button class="button">Continuar</button>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'ShoppingCartTotal',
	computed: {
		...mapState({
			totalPrice: (state) => state.HomeStore.tatalPrice,
		}),
	},

	methods: {
		...mapActions({
			getPriceTotal: 'HomeStore/getPriceTotal',
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
