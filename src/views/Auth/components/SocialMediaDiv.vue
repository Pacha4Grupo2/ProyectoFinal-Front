<template>
  <div class="form-div">
    <p>Puedes {{description1}} con:</p>
    <button class="social-icon iconfb">
      <i class="fab fa-facebook-f"></i>
    </button>
    <button class="social-icon">
      <i class="fab fa-linkedin-in"></i>
    </button>
    <p>También puedes {{description2}} con tu correo</p>
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
//iconos Fb y linkedin
.form-div {
  text-align: center;
  padding: 20px;

  p {
    color: #000;
    // padding-bottom: 20px;
    font-size: 1.4rem;
  }
}

.social-icon {
  padding: 12px;
  margin: 10px;
  // margin-bottom: 20px;
  // margin-left: 20px;
  color: #bfbfbf;
  border-radius: 5px;
  background: none;
  border: 1px solid;
  cursor: pointer;
  outline: none;
}

.iconfb {
  padding: 12px 14px;
}
</style>