<template>
  <div class="view-shopping-cart">
    <div class="d-flex">
      <section class="section1">
        <article v-for="producto in totalProducts" :key="producto.id">
          <img :src="producto.imagen_card" />
          <div class="d-flex flex-column justify-between">
            <div>
              <h2>{{ producto.nombre }}</h2>
              <p>Dto. {{ producto.descuento }}%</p>
            </div>
            <button class="btn-eliminar" @click="confirmDelete(producto.id)">
              Eliminar
            </button>
          </div>
          <div>
            <h3>S/. {{ producto.precio }}</h3>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "ShoppingCart",
  computed: {
    ...mapState({
      totalProducts: (state) => state.HomeStore.totalProducts,
    }),
  },
  methods: {
    ...mapActions({
      eliminar: "HomeStore/eliminar",
    }),
    confirmDelete(id) {
      this.$swal({
        title: "Deseas eliminar este producto?",
        showDenyButton: true,

        confirmButtonText: `SI`,
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
          this.eliminar(id);
        }
      });
    },
  },
};
</script>

<style scoped>
.btn-eliminar {
  border-radius: 10px;
  cursor: pointer;
  background-color: transparent;
  font-family: "Roboto";
  color: #5640ff;
  display: inline-block;
  text-align: left;
  border: none;
  outline: none;
  text-decoration-line: underline;
  font-weight: bold;
}
.view-shopping-cart h1 {
  /* Box-model */
  margin-bottom: 15px;
  margin-left: 20px;
  /*Tipografía*/
  font-family: "Poppins";
  color: #000425;
  font-size: 1.6rem;
}
.view-shopping-cart h2 {
  /* Box-model */
  margin-bottom: 15px;
  /*Tipografía*/
  font-family: "Poppins";
  color: #222222;
  font-size: 1.3rem;
  font-weight: bold;
}
.view-shopping-cart h3 {
  /* Box-model */
  margin-bottom: 15px;
  /*Tipografía*/
  font-family: "Poppins";
  color: #222222;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: end;
}
.view-shopping-cart section,
.view-shopping-cart article {
  margin-bottom: 15px;
}
.view-shopping-cart article {
  display: grid;
  grid-template-columns: 0.23fr 0.6fr 0.2fr;
}
.view-shopping-cart img {
  width: 90%;
  height: 110px;
  object-fit: cover;
  border-radius: 7px;
}
.view-shopping-cart p,
.view-shopping-cart a {
  color: #5640ff;
  font-weight: bold;
  font-size: 1.1rem;
}
.view-shopping-cart input {
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
.view-shopping-cart {
  padding: 15px 50px 0 40px;
}
.shopping-cart-title {
  margin-bottom: 28px;
}
</style>
