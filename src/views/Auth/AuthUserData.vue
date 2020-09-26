<template>
    <div class="formLogin-content">
      <div>
        <h3>{{user.username}}</h3>
      </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "AuthUserData",
    methods:{
      ...mapState({
        isLogin: (state) => state.AuthStore.isLogin,
        user: (state) => state.AuthStore.user,
      }),
  }
};
</script>
<style lang="scss">

</style>