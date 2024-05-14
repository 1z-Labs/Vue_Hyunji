import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent.vue";
import HmmComponent from "@/components/HmmComponent.vue";

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/hmm",
        name: "HmmComponent",
        component: HmmComponent,
    }
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;