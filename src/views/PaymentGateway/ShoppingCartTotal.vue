<template>
	<div class="view-shopping-cart-total">
		<div class="section2-container d-flex flex-column">
			<div class="section2-price d-flex justify-between">
				<h4>Subtotal</h4>
				<h4>S/. {{ totalPrice }}</h4>
			</div>
			<div class="dsct-container">
				<div class="dsct-container-main d-flex" style="justify-content: space-around;">
					<input
						type="text"
						placeholder="Agrega un código de descuento"
						v-model="cupon"
						v-if="!cuponActive"
					/>
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
				<small style="padding-left: 13px; font-size: 1.3rem;" class="deserror" v-if="errorLoaded">
					el codigo ingresado es incorrecto
				</small>				
			</div>	
			<router-link v-if="!isLogin" to="/auth/login" class="button"
				>Continuar</router-link
			>
			<router-link
				v-if="isLogin"
				to="/pago/pasarela/tarjeta-de-credito"
				class="button"
				>Continuar</router-link
			>
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
			isLogin: (state) => state.AuthStore.isLogin,
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

