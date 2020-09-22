<template>
	<div class="formRegister-content">
		<SocialMediaDiv description1="registrarte" description2="registrarte" />
		<form class="formAuth-register" action="#">
			<div>
				<input type="text" placeholder="Nombre y Apellidos" required />
				<input type="email" placeholder="Correo electrónico" required />
				<input type="password" placeholder="Contraseña" required />
				<input type="password" placeholder="Repite contraseña" required />
				<div class="checkboxA-container">
					<input class="checkboxA" type="checkbox" name="accept" required />
					<label>Acepto Términos y condiciones</label>
				</div>
			</div>
			<button class="button btn-registerA">Registrarse</button>
		</form>
	</div>
</template>

<script>
import SocialMediaDiv from './components/SocialMediaDiv';
export default {
	name: 'AuthRegister',
	components: {
		SocialMediaDiv,
	},
};
</script>

<style lang="scss" scoped></style>
