<template>
	<div class="app">
		<Header></Header>
		<router-view></router-view>
	</div>
</template>
<script>
import Header from '@/components/Header.vue';
export default {
	name: 'App',
	components: { Header },
};
</script>
<style lang="scss">
@import '@/assets/styles/main.scss';
</style>
