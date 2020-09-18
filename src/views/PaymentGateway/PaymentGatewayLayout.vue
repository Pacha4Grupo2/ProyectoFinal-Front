<template>
	<div class="layout-payment-gateway">
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/mery/HeaderPayment';
export default {
	name: 'LayoutPaymentGateway',
	components: {
		Header,
	},
};
</script>

<style></style>
