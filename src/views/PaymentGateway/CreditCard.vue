<template>
  <div class="view-credit-card">
    <form @submit.prevent="handleSubmit">
      <section>
        <h2>Datos personales</h2>
        <div class="id-container">
          <input
            name="DNI"
            type="text"
            placeholder="Documento de identidad"
            pattern="[A-Z0-9 ]+"
            required
            v-model="form.document"
          />
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            v-model="form.email"
            data-culqi="card[email]"
            id="card[email]"
          />
        </div>
      </section>

      <section>
        <h2>Ingresa la información de tu tarjeta</h2>
        <div class="number-container">
          <div class="card-container1">
            <input
              class="card-container-name"
              name="name"
              type="text"
              placeholder="Nombres y apellidos"
              pattern="[A-Za-z ]+"
              required
              v-model="form.creditCardName"
            />
            <input
              class="credit-card-number"
              name="cardnumber"
              type="number"
              placeholder="Número de tarjeta"
              maxlength="16"
              mixlength="16"
              required
              v-model="form.creditCardNumber"
              data-culqi="card[number]"
              id="card[number]"
            />
          </div>
          <div class="card-container-number">
            <div class="card-container-date">
              <input
                name="cardmonth"
                type="number"
                placeholder="Mes"
                pattern="[0-9]+"
                maxlength="2"
                mixlength="2"
                required
                v-model="form.creditCardMonth"
                data-culqi="card[exp_month]"
                id="card[exp_month]"
              />
              <input
                name="cardyear"
                type="number"
                placeholder="Año"
                pattern="[0-9]+"
                maxlength="4"
                mixlength="4"
                required
                v-model="form.creditCardYear"
                data-culqi="card[exp_year]"
                id="card[exp_year]"
              />
              <input
                name="cardcvv"
                type="number"
                placeholder="Cvv"
                pattern="[0-9]+"
                maxlength="3"
                mixlength="3"
                required
                v-model="form.creditCardCVV"
                data-culqi="card[cvv]"
                id="card[cvv]"
              />
            </div>
            <p style="text-align: end">Ingrese una tarjeta válida</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Número de cuotas</h2>
        <div class="quotas">
          <select v-model="form.totalDues">
            <option v-for="(due, id) in dues" :value="due.value" :key="id">
              {{ due.text }}
            </option>
          </select>
        </div>
        <br /><br />
      </section>

      <section class="factura d-flex">
        <h2>Solicitar factura</h2>
        <button @click="form.invoice = false">No</button>
        <button @click="form.invoice = true">Sí</button>
      </section>

      <section class="button-container">
        <button class="button">Finalizar compra</button>
      </section>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CreditCard",
  data() {
    return {
      dues: [
        {
          text: "01",
          value: 1,
        },
        {
          text: "02",
          value: 2,
        },
        {
          text: "03",
          value: 3,
        },
        {
          text: "04",
          value: 4,
        },
        {
          text: "05",
          value: 5,
        },
        {
          text: "06",
          value: 6,
        },
        {
          text: "12",
          value: 12,
        },
        {
          text: "24",
          value: 24,
        },
      ],
      form: {
        document: "",
        email: "",
        creditCardName: "",
        creditCardNumber: "",
        creditCardMonth: "",
        creditCardYear: "",
        creditCardCVV: "",
        totalDues: "",
        invoice: false,
      },
    };
  },
  computed: {
    ...mapState({
      totalPrice: (state) => state.HomeStore.totalPrice,
    }),
  },
  methods: {
    ...mapActions({
      paymentCulqui: "HomeStore/paymentCulqui",
    }),
    /* eslint-disable */
    async createToken() {
      return new Promise((resolve) => {
        let c = 0;
        Culqi.createToken();
        const checkToken = setInterval(() => {
          c++;
          if (c > 20) clearInterval(checkToken);
          if (Culqi.token) {
            clearInterval(checkToken);
            resolve(Culqi.token);
          }
        }, 1000);
      });
    },
    async handleSubmit() {
      const token = await this.createToken();

      if (token) {
        // ¡Objeto Token creado exitosamente!
        console.log("token", token);
        const formData = new FormData();
        formData.append("token", token.id);
        formData.append("installments", this.form.totalDues);
        formData.append("idPedido", token.id);
        formData.append("email", this.form.email);
        formData.append("monto", this.totalPrice);
        formData.append("moneda", "PEN");
        this.paymentCulqui(formData);
      } else {
        // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        console.log(window.Culqi.error);
        alert(window.Culqi.error.user_message);
      }
    },
  },
  mounted() {
    /* eslint-disable */
    console.log("culqui", Culqi);
  },
};
</script>

<style lang="scss" >
@import "@/assets/styles/_creditCard.scss";
</style>
