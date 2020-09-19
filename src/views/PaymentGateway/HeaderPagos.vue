<template>
	<div class="container-buttonPaymente">
		<h2>Selecciona tu método de pago</h2>
		<div class="button-container">
			<router-link
				class="button btn-payment"
				active-class="active"
				to="/pago/pasarela/tarjeta-de-credito"
				>Tarjeta de crédito</router-link
			>
			<router-link
				class="button btn-payment"
				active-class="active"
				to="/pago/pasarela/tarjeta-de-debito"
				>Tarjeta de débito</router-link
			>
			<router-link
				class="button btn-payment"
				active-class="active"
				to="/pago/pasarela/efectivo"
				>Depósitos Pago Efectivo</router-link
			>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HeaderPagos',
};
</script>
<style lang="scss">
.container-buttonPaymente {
	margin-bottom: 20px;
	h1 {
		margin-bottom: 0;
	}
	h2{
			/* Box-model */
	margin-bottom: 15px;
	margin-right: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.5rem;
	font-weight: bold;
	}
}

.button-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-column-gap: 10px;
	.btn-payment {
		background: #f8f8fa;
		color: black;
		font-weight: bold;
		font-size: 15px;
		padding: 20px 10px;
		text-align: center;
		text-decoration-line: none;
	}

	.active{
    background-color:#5640ff; 
    color: white; 
  }
}
</style>
