import { createRouter, createWebHistory } from "vue-router";
import CharactersList from "../components/CharactersList.vue";
import CharactersChart from "../components/CharactersChart.vue";

const routes = [
  { path: "/", component: CharactersList },
  { path: "/chart", component: CharactersChart },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
