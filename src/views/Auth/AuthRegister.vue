<template>
	<div class="formRegister-content">
		<SocialMediaDiv description1="registrarte" description2="registrarte" />
		<form class="formAuth-register" @submit.prevent="handleRegister">
			<div>
				<input
					v-model="nombre"
					type="text"
					placeholder="Nombre y Apellidos"
					required
				/>
				<input
					v-model="email"
					type="email"
					placeholder="Correo electrónico"
					required
				/>
				<input
					v-model="password"
					type="password"
					placeholder="Contraseña"
					required
				/>
				<input
					v-model="verifyPassword"
					type="password"
					placeholder="Repite contraseña"
					required
				/>
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
import { mapActions } from 'vuex';
export default {
	name: 'AuthRegister',
	components: {
		SocialMediaDiv,
	},
	data() {
		return {
			nombre: '',
			email: '',
			password: '',
			verifyPassword: '',
		};
	},
	methods: {
		...mapActions({
			postRegister: 'AuthStore/postRegister',
		}),
		handleRegister() {
			if (this.password !== this.verifyPassword) {
				alert('Password no coincide. Por favor intentelo de nuevo');
				return;
			}

			this.postRegister({
				username: 'arthur', // ARREGLAR ESTO!!
				nombre: this.nombre,
				email: this.email,
				password: this.password,
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
