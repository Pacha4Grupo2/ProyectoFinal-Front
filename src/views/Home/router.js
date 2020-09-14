export default {
  path: "",
  name: "home-layout",
  component: () => import("./HomeLayout.vue"),
  children: [
    {
      path: "",
      name: "home",
      component: () => import("./Home.vue"),
    },
    {
      path: "/:product",
      name: "home-detail",
      component: () => import("./ProductDetail.vue"),
    },
  ],
};
