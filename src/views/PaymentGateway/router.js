export default {
  path: "/pago",
  name: "pago",
  component: () => import("./PaymentGatewayLayout.vue"),
  children: [
    {
      path: "checkout",
      name: "checkout",
      component: () => import("./Checkout.vue"),
    },
    {
      path: "pasarela",
      name: "pasarela",
      component: () => import("./Pasarela.vue"),
      children: [
        {
          path: "tarjeta-de-credito",
          name: "pago-credito",
          component: () => import("./CreditCard.vue"),
        },
        {
          path: "tarjeta-de-debito",
          name: "pago-debito",
          component: () => import("./DebitCard.vue"),
        },
        {
          path: "efectivo",
          name: "pago-efectivo",
          component: () => import("./CashPayment.vue"),
        },
      ],
    },
    {
      path: "resumen",
      name: "pago-resumen",
      component: () => import("./PaymentSummary.vue"),
    },
    {
      path: "carrito-de-compras",
      name: "resumen-carrito-de-compras",
      component: () => import("./ShoppingCart.vue"),
    },
  ],
};
