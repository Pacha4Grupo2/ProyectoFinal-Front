<template>
	<div>
		<Header />
		<router-view></router-view>
	</div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	name: 'HomeLayout',
	components: { Header },
};
</script>

<style></style>
