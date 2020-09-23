<template>
	<div class="view-cash-payment">
		<section>
			<img
				class="img-main"
				src="https://theme.zdassets.com/theme_assets/170263/e4204de1b989fdda8148d185d396322b469b27f5.png"
			/>
		</section>
		<section>
			<h2>Pasos a seguir:</h2>
			<p>
				Enviaremos un código de pago CIP a tu correo, con el cual podrás pagar
				de la siguiente manera:
			</p>
		</section>
		<section>
			<h2>Banca por internet y móvil:</h2>
			<p>
				Paga por internet vía transferencia desde el aplicativos móvil o web de
				tu banco de preferencia.
			</p>
			<div class="img-container">
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
				<img
					src="https://dnsgamer.s3-accelerate.amazonaws.com/wp-content/uploads/2020/01/BCP-LOGO-300x104.png"
				/>
			</div>
		</section>

		<section>
			<h2>Agencias y agentes:</h2>
			<p>
				Paga por internet vía transferencia desde el aplicativos móvil o web de
				tu banco de preferencia.
			</p>
			<div class="img-container">
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
				<img src="https://www.lan.com/es_pe/images/cajero/bbva_90x45.gif" />
			</div>
		</section>

		<section class="d-flex">
			<h2>Solicitar factura</h2>
			<p>ÍCONO</p>
		</section>

		<section class="d-flex">
			<h2>Solicitar factura</h2>
			<p>ÍCONO</p>
		</section>

		<section class="button-container">
			<div></div>
			<button class="button">Obtener código CIP</button>
		</section>
	</div>
</template>

<script>
export default {
	name: 'CashPayment',
};
</script>

<style lang="scss" scoped>
.view-cash-payment h2 {
	/* Box-model */
	margin-bottom: 15px;
	margin-right: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.4rem;
	font-weight: bold;
}

.button-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.view-cash-payment button {
	width: 95%;
	padding: 15px 0;
}
.img-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
}
.view-cash-payment section {
	margin-bottom: 20px;
}
.view-cash-payment img {
	width: 80%;
	object-fit: cover;
	border-radius: 7px;
}
.img-main {
	max-width: 40%;
	object-fit: cover;
	border-radius: 7px;
}
.view-cash-payment p {
	font-family: 'roboto';
	color: #222222;
	font-size: 1.1rem;
	margin-bottom: 15px;
	font-weight: bold;
}
</style>
