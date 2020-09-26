<template>
	<div class="view-pasarela">
		<div class="container-pasarela">
			<div class="container-iconPagos d-flex">
				<img
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Pasarela de pagos</h1>
			</div>
			<section class="container-main">
				<div class="container-headerpagos">
					<HeaderPagos />
					<router-view></router-view>
				</div>
				<div>
					<div class="shoppingcar">
						<ShoppingCart />
					</div>

					<div class="sectionprice">
						<hr />
						<div class="sectionprice1 d-flex justify-between">
							<h3>Precio final</h3>
							<h3>S/. {{ totalPrice }}</h3>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import ShoppingCart from '@/views/PaymentGateway/ShoppingCart';
import HeaderPagos from '@/views/PaymentGateway/HeaderPagos';
export default {
	name: 'LayoutPasarela',
	components: {
		ShoppingCart,
		HeaderPagos,
	},
	computed: {
		...mapState({
			totalPrice: (state) => state.HomeStore.totalPrice,
		}),
	},
};
</script>

<style lang="scss" scoped>

@import '@/assets/styles/_pasarela.scss';
</style>
