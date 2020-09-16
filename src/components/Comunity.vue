<template>
	<div class="container-comunity">
		<div class="container-comunity__banner">
			<figure class="container-comunity__img">
				<img src="@/assets/images/women_laptop.png" alt="chica con laptop" />
			</figure>
			<div class="container-comunity__detail">
				<h2 class="container-comunity__detail-title">
					Sé parte de la comunidad
				</h2>
				<p class="container-comunity__detail-p">
					Programas virtuales para el desarrollo de habilidades de programación
					a lo largo de todo el Stack tecnológico.
				</p>
				<p class="container-comunity__detail-p">
					Al finalizar sabrás cómo crear una página web y desarrollar la lógica
					detrás del funcionamiento de una aplicación, así como formar parte de
					una gran comunidad de desarrolladores.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Comunity',
};
</script>

<style lang="scss">
.container-comunity {
	margin-top: 130px;
	&__banner {
		background: #3015fd;
		display: flex;
		align-items: center;
		height: 300px;
		padding: 0 9%;
		.container-comunity__img {
			height: 400px;
			margin-right: 20px;
			img {
				height: 100%;
			}
		}
		.container-comunity__detail {
			color: white;
			width: 40%;
			&-title {
				font-size: 2.8rem;
				margin-bottom: 40px;
			}
			&-p {
				font-size: 1.5rem;
				margin-bottom: 25px;
			}
		}
	}
}
</style>
