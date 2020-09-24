<template>
	<div class="view-summary d-flex justify-between">
		<div>
			<section class="d-flex">
				<img
					style="max-width: 20%; max-height: 28px"
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Resumen de compra</h1>
			</section>

			<section>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div>
						<h2>Gestión de Envases, Empaques y Embalajes</h2>
						<p>Dto.25%</p>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
			</section>

			<section>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div>
						<h2>Gestión de Envases, Empaques y Embalajes</h2>
						<p>Dto.10%</p>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
			</section>

			<section>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div>
						<h2>Gestión de Envases, Empaques y Embalajes</h2>
						<p>Dto.40%</p>
						<p>Regalo para: panda@gmail.com</p>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
				<hr />
			</section>

			<section>
				<div class="totalprice">
					<h3>Precio Final</h3>
					<h3 style="text-align: end">s/600.00</h3>
				</div>
			</section>
		</div>
		<div>
			<Checkout />
		</div>
	</div>
</template>

<script>
import Checkout from '@/views/PaymentGateway/Checkout';
export default {
	name: 'PaymentSummary',
	components: {
		Checkout,
	},
};
</script>

<style>
.view-summary h1 {
	/* Box-model */
	margin-bottom: 15px;
	margin-left: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #000425;
	font-size: 1.6rem;
}
.view-summary h2 {
	/* Box-model */
	margin-bottom: 15px;
	padding-left: 20px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.3rem;
	font-weight: bold;
}
.view-summary h3 {
	/* Box-model */
	margin-bottom: 15px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.5rem;
	font-weight: bold;
}
.view-summary section {
	margin-bottom: 15px;
}
.view-summary article {
	display: grid;
	grid-template-columns: 0.45fr 2.5fr 0.5fr;
	grid-column-gap: 15px;
}
.view-summary img {
	height: 110px;
	object-fit: cover;
	border-radius: 7px;
	margin-left: 20px;
}
.view-summary p {
	color: #5640ff;
	font-weight: bold;
	font-size: 1.1rem;
	padding-left: 20px;
}
.totalprice {
	display: grid;
	grid-template-columns: 2.2fr 1fr;
}
.total h3 {
	color: #5640ff;
	font-weight: bold;
	font-size: 1.6rem;
}
.view-summary {
	padding: 100px 60px 0 80px;
}
</style>
