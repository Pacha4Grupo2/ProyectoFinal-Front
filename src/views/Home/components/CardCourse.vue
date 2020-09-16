<template>
	<div class="container-main">
		<div class="container-cursos">
			<h2 class="container-cursos__title">
				Conoce nuestros Programas de Especialización
			</h2>
			<div class="container-cursos__list">
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
				<div class="curso">
					<figure>
						<img src="@/assets/images/front_end.png" alt="front-end" />
						<div class="curso__ditail">
							<p>Programa de especialización en</p>
							<h3 class="curso__title">Desarrollo Front-End</h3>
						</div>
					</figure>
				</div>
			</div>
		</div>
		<div class="container-comunidad"></div>
		<div class="container-beneficios"></div>
	</div>
</template>

<script>
export default {
	name: 'CardCourse',
};
</script>

<style lang="scss">
.container-main {
	width: 100%;
	.container-cursos {
		width: 1200px;
		margin: 0 auto;
		&__title {
			color: #000425;
			font-size: 2.8rem;
			margin-bottom: 40px;
			font-weight: bold;
		}
		&__list {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			width: 70%;
			.curso {
				position: relative;
				height: 320px;
				cursor: pointer;
				margin: 2% 3% 2% 0;
				figure {
					height: 320px;

					img {
						height: 100%;
						filter: brightness(0.4);
					}
					.curso__ditail {
						position: absolute;
						bottom: 15%;
						left: 2%;
						color: white;
						.curso__title {
							font-size: 1.8rem;
							font-weight: bold;
						}
						p {
							font-size: 1.4rem;
							margin-bottom: 5px;
						}
					}
				}
			}
		}
	}
}
</style>
