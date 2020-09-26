<template>
  <div class="formSocial-div">
    <p>Puedes {{description1}} con:</p>
    <button class="social-icon iconfb">
      <i class="fab fa-facebook-f"></i>
    </button>
    <button class="social-icon">
      <i class="fab fa-linkedin-in"></i>
    </button>
    <p>También puedes {{description2}}</p>
  </div>
</template>

<script>
export default {
  name: "SocialMediaDiv",
  props: {
    description1: String,
    description2: String,
  },
};
</script>

<style lang="scss">
</style>