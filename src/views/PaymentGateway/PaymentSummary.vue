<template>
  <div class="view-summary">
    <h2>VISTA SUMMARY PAGO</h2>

    <section class="d-flex">
      <p>ÍCONO</p>      
      <h1>Resumen de compra</h1>
    </section>

    <section>
      <article>
        <img src="https://pachaqtec.edu.pe/images/front_end.webp">
        <div>
          <h2>Gestión de Envases, Empaques y Embalajes</h2>
          <p>Dto.25%</p>
        </div>
        <div>
          <h3>s/269.00</h3>
        </div>  
      </article>
    </section> 

    <section>
      <article>
        <img src="https://pachaqtec.edu.pe/images/front_end.webp">
        <div>
          <h2>Gestión de Envases, Empaques y Embalajes</h2>
          <p>Dto.10%</p>
        </div>
        <div>
          <h3>s/269.00</h3>
        </div>  
      </article>
    </section>

    <section>
      <article>
        <img src="https://pachaqtec.edu.pe/images/front_end.webp">
        <div>
          <h2>Gestión de Envases, Empaques y Embalajes</h2>
          <p>Dto.40%</p>
          <p>Regalo para: panda@gmail.com </p>
        </div>
        <div>
          <h3>s/269.00</h3>
        </div>  
      </article>
      <hr>      
    </section> 

    <section>
      <article class="total">
        <h3>Precio Final</h3>
        <h3>s/600.00</h3>
      </article>   
    </section>
  </div>
</template>

<script>
export default {
  name: "PaymentSummary",
};
</script>

<style>
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
    font-size: 1.3rem;
    font-weight: bold;
  }
  h3 {
    /* Box-model */
    margin-bottom: 15px;
    /*Tipografía*/
    font-family: 'Poppins';
    color: #222222;
    font-size: 1.5rem;
    font-weight: bold;
  }
  section{
    margin-bottom: 15px;
  }  
  article{
    display: grid;
    grid-template-columns: 0.7fr 1.5fr 1fr;
/*  grid-template-columns:repeat(auto-fit, minmax(30px, 1fr)); */
  }
  img{
    width: 90%;
    height: 110px;
    object-fit: cover;
    border-radius: 7px;
  }
  p{
    color: #5640ff;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .total {
    display: grid;
    grid-template-columns: 2.2fr 1fr;    
  }
  .total h3{
    color: #5640ff;
    font-weight: bold;
    font-size: 1.6rem;
  }

</style>