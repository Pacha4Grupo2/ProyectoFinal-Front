<template>
	<div class="view-checkout">
		<div class="checkout">
			<div class="sectionprice-checkout">
				<h2>¡Compra exitosa!</h2>
				<h4>
					La boleta o factura solicitada será enviada a tu correo en unos
					momentos
				</h4>
				<button class="button">Volver a mis cursos</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'checkout',
};
</script>

<style lang="scss" scoped>

.view-checkout {
	.checkout {
		padding: 20 20 20 20;
		.button {
			/*Box-model*/
			padding: 15px 60px;
			margin-right: 5px;
			border: #5640ff;
			font-weight: bold;
			width: 100%;
		}
		.sectionprice-checkout {
			padding: 50px 30px 50px 30px;
			max-width: 70%;
			border: solid 1px rgb(86, 88, 86);
			h2 {
				/*Tipografía*/
				font-family: 'Poppins';
				color: #000425;
				font-size: 1.9rem;
			}
			h4{
				margin-bottom: 25px;
				font-size: 1.6rem;
			}
		}
	}
}


</style>
