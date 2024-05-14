import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;