<template>
	<div class="layout-payment-gateway">
		<Header />
		<Menu v-if="modal" />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/mery/HeaderPayment';
import Menu from '@/components/Menu';

import { mapState } from 'vuex';
export default {
	name: 'LayoutPaymentGateway',
	components: {
		Header,
		Menu,
	},
	computed: {
		...mapState({
			modal: (state) => state.HomeStore.modal,
		}),
	},
};
</script>

<style></style>
