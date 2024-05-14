import { createWebHistory, createRouter } from "vue-router";
import TestComponent from "@/components/TestComponent.vue";
import FirstComponent from "@/components/FirstComponent.vue";

const routes = [
    {
        path: "/test",
        name: "TestComponent",
        component: TestComponent,
    },
    {
        path: "/first",
        name: "FirstComponent",
        component: FirstComponent,
    },
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

export default router;