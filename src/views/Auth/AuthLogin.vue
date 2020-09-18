<template>
  <form action="#">
    <div>
      <input type="email" placeholder="Correo electronico" required />
      <input type="password" placeholder="Contraseña" required/>
    </div>
    <div class="enter">
      <button class="button">Ingresar</button>
      <a href>¿Olvidaste tu Contraseña?</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "AuthLogin",
};
</script>

<style lang="scss" scoped>
.button {
  border-style: none;
  padding: 15px;
  width: 100%;
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

.enter {
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 20px;
}

a {
  font-weight: bold;
  text-align: center;
}
</style>