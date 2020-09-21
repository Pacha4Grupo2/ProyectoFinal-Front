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

<style lang='scss'>
@import '@/assets/styles/_shoppingCartMain.scss';

</style>