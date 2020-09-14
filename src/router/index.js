import Vue from "vue";
import VueRouter from "vue-router";
import AuthRouter from "@/views/Auth/router";
import HomeRouter from "@/views/Home/router";
import PaymentGatewayRouter from "@/views/PaymentGateway/router";

Vue.use(VueRouter);

const routes = [AuthRouter, HomeRouter, PaymentGatewayRouter];

const router = new VueRouter({
  routes,
});

export default router;
