<template>
<<<<<<< HEAD
  <div class="view-summary">
    <h2>VISTA SUMMARY PAGO</h2>
=======
  <div class="view-summary d-flex justify-between">
    <div>
      <section class="d-flex">
				<img style="max-width: 20%; max-height: 28px;"
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>     
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
          <h3 style="text-align:end">s/600.00</h3>
        </article>   
      </section>
    </div>
    <div>
     <Checkout /> 
    </div>    
>>>>>>> b680110e15d3b56320984e656f723ae5596d1e0d
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: "PaymentSummary",
=======
import Checkout from '@/views/PaymentGateway/Checkout';
export default {
  name: "PaymentSummary",
  components: {
    Checkout,
  }
>>>>>>> b680110e15d3b56320984e656f723ae5596d1e0d
};
</script>

<style>
<<<<<<< HEAD
=======
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
    grid-template-columns: 0.45fr 2.5fr 0.5fr;
    grid-column-gap: 15px;
  }
  img{
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
  .view-summary{
    padding: 100px 60px 0 60px;

  }

>>>>>>> b680110e15d3b56320984e656f723ae5596d1e0d
</style>