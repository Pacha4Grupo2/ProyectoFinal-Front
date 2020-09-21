<template>
	<div class="app">
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	name: 'App'
};
</script>
<style lang="scss">
@import '@/assets/styles/main.scss';

.app {
	overflow: hidden;
}
</style>
