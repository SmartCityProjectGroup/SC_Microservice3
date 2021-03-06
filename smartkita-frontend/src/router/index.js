import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EmployeeView from "../views/EmployeeView.vue";
import ApplicationsView from "../views/ApplicationsView.vue";
import SearchKitasView from "../views/SearchKitasView.vue";
import KitaView from "../views/KitaView.vue";
import ContractsView from "../views/ContractsView.vue";
import DocumentsView from "../views/DocumentsView.vue";
import MembershipView from "../views/MembershipView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import LegalView from "../views/LegalView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/employee",
      name: "employee",
      component: EmployeeView,
    },
    {
      path: "/applications",
      name: "applications",
      component: ApplicationsView,
    },
    {
      path: "/searchkitas",
      name: "searchkitas",
      component: SearchKitasView,
    },
    {
      path: "/kita",
      name: "kita",
      component: KitaView,
    },
    {
      path: "/contracts",
      name: "contracts",
      component: ContractsView,
    },
    {
      path: "/documents",
      name: "documents",
      component: DocumentsView,
    },
    {
      path: "/memberships",
      name: "memberships",
      component: MembershipView,
    },
    {
      path: "/legal",
      name: "legal",
      component: LegalView,
    },
    { path: "/privacy", name: "privacy", component: PrivacyView },
  ],
});

export default router;
