<template>
  <div class="layout-cart">
		<div class="shopping-cart-title">
			<section class="d-flex">
				<img style="max-width: 4%; 	max-height: 28px;"
					src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
				/>
				<h1>Carrito de compras</h1>
			</section>
  </div>  

  <div class="layout-cart1">  
    <section>
      <ShoppingCart />
    </section>
    <section >
      <ShoppingCartTotal />
    </section>
  </div>
</div>  
</template>

<script>

import ShoppingCart from "@/views/PaymentGateway/ShoppingCart";
import ShoppingCartTotal from "@/views/PaymentGateway/ShoppingCartTotal";
export default {
  name: "ShoppingCartMain",
  components: {  
    ShoppingCart,
    ShoppingCartTotal,
  }
}
</script>

<style>
.shopping-cart-title h1 {
    /* Box-model */
    margin-bottom: 15px;
    margin-left: 20px;
    /*Tipografía*/
    font-family: 'Poppins';
    color: #000425;
    font-size: 1.6rem;
  }

  .layout-cart{
    padding: 100px 90px 0 40px;
  }
  .layout-cart1{
    display: grid;
    grid-template-columns: 1.5fr 0.7fr;
    grid-column-gap: 40px;
  }

</style>