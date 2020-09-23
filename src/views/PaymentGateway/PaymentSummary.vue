<template>
	<div class="view-summary d-flex justify-between">
		<div>
			<section class="d-flex">
				<img
					style="max-width: 20%; max-height: 28px;"
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
					<h3 style="text-align:end">s/600.00</h3>
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

<style lang="scss" scoped>
@import '@/assets/styles/_paymentSummary.scss';
</style>
