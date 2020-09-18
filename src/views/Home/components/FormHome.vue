<template>
	<div class="container-form">
		<h2>Postula y obtén un 10% de descuento en el programa</h2>
		<form class="form">
			<input type="text" class="input" placeholder="Nombre" />
			<input type="number" class="input" placeholder="Celular" />
			<input type="email" class="input" placeholder="Correo Electronico" />
			<select id="cursos" name="cursos" class="desple">
				<option>Desarrollo Front-End</option>
				<option>Desarrollo Back-End</option>
				<option>Desarrollo de Aplicativos Móviles</option>
				<option>Diseño de Experiencia del Usuario</option>
				<option>Desarrollo de Videojuegos</option>
			</select>
		</form>
	</div>
</template>

<script>
export default {
	name: 'FormHome',
};
</script>
<style lang="scss">
@import '@/assets/styles/_typography.scss';
.container-form {
	display: none;
	h2 {
		font-size: 1.8rem;
		font-family: map-get($f-family, primary);
		margin-bottom: 20px;
		text-align: left;
		margin-left: 41px;
		font-weight: bold;
	}
	.form {
		display: flex;
		flex-direction: column;
		align-items: center;
		.input {
			height: 25px;
			width: 90%;
			margin-bottom: 15px;
			border: 1px solid rgb(0, 0, 0);
			border-radius: 6px;
			padding: 12px;
			outline: none;
			font-size: 12px;
			background: none;
			color: rgb(0, 0, 0);
		}
		.desple {
			height: 50px;
			width: 93%;
			border: 1px solid rgb(139, 144, 153);
			border-radius: 6px;
			padding: 12px;
			outline: none;
			font-size: 12px;
			background: none;
			color: rgb(0, 0, 0);
			margin-bottom: 20px;
			option {
				padding: 12px;
				outline: none;
				font-size: 12px;
				background: none;
				color: black;
				font-weight: bold;
			}
		}
	}
}

@media only screen and (max-width: 1100px) {
	.container-form {
		display: block;
	}
}
@media only screen and (max-width: 540px) {
	.container-form {
		display: block;
		h2 {
			margin-left: 15px;
			font-size: 1.3rem;
			line-height: 1.5;
		}
		.form {
			.desple {
				width: 97%;
			}
		}
	}
}
</style>
