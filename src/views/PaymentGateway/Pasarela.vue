<template>
	<div class="view-pasarela">
		<div class="container-pasarela">
			<div class="container-iconPagos">
				<img
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Pasarela de pagos</h1>
			</div>
			<section class="d-flex justify-between">
				<div class="container-headerpagos">
					<HeaderPagos />
					<router-view></router-view>
				</div>
				<ShoppingCart />
			</section>
		</div>
	</div>
</template>

<script>
import ShoppingCart from '@/views/PaymentGateway/ShoppingCart';
import HeaderPagos from '@/views/PaymentGateway/HeaderPagos';
export default {
	name: 'LayoutPasarela',
	components: {
		ShoppingCart,
		HeaderPagos,
	},
};
</script>

<style lang="scss">
/*   @import '/assets/styles/typography.scss'; */

.container-pasarela {
	margin-left: 50px;
}
.container-iconPagos {
	display: flex;
	align-items: center;
	margin-left: 20px;
	margin-bottom: 20px;
}

.view-pasarela {
	padding-top: 100px;
}
h1 {
	/* Box-model */
	margin-left: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #000425;
	font-size: 1.6rem;
}
h2 {
	/* Box-model */
	margin-bottom: 15px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.2rem;
	font-weight: bold;
}
.button-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
button {
	/*Box-model*/
	padding: 15px 80px;
	margin-right: 5px;
	background-color: rgb(223, 219, 219);
	border: darkgrey;
	color: rgb(109, 105, 105);
	font-weight: bold;

	&:hover {
		background-color: #5640ff;
	}
}

.active {
	background-color: #5640ff;
	color: white;
}

p {
	color: red;
}

.container-headerpagos {
	width: 50%;
	margin: 0 20px;
}
</style>
