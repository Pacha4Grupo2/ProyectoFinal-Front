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
				<div>
					<div class="shoppingcar">
						<ShoppingCart />
					</div>
					
					<div class="sectionprice d-flex flex-column">
						<div>
							<input type="text" placeholder="Agrega un código de descuento" />
							<hr>
						</div>
						<div class="sectionprice1 d-flex justify-between">
							<h3>Precio final</h3>
							<h3>s/600.00</h3>
						</div>
					</div>
				</div>	

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
.sectionprice h3{
	font-size: 2.2rem;
	color: #5640ff;
  font-weight: bold;
}
input{
	/* Box-model */
	width: 90%;
	padding: 10px 10px;
	border-radius: 4px;
	margin: 0 0px 20px 0;
	border-color:darkgrey;

	/*Tipografía*/
	font-family: 'roboto';
	font-size: 1.1rem;
	font-weight: bold;
}
.sectionprice1{
	padding:0 50px 0 0;
	margin-top: 20px;
}
hr{
	width: 100%;
}

</style>
