<template>
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
    <!-- <div class="enter"> -->
    <button class="button">Ingresar</button>
    <!-- </div> -->
  </form>
</template>

<script>
export default {
  name: "AuthRegister",
};
</script>

<style lang="scss" scoped>
.button {
  border-style: none;
  padding: 15px;
  font-weight: bold;
  font-size: 1.5rem;
  outline: none;
  margin-bottom: 10px;
}

form {
  padding: 20px;
  height: 60%;
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

.enter {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>