<template>
	<div class="formLogin-content">
		<div>
			<h3>{{ user.username }}</h3>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'AuthUserData',
	computed: {
		...mapState({
			user: (state) => state.AuthStore.user,
		}),
	},
	methods: {},
};
</script>
<style lang="scss"></style>
