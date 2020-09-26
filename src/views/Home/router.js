export default {
    path: '',
    name: 'Home-layout',
    component: () =>
        import ('./HomeLayout.vue'),
    children: [{
            path: '',
            name: 'home',
            component: () =>
                import ('./Home.vue'),
        },
        {
            path: 'curso/:id',
            name: 'curso',
            component: () =>
                import ('./ProductDetail.vue'),
        },
    ],
};