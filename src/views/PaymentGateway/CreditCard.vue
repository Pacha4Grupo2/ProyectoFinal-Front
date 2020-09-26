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
			<div class="number-container">
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
						class="credit-card-number"
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
				<button id="cuota1" >01</button>
				<button id="cuota2">02</button>
				<button id="cuota3">03</button>
				<button id="cuota4">04</button>
				<button id="cuota5">05</button>
				<button id="cuota6">06</button>
				<button id="cuota12">12</button>
				<button id="cuota24">24</button>
			</div><br><br>
		</section>

		<section class="factura d-flex">
			<h2>Solicitar factura</h2>
			<button>No</button>
			<button>Sí</button>			
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

<style lang="scss" >
@import '@/assets/styles/_creditCard.scss';

</style>
