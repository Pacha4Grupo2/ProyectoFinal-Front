<template>
	<div class="view-pasarela">
		<div class="container-pasarela">
			<div class="container-iconPagos">
				<img
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Pasarela de pagos</h1>
			</div>
			<section class="d-flex justify-between column">
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
			totalPrice: (state) => state.HomeStore.tatalPrice,
		}),
	},
};
</script>

<style lang="scss" scoped>
// .container-pasarela {
// 	margin-left: 50px;
// }
// .container-iconPagos {
// 	display: flex;
// 	align-items: center;
// 	margin-left: 20px;
// 	margin-bottom: 20px;
// }

// .view-pasarela {
// 	padding-top: 100px;
// }
// .container-pasarela h1 {
// 	/* Box-model */
// 	margin-left: 20px;
// 	/*Tipografía*/
// 	font-family: 'Poppins';
// 	color: #000425;
// 	font-size: 1.8rem;
// }

// .button-container {
// 	display: grid;
// 	grid-template-columns: 1fr 1fr 1fr;
// }

// .active {
// 	background-color: #5640ff;
// 	color: white;
// }

// .container-headerpagos {
// 	width: 50%;
// 	margin: 0 20px;
// }
// .sectionprice h3{
// 	font-size: 2.0rem;
// 	color: #5640ff;
//   font-weight: bold;
// }
// .sectionprice input{
// 	/* Box-model */
// 	width: 90%;
// 	padding: 10px 10px;
// 	border-radius: 4px;
// 	margin: 0 0px 20px 0;
// 	border-color:darkgrey;

// 	/*Tipografía*/
// 	font-family: 'roboto';
// 	font-size: 1.1rem;
// 	font-weight: bold;
// }
// .sectionprice1{
// 	padding:0px 50px 0 40px;
// 	margin-top: 20px;
// }
// hr{
// 		color: rgb(109, 105, 105);
//     max-width: 88%;
// }
@import '@/assets/styles/_pasarela.scss';
</style>
