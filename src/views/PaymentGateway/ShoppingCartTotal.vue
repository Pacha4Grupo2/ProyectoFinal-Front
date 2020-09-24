<template>
  <div class="view-shopping-cart-total">
    <section class="section2">
      <div class="section2-container d-flex flex-column">
        <div class="section2-price d-flex justify-between">
          <h4>Subtotal</h4>
          <h4>S/. {{ totalPrice }}</h4>
        </div>
        <input type="text" placeholder="Agrega un código de descuento" />
        <button class="button">Continuar</button>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShoppingCartTotal",
  computed: {
    ...mapState({
      totalPrice: (state) => state.HomeStore.tatalPrice,
    }),
  },

  methods: {
    ...mapActions({
      getPriceTotal: "HomeStore/getPriceTotal",
    }),
  },
  mounted() {
    this.getPriceTotal();
  },
};
</script>

<style scoped>
.view-shopping-cart-total input {
  /* Box-model */
  padding: 10px 10px;
  border-radius: 4px;
  margin-bottom: 30px;
  border-color: darkgrey;
  width: 93%;

  /*Tipografía*/
  font-family: "roboto";
  font-size: 1rem;
  font-weight: bold;
}
.section2-container {
  border: solid 1px rgb(86, 88, 86);
  padding: 47px 35px 55px 35px;
}
.section2-price h4 {
  color: #5640ff;
  font-weight: bold;
  font-size: 2.3rem;
}
.section2-price {
  margin-bottom: 15px;
}
.button {
  padding: 10px 0;
}
</style>
