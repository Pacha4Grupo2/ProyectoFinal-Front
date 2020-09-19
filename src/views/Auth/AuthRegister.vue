<template>
  <div class="formRegister-content">
    <SocialMediaDiv description1="registrarte" description2="registrarte" />
    <form action="#">
      <div>
        <input type="text" placeholder="Nombre y Apellidos" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <input type="password" placeholder="Repite contraseña" required />
        <div class="checkbox-container">
          <input class="checkbox" type="checkbox" name="accept" required />
          <label>Acepto Términos y condiciones</label>
        </div>
      </div>
      <button class="button">Registrarse</button>
    </form>
  </div>
</template>

<script>
import SocialMediaDiv from "./components/SocialMediaDiv";
export default {
  name: "AuthRegister",
  components: {
    SocialMediaDiv,
  },
};
</script>

<style lang="scss" scoped>
.button {
  border-style: none;
  padding: 15px;
  font-weight: bold;
  font-size: 1.5rem;
  outline: none;
  // margin-bottom: 10px;
}

.formRegister-content {
  height: 89%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

form {
  padding: 20px;
  height: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: #000;
    padding-bottom: 20px;
  }
}

input {
  padding: 15px;
  width: 88%;
  outline: none;
  margin-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox {
  width: 5%;
  margin: 0px;
  cursor: pointer;
}

</style>