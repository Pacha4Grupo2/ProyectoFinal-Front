<template>
	<div class="contact-form-wrapper">
		<div class="contact-form-phone">
			<div class="contact-form-container-phone">
				<div class="form-title">
					Postula y obtén un 10% de descuento en el programa
				</div>
				<div class="contact-form-GridPhone">
					<div style="position:relative;">
						<label for="name" class="input-label">NOMBRE</label>
						<input type="text" class="input-class" name="name" placeholder />
					</div>
					<div style="position:relative;">
						<label for="phone" class="input-label">CELULAR</label>
						<input
							type="number"
							name="phone"
							pattern="[0-9]*{9}"
							placeholder
							class="input-class"
							value
						/>
					</div>
					<div style="position:relative;">
						<label for="email" class="input-label">CORREO ELECTRÓNICO</label>
						<input type="email" name="email" class="input-class" placeholder />
					</div>
					<div class="form_select">
						<div class="description">PROGRAMA</div>
						<ul class="ul-class">
							<li class="item-form-select">Desarrollo Front-End</li>
							<li class="item-form-select">Desarrollo Back-End</li>
							<li class="item-form-select">
								Desarrollo de Aplicativos Móviles
							</li>
							<li class="item-form-select">
								Diseño de Experiencia del Usuario
							</li>
							<li class="item-form-select">Desarrollo de Videojuegos</li>
						</ul>
					</div>
					<label class="check-label" for="check">
						<input class="check-input" type="checkbox" value="false" />
						Acepto las
						<span style="margin-left: 3px; cursor:pointer;"
							>Políticas de Privacidad</span
						>
					</label>
					<div class="button-submit-form">Quiero Postular</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PhoneProduct',
};
</script>

<style lang="scss">
@import '@/assets/styles/mery/_phoneProduct.scss';
</style>
