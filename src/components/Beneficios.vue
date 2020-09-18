<template>
	<div class="beneficios">
		<div class="container-beneficios">
			<h2 class="container-beneficios__title">Beneficios</h2>
			<div class="container-beneficios__description">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#5640FF"
					height="60"
					width="60"
					viewBox="0 0 60 60"
				>
					<rect width="60" height="60" opacity="0"></rect>
					<path
						d="M15,23A10,10,0,1,0,5,13,10,10,0,0,0,15,23ZM15,8a5,5,0,1,1-5,5A5,5,0,0,1,15,8Z"
						transform="translate(7.5 4.5)"
					></path>
					<path
						d="M21.5,22A7.5,7.5,0,1,0,14,14.5,7.5,7.5,0,0,0,21.5,22Zm0-10A2.5,2.5,0,1,1,19,14.5,2.5,2.5,0,0,1,21.5,12Z"
						transform="translate(21 10.5)"
					></path>
					<path
						d="M39.5,15.486a12.5,12.5,0,0,0-7.65,2.625A17.5,17.5,0,0,0,2,30.486a2.5,2.5,0,1,0,5,0,12.5,12.5,0,0,1,25,0,2.5,2.5,0,0,0,5,0,17.25,17.25,0,0,0-2.15-8.375A7.5,7.5,0,0,1,47,27.986a2.5,2.5,0,1,0,5,0A12.5,12.5,0,0,0,39.5,15.486Z"
						transform="translate(3 19.514)"
					></path>
				</svg>
				<div class="container-beneficios__description-detail">
					<h3 class="container-beneficios__description-detail__title">
						Aprende de Expertos
					</h3>
					<p class="container-beneficios__description-detail__p">
						Aprende directamente de expertos del mercado a través del análisis y
						solución de problemas de programación. Utilizando los frameworks y
						herramientas de mayor relevancia dentro del mundo del coding.
					</p>
				</div>
			</div>
			<div class="container-beneficios__description">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="#5640FF"
					height="60"
					width="60"
					viewBox="0 0 60 60"
				>
					<rect opacity="0" width="60" height="60"></rect>
					<path
						d="M49.6,3H10.4C5.761,3,2,7.029,2,12V36c0,4.971,3.761,9,8.4,9H27.2v6H16a3.007,3.007,0,0,0,0,6H44a3.007,3.007,0,0,0,0-6H32.8V45H49.6c4.639,0,8.4-4.029,8.4-9V12C58,7.029,54.239,3,49.6,3Zm2.8,33a2.905,2.905,0,0,1-2.8,3H10.4a2.905,2.905,0,0,1-2.8-3V12a2.905,2.905,0,0,1,2.8-3H49.6a2.905,2.905,0,0,1,2.8,3Z"
						transform="translate(0 0)"
					></path>
				</svg>
				<div class="container-beneficios__description-detail">
					<h3 class="container-beneficios__description-detail__title">
						Clases Virtuales
					</h3>
					<p class="container-beneficios__description-detail__p">
						Aprovecha tu tiempo al máximo en nuestras clases virtuales y
						participa de nuestras hackathones semanales para conocer y
						participar de la comunidad profesional que liderará la
						transformación tecnológica del Perú.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Beneficios',
};
</script>
<style lang="scss">
.beneficios {
	width: 100%;
	margin-top: 100px;
	margin-bottom: 100px;
	display: flex;
	justify-content: center;
	.container-beneficios {
		width: 40%;
		display: flex;
		flex-direction: column;
		margin-right: 25%;
		h2 {
			font-size: 2.8rem;
			color: #000425;
			font-weight: bold;
			text-align: left;
		}
		.container-beneficios__description {
			display: flex;
			align-items: center;
			background-color: #f2f3f5;
			padding: 15px;
			margin-top: 25px;
			width: 100%;
			svg {
				width: 150px;
				margin: 20px;
			}
			&-detail {
				&__title {
					font-size: 1.8rem;
					font-weight: 500;
					margin-bottom: 15px;
				}
				&__p {
					font-size: 1.5rem;
					font-weight: 400;
					line-height: 1.5;
				}
			}
		}
	}
}
@media only screen and (max-width: 1679px) {
	.beneficios {
		.container-beneficios {
			width: 50%;
			margin-right: 15%;
			h2 {
				font-size: 1.8rem;
				color: #000425;
				font-weight: bold;
			}
			.container-beneficios__description {
				display: flex;
				align-items: center;
				background-color: #f2f3f5;
				padding: 15px;
				margin-top: 25px;
				width: 100%;
				svg {
					width: 150px;
					margin: 20px;
				}
				&-detail {
					&__title {
						font-size: 1.5rem;
						font-weight: 500;
						margin-bottom: 15px;
					}
					&__p {
						font-size: 1.2rem;
						font-weight: 400;
						line-height: 1.5;
					}
				}
			}
		}
	}
}

@media only screen and (max-width: 1062px) {
	.beneficios {
		.container-beneficios {
			width: 60%;
			margin-right: 5%;
			h2 {
				font-size: 1.8rem;
				color: #000425;
				font-weight: bold;
			}
			.container-beneficios__description {
				display: flex;
				align-items: center;
				background-color: #f2f3f5;
				padding: 15px;
				margin-top: 25px;
				width: 100%;
				svg {
					width: 150px;
					margin: 20px;
				}
				&-detail {
					&__title {
						font-size: 1.5rem;
						font-weight: 500;
						margin-bottom: 15px;
					}
					&__p {
						font-size: 1.2rem;
						font-weight: 400;
						line-height: 1.5;
					}
				}
			}
		}
	}
}

@media only screen and (max-width: 448px) {
	.beneficios {
		.container-beneficios {
			width: 60%;
			margin-right: 5%;
			h2 {
				font-size: 1.8rem;
				color: #000425;
				font-weight: bold;
			}
			.container-beneficios__description {
				display: flex;
				align-items: center;
				flex-direction: column;
				background-color: #f2f3f5;
				padding: 15px;
				margin-top: 25px;
				width: 100%;
				svg {
					width: 150px;
					margin: 20px;
				}
				&-detail {
					&__title {
						font-size: 1.5rem;
						font-weight: 500;
						margin-bottom: 15px;
					}
					&__p {
						font-size: 1.2rem;
						font-weight: 400;
						line-height: 1.5;
					}
				}
			}
		}
	}
}
</style>
