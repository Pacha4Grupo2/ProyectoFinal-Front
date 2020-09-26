<template>
	<div class="formLogin-content">
		<SocialMediaDiv
			description1="iniciar sesión"
			description2="iniciar sesión"
		/>
		<form class="formAuth-login" @submit.prevent="handleSubmit">
			<div>
				<input
					v-model="username"
					type="text"
					placeholder="Correo electronico"
					required
				/>
				<input
					v-model="password"
					type="password"
					placeholder="Contraseña"
					required
				/>
			</div>
			<div class="enterA">
				<button class="button btn-enterA">Ingresar</button>
				<a href="#" class="linkA">¿Olvidaste tu Contraseña?</a>
			</div>
		</form>
	</div>
</template>

<script>
import SocialMediaDiv from './components/SocialMediaDiv';
import { mapActions } from 'vuex';
export default {
	name: 'AuthLogin',
	components: {
		SocialMediaDiv,
	},
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		...mapActions({
			login: 'AuthStore/postLogin',
		}),
		handleSubmit() {
			this.login({
				username: this.username,
				password: this.password,
			});
		},
	},
};
</script>

<style lang="scss" scoped></style>
