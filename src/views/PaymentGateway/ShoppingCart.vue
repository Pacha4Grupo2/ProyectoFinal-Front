<template>
	<div class="view-shopping-cart">
		<div class="shopping-cart-title">
			<section class="d-flex">
				<img style="max-width: 4%; 	max-height: 28px;"
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Carrito de compras</h1>
			</section>
		</div>
		<div class="d-flex">
			<section class="section1">
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div class="d-flex flex-column justify-between">
						<div>
							<h2>Gestión de Envases, Empaques y Embalajes</h2>
							<p>Dto.25%</p>
						</div>
						<a href="">Eliminar</a>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>

				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div class="d-flex flex-column justify-between">
						<div>
							<h2>Gestión de Envases, Empaques y Embalajes</h2>
							<p>Dto.10%</p>
						</div>
						<a href="">Eliminar</a>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div class="d-flex flex-column justify-between">
						<div>
							<h2>Gestión de Envases, Empaques y Embalajes</h2>
							<p>Dto.10%</p>
						</div>
						<a href="">Eliminar</a>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div class="d-flex flex-column justify-between">
						<div>
							<h2>Gestión de Envases, Empaques y Embalajes</h2>
							<p>Dto.10%</p>
						</div>
						<a href="">Eliminar</a>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
				<article>
					<img src="https://pachaqtec.edu.pe/images/front_end.webp" />
					<div class="d-flex flex-column justify-between">
						<div>
							<h2>Gestión de Envases, Empaques y Embalajes</h2>
							<p>Dto.40%</p>
							<br />
							<p>Regalo para: panda@gmail.com</p>
						</div>

						<a href="">Eliminar</a>
					</div>
					<div>
						<h3>s/269.00</h3>
					</div>
				</article>
			</section>

			<section class="section2">
				<div class="section2-container d-flex flex-column">
					<div class="section2-price d-flex justify-between">
						<h3>Subtotal</h3>
						<h3>s/600.00</h3>
					</div>
					<input type="text" placeholder="Agrega un código de descuento" />
					<button class="button">Continuar</button>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ShoppingCart',
};
</script>

<style scoped>
h1 {
	/* Box-model */
	margin-bottom: 15px;
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
	font-size: 1.3rem;
	font-weight: bold;

}
h3 {
	/* Box-model */
	margin-bottom: 15px;
	/*Tipografía*/
	font-family: 'Poppins';
	color: #222222;
	font-size: 1.5rem;
	font-weight: bold;
}
section,
article {
	margin-bottom: 15px;
}
article {
	display: grid;
	grid-template-columns: 0.23fr 0.6fr 0.2fr;

}
img {
	width: 90%;
	height: 110px;
	object-fit: cover;
	border-radius: 7px;
}
p,
a {
	color: #5640ff;
	font-weight: bold;
	font-size: 1.1rem;
}
input {
	/* Box-model */
	padding: 10px 10px;
	border-radius: 4px;
	margin-bottom: 30px;
	border-color: darkgrey;
	width: 93%;

	/*Tipografía*/
	font-family: 'roboto';
	font-size: 1rem;
	font-weight: bold;
}
.section2-container {
	border: solid 1px rgb(86, 88, 86);
	padding: 57px 35px 55px 35px;
	position: fixed;
}
.section2-price h3 {
	color: #5640ff;
	font-weight: bold;
	font-size: 1.9rem;
}
.section2-price {
	margin-bottom: 15px;
}
.view-shopping-cart{
	padding: 100px 40px 0 40px;
}
.shopping-cart-title{
	margin-bottom: 28px;
}
</style>
