<template>
  <div class="view-checkout">
    <h2>VISTA CHECKOUT - TAB</h2>

    <section class="d-flex">
      <p>ÍCONO</p>      
      <h1>Pasarela de pagos</h1>
    </section>

    <section>
      <h2>Selecciona tu método de pago</h2>
      <div class="button-container">
        <button class="button active">Tarjeta de crédito</button>
        <button class="button">Tarjeta de débito</button>
        <button class="button">Depósitos Pago Efectivo</button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: "checkout",
};
</script>

<style lang="scss" scoped>
/*   @import '/assets/styles/typography.scss'; */
  h1 {
    /* Box-model */
    margin-bottom: 15px;
    margin-left: 20px;
    /*Tipografía*/
    font-family: 'Poppins';
    color: #000425;
    font-size: 1.6rem;
  }
  h2 {
    /* Box-model */
    margin-bottom: 15px;
    /*Tipografía*/
    font-family: 'Poppins';
    color: #222222;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .button-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }    
  button{
    /*Box-model*/
    padding: 15px 80px;  
    margin-right: 5px;
    background-color:rgb(223, 219, 219);
    border: darkgrey;
    color:rgb(109, 105, 105);
    font-weight: bold;
    
    &:hover{
      background-color:#5640ff;
    }
  }

  .active{
    background-color:#5640ff; 
    color: white; 
  }

  p{
    color:red;
  }  
</style>