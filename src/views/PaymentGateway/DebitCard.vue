<template>
  <div class="view-debit-card">
    <h2>VISTA DEBIT CARD</h2>

    <section>
      <h2>Datos personales</h2>      
      <div class="id-container">
        <input id="" name="DNI" type="text" placeholder="Documento de identidad" pattern="[A-Z0-9 ]+" required>
        <input id="" name="email" type="email" placeholder="Correo electrónico" required>        
      </div>
    </section>

    <section>
      <h2>Ingresa la información de tu tarjeta</h2> 
      <div class="card-container">           
        <div>
          <input class="card-container-name" name="name" type="text" placeholder="Nombres y apellidos" pattern="[A-Z ]+" required>
          <div class="card-container-date">
            <input id="" name="cardmonth" type="number" placeholder="Mes" pattern="[0-9]+" maxlength="2" mixlength="2" required>
            <input id="" name="cardyear" type="number" placeholder="Año" pattern="[0-9]+" maxlength="4" mixlength="4" required>
            <input id="" name="cardcvv" type="number" placeholder="Cvv" pattern="[0-9]+" maxlength="3" mixlength="3" required>
          </div>
        </div>
        <div class="card-container-number">
          <input id="debit-card-number" name="cardnumber" type="number" placeholder="Número de tarjeta" maxlength="16" mixlength="16" required>                
          <p>Ingrese una tarjeta válida</p>
        </div>
      </div>  
    </section>       
    
    <section class="d-flex">
      <h2>Solicitar factura</h2>
      <p>ÍCONO</p>
    </section>

    <section class="button-container">
      <div></div>
      <button class="button">Finalizar compra</button>
    </section>
            
  </div>
</template>
<script>
export default {
  name: "DebitCard",
};
</script>

<style lang="scss" scoped>
  h2 {
    /* Box-model */
    margin-bottom: 15px;
    margin-right: 20px;
    /*Tipografía*/
    font-family: 'Poppins';
    color: #222222;
    font-size: 1.4rem;
    font-weight: bold;
  }
  section{
    margin-bottom: 20px;
  }
  input {
    /* Box-model */
    padding: 10px 10px;
    border-radius: 4px;
    margin: 0 30px 10px 0;
    border-color:darkgrey;


    /*Tipografía*/
    font-family: 'roboto';
    font-size: 1rem;
    font-weight: bold;
  }

  button{
    width: 97%;
    padding: 15px 0;
  }
  p,
  .card-container-number input{
    color: red;
    font-weight: bold;
  }
  .id-container,
  .card-container,
  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;    
  }
/*   .card-container.name //corregir esto
  .card-container.number {
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(30px, 1fr));
  } */
  
  .card-container-date{
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(30px, 1fr));
  }
  
</style>