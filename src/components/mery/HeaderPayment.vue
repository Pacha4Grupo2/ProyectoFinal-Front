<template>
	<div
		class="header"
		:class="{ 'header-color': fondoColor, 'fondo-color': backColor }"
		id="header"
		@scroll="scrollProbando($event)"
	>
		<div class="container-header__menu">
			<div class="container-header_imgPachaqtec">
				<router-link to="/">
					<svg
						fill="#ffffff"
						width="150"
						viewBox="0 0 138.655 22.572"
						height="24"
						xmlns="http://www.w3.org/2000/svg"
						class="SVGIcon__CustomIcon-sc-1qhadx1-0 dztmjh"
					>
						<g transform="translate(7831 1872)">
							<path
								d="M0-84.2H0v16.952l5.879,5.62H16.662l.811-.778-1.644-1.9-.169.169H6.881L2.5-68.318V-81.7H20.041v13.377l-.31.293,1.639,1.9,1.177-1.122V-84.2Zm5.006,5.012h0v9.375l3.322,3.168h5.479l-2.151-2.5.011-.006H9.331L7.512-70.889v-5.79h7.517v3.2l2.506,2.9v-8.614Zm5.012,5.017h0v2.509h1.368l8.655,10.034h2.506v-2.509H21.178L12.523-74.17Zm0,0"
								transform="translate(-7831 -1787.802)"
							/>
							<g transform="translate(-7799.457 -1871.248)">
								<g transform="translate(0.057 0)">
									<path
										d="M125.55-55.838h-6.017v2.259h6.017Zm1.5-1.506h0v5.263h-7.513v3.765h-1.5v-9.028Zm0,0"
										transform="translate(-118.037 57.344)"
									/>
									<path
										d="M158.46-55.838H152.45v2.259h6.009Zm1.5-1.506h0v9.028h-1.5V-52.08H152.45v3.765h-1.5v-9.028Zm0,0"
										transform="translate(-139.643 57.344)"
									/>
									<path
										d="M192.887-57.344h0v1.506h-7.513v6.016h7.513v1.506h-9.01v-9.028Zm0,0"
										transform="translate(-161.264 57.344)"
									/>
									<path
										d="M218.291-52.08h0v3.765h-1.5v-9.028h1.5v3.765H224.3v-3.765h1.5v9.028h-1.5V-52.08Zm0,0"
										transform="translate(-182.871 57.344)"
									/>
									<path
										d="M257.231-55.838h-6.009v2.259h6.009Zm1.5-1.506h0v9.028h-1.5V-52.08h-6.009v3.765h-1.5v-9.028Zm0,0"
										transform="translate(-204.492 57.344)"
									/>
									<path
										d="M284.131-44.884h-1.5v-1.5h1.5Zm0,0"
										transform="translate(-226.099 50.147)"
									/>
									<path
										d="M301.194-55.838h-6.009v6.016h2.249v-1.506h1.5v1.506h2.256Zm1.5-1.506h0v9.028h-3.76v1.506h-1.5v-1.506h-3.753v-9.028Zm0,0"
										transform="translate(-233.356 57.344)"
									/>
									<path
										d="M328.095-44.884h-1.5v-1.5h1.5Zm0,0"
										transform="translate(-254.963 50.147)"
									/>
									<path
										d="M346.662-57.344h0v1.506H342.9v7.522h-1.5v-7.522h-3.753v-1.506Zm0,0"
										transform="translate(-262.221 57.344)"
									/>
									<path
										d="M379.572-57.344h0v1.506h-7.513v2.259h7.513v1.5h-7.513v2.259h7.513v1.506h-9.018v-9.028Zm0,0"
										transform="translate(-283.827 57.344)"
									/>
									<path
										d="M403.485-57.344h0v9.028H412.5v-1.506h-7.513v-6.016H412.5v-1.506Zm0,0"
										transform="translate(-305.448 57.344)"
									/>
								</g>
								<path
									d="M4.354-8.4H.924v6.3h3.43v-.677h-2.6V-4.942H4.079v-.677H1.756v-2.1h2.6Zm6.5,4.587c0-2.329-3.439-1.318-3.439-2.943,0-.677.54-1.029,1.225-1.011a1.151,1.151,0,0,1,1.235.912h.915A1.9,1.9,0,0,0,8.679-8.472c-1.262,0-2.113.7-2.113,1.743,0,2.338,3.448,1.255,3.448,2.952,0,.6-.476,1.047-1.28,1.047A1.176,1.176,0,0,1,7.417-3.777H6.53c.018,1.038.924,1.743,2.2,1.743A1.9,1.9,0,0,0,10.856-3.813Zm2.012-1.436a3.107,3.107,0,0,0,3.183,3.205A3,3,0,0,0,19-3.931h-1a2.014,2.014,0,0,1-1.957,1.174,2.3,2.3,0,0,1-2.332-2.492,2.3,2.3,0,0,1,2.332-2.5,2.008,2.008,0,0,1,1.957,1.183h1a3,3,0,0,0-2.954-1.905A3.122,3.122,0,0,0,12.868-5.249Zm8.45.831a2.213,2.213,0,0,0,2.4,2.384A2.22,2.22,0,0,0,26.12-4.418V-8.391h-.832v3.982a1.441,1.441,0,0,1-1.564,1.652,1.447,1.447,0,0,1-1.573-1.652V-8.391h-.832ZM32.037-8.4h-3.43v6.3h3.43v-.677h-2.6V-4.942h2.323v-.677H29.44v-2.1h2.6Zm2.36.009V-2.1H37.46v-.668H35.229V-8.391ZM43.725-2.1H44.6l-2.3-6.257h-.96L39.042-2.1h.878l.512-1.4h2.78Zm-.75-2.068h-2.3l1.152-3.178ZM52.23-8.391H50.246V-2.1H52.23c2.094,0,3.384-1.183,3.384-3.133S54.324-8.391,52.23-8.391ZM51.078-2.775V-7.723H52.23a2.285,2.285,0,0,1,2.533,2.492A2.259,2.259,0,0,1,52.23-2.775ZM61.238-8.4h-3.43v6.3h3.43v-.677h-2.6V-4.942h2.323v-.677H58.641v-2.1h2.6Zm5.588,3.151a3.107,3.107,0,0,0,3.183,3.205,3,3,0,0,0,2.954-1.887h-1a2.014,2.014,0,0,1-1.957,1.174,2.3,2.3,0,0,1-2.332-2.492,2.3,2.3,0,0,1,2.332-2.5,2.008,2.008,0,0,1,1.957,1.183h1a3,3,0,0,0-2.954-1.905A3.122,3.122,0,0,0,66.826-5.249Zm14.56,0a3.119,3.119,0,0,0-3.2-3.214,3.124,3.124,0,0,0-3.2,3.214,3.124,3.124,0,0,0,3.2,3.214A3.119,3.119,0,0,0,81.386-5.249Zm-5.551,0a2.307,2.307,0,0,1,2.35-2.5,2.307,2.307,0,0,1,2.35,2.5,2.312,2.312,0,0,1-2.35,2.5A2.312,2.312,0,0,1,75.835-5.249Zm9.731-3.142H83.581V-2.1h1.985c2.094,0,3.384-1.183,3.384-3.133S87.66-8.391,85.565-8.391ZM84.413-2.775V-7.723h1.152A2.285,2.285,0,0,1,88.1-5.231a2.259,2.259,0,0,1-2.533,2.456Zm6.731.677h.832V-8.391h-.832Zm7.527-6.3v5l-3.347-5h-.832v6.3h.832V-7.109L98.671-2.1H99.5V-8.4Zm6.237-.063a3.124,3.124,0,0,0-3.2,3.214,3.116,3.116,0,0,0,3.2,3.205,3.076,3.076,0,0,0,3.128-2.817v-.632h-3.43v.668h2.542a2.138,2.138,0,0,1-2.241,2.041,2.3,2.3,0,0,1-2.35-2.465,2.3,2.3,0,0,1,2.35-2.474,2.037,2.037,0,0,1,1.939,1.156h1A3.015,3.015,0,0,0,104.908-8.463Z"
									transform="translate(-0.924 23.164)"
								/>
							</g>
						</g>
					</svg>
				</router-link>
			</div>
			<div class="container-header_modal-header">
				<router-link to="/pago/carrito-de-compras">
					<div class="container-carrito">
						<div class="numeros-cursos">{{ totalProducts.length }}</div>
						<img
							class="carrito"
							src="data:image/png;base64,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"
						/>
					</div>
				</router-link>
				<div
					class="TypesOfFlex__ContainerIcon-rpidrp-0 iXEhxN"
					@click="getModal"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="#ffffff"
						height="24"
						width="24"
						viewBox="0 0 24 24"
					>
						<rect opacity="0" transform="translate(24 24) rotate(180)" />
						<rect width="18" height="2" rx="0.95" transform="translate(3 11)" />
						<rect width="18" height="2" rx="0.95" transform="translate(3 16)" />
						<rect width="18" height="2" rx="0.95" transform="translate(3 6)" />
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
	name: 'Header',
	comments: {},
	data() {
		return {
			fondoColor: true,
		};
	},
	computed: {
		...mapState({
			backColor: (state) => state.HomeStore.backColor,
			totalProducts: (state) => state.HomeStore.totalProducts,
		}),
	},
	methods: {
		scrollProbando: function(e) {
			this.altura = e.path[1].scrollY;
			// if (e.path[1].scrollY > 2) {
			// 	this.fondoColor = true;
			// } else {
			// 	this.fondoColor = false;
			// }
		},
		...mapActions({
			getModal: 'HomeStore/getModal',
		}),
	},
	created: function() {
		window.addEventListener('scroll', this.scrollProbando);
	},
	destroyed: function() {
		window.removeEventListener('scroll', this.scrollProbando);
	},
};
</script>

<style lang="scss"></style>
