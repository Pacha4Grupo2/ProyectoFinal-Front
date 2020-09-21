<template>
	<div class="view-credit-card">
		<section>
			<h2>Datos personales</h2>
			<div class="id-container">
				<input
					name="DNI"
					type="text"
					placeholder="Documento de identidad"
					pattern="[A-Z0-9 ]+"
					required
				/>
				<input
					name="email"
					type="email"
					placeholder="Correo electrónico"
					required
				/>
			</div>
		</section>

		<section>
			<h2>Ingresa la información de tu tarjeta</h2>
			<div class="">
				<div class="card-container1">
					<input
						class="card-container-name"
						name="name"
						type="text"
						placeholder="Nombres y apellidos"
						pattern="[A-Z ]+"
						required
					/>
					<input
						id="credit-card-number"
						name="cardnumber"
						type="number"
						placeholder="Número de tarjeta"
						maxlength="16"
						mixlength="16"
						required
					/>
				</div>
				<div class="card-container-number">
					<div class="card-container-date">
						<input
							id=""
							name="cardmonth"
							type="number"
							placeholder="Mes"
							pattern="[0-9]+"
							maxlength="2"
							mixlength="2"
							required
						/>
						<input
							id=""
							name="cardyear"
							type="number"
							placeholder="Año"
							pattern="[0-9]+"
							maxlength="4"
							mixlength="4"
							required
						/>
						<input
							id=""
							name="cardcvv"
							type="number"
							placeholder="Cvv"
							pattern="[0-9]+"
							maxlength="3"
							mixlength="3"
							required
						/>
					</div>
					<p style="text-align:end">Ingrese una tarjeta válida</p>
				</div>
			</div>
		</section>

		<section>
			<h2>Número de cuotas</h2>
			<div class="quotas">
				<button class="active">01</button>
				<button>02</button>
				<button>03</button>
				<button>04</button>
				<button>05</button>
				<button>06</button>
				<button>12</button>
				<button>24</button>
			</div>
		</section>

		<section class="d-flex">
			<h2>Solicitar factura</h2>
			<p>ÍCONO</p>
		</section>

		<section class="button-container">
			<div></div>
			<button class="button">Finalizar compra</button>
		</section>
	</div>
</template>

<script>
export default {
	name: 'CreditCard',
};
</script>

<style lang="scss" scoped>
.view-credit-card h2 {
	/* Box-model */
	margin-bottom: 15px;
	margin-right: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.4rem;
	font-weight: bold;
}
.view-credit-card section {
	margin-bottom: 15px;
}
.view-credit-card input {
	/* Box-model */
	padding: 10px 10px;
	border-radius: 4px;
	margin: 0 0px 20px 0;
	border-color: darkgrey;

	/*Tipografía*/
	font-family: 'roboto';
	font-size: 1.1rem;
	font-weight: bold;
}

.view-credit-card button {
	width: 97%;
	padding: 15px 0;
}
.view-credit-card p,
.card-container-number input {
	color: red;
	font-weight: bold;
}
.id-container,
.card-container,
.button-container,
.card-container1,
.card-container-number {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 10px;
}
.card-container-date,
.quotas {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
	grid-column-gap: 20px;
}
.quotas button {
	margin: 0 40px 10px 0;
	width: 100%;
	border-radius: 10px;
	background-color: rgb(223, 219, 219);
	border: darkgrey;
	color: #000425;
	font-weight: bold;

	&:hover {
		background-color: #5640ff;
		color: white;
	}
}
.active {
	background-color: #5640ff;
	color: white;
}
</style>
