<template>
<<<<<<< HEAD
  <div class="layout-payment-gateway">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "LayoutPaymentGateway",
};
</script>

<style>
</style>
=======
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
>>>>>>> b680110e15d3b56320984e656f723ae5596d1e0d
