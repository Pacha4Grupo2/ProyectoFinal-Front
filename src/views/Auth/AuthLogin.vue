<template>
  <div class="formLogin-content">
    <SocialMediaDiv description1="iniciar sesión" description2="iniciar sesión"/>
    <form class="formAuth-login" action="#">
      <div>
        <input type="email" placeholder="Correo electronico" required />
        <input type="password" placeholder="Contraseña" required />
      </div>
      <div class="enterA">
        <button class="button btn-enterA">Ingresar</button>
        <a href="#" class="linkA">¿Olvidaste tu Contraseña?</a>
      </div>
    </form>
  </div>
</template>

<script>
import SocialMediaDiv from "./components/SocialMediaDiv";
export default {
  name: "AuthLogin",
  components: {
    SocialMediaDiv,
  },
};
</script>

<style lang="scss" scoped>

</style>