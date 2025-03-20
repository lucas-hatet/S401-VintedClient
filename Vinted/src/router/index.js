/* Routes Vue */
import { createRouter, createWebHistory } from 'vue-router'

/* Import des views */
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'
import AboutView from '../views/About.vue'
import AchatView from '../views/Achat.vue'
import InfoView from '../views/Info.vue'
import InfoCookiesView from '../views/InfoCookies.vue'
import InfoCompteView from '../views/InfoCompte.vue'
import InfoVendreView from '../views/InfoVendre.vue'
import InfoPaiementView from '../views/InfoPaiement.vue'
import InfoEnvoiView from '../views/InfoEnvoi.vue'
import InfoRechercheView from '../views/InfoRecherche.vue'
import InfoArticleView from '../views/InfoArticle.vue'
import InfoUsersView from '../views/InfoUsers.vue'
import InfoDonneesView from '../views/InfoDonnees.vue'
import ConfirmationSignalementView from '../views/ConfirmationSignalement.vue'
import SignalementPasConfirmeView from '../views/SignalementPasConfirme.vue'
import SignalerArticleView from '../views/SignalerArticle.vue'
import VintedProView from '../views/VintedPro.vue'
import PolitiqueConfidentialiteView from '../views/PolitiqueConfidentialite.vue'
import VerificationArticleView from '../views/VerificationArticle.vue'
import DeveloppementDurableView from '../views/DeveloppementDurable.vue'
import SignalementMailView from '../views/SignalementMail.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import DetailPageView from '../views/DetailPage.vue'
import CommentMarcheView from '../views/CommentMarche.vue'
import ClientProfil from '../views/ClientProfil.vue'
import ConnexionView from '../views/Connexion.vue'
import InfoUtilisateurView from '../views/InfoUtilisateur.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/About",
      name: "About",
      component: AboutView,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: ErrorView,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/Achat",
      name: "Achat",
      component: AchatView,
    },
    {
      path: "/Info",
      name: "Info",
      component: InfoView,
    },
    {
      path: "/InfoCookies",
      name: "InfoCookies",
      component: InfoCookiesView,
    },
    {
      path: "/InfoCompte",
      name: "InfoCompte",
      component: InfoCompteView,
    },
    {
      path: "/InfoVendre",
      name: "InfoVendre",
      component: InfoVendreView,
    },
    {
      path: "/InfoPaiement",
      name: "InfoPaiement",
      component: InfoPaiementView,
    },
    {
      path: "/InfoEnvoi",
      name: "InfoEnvoi",
      component: InfoEnvoiView,
    },
    {
      path: "/InfoRecherche",
      name: "InfoRecherche",
      component: InfoRechercheView,
    },
    {
      path: "/InfoArticle",
      name: "InfoArticle",
      component: InfoArticleView,
    },
    {
      path: "/InfoUsers",
      name: "InfoUsers",
      component: InfoUsersView,
    },
    {
      path: "/InfoDonnees",
      name: "InfoDonnees",
      component: InfoDonneesView,
    },
    {
      path: "/ConfirmationSignalement",
      name: "ConfirmationSignalement",
      component: ConfirmationSignalementView,
    },
    {
      path: "/SignalementPasConfirme",
      name: "SignalementPasConfirme",
      component: SignalementPasConfirmeView,
    },
    {
      path: "/SignalerArticle",
      name: "SignalerArticle",
      component: SignalerArticleView,
    },
    {
      path: "/VintedPro",
      name: "VintedPro",
      component: VintedProView,
    },
    {
      path: "/PolitiqueConfidentialite",
      name: "PolitiqueConfidentialite",
      component: PolitiqueConfidentialiteView,
    },
    {
      path: "/VerificationArticle",
      name: "VerificationArticle",
      component: VerificationArticleView,
    },
    {
      path: "/DeveloppementDurable",
      name: "DeveloppementDurable",
      component: DeveloppementDurableView,
    },
    {
      path: "/SignalementMail",
      name: "SignalementMail",
      component: SignalementMailView,
    },
    {
      path: "/test",
      name: "test",
      component: Articles,
    },
    {
      path: "/article/:id",
      name: "articleDetail",
      component: ArticleDetail,
      props:true,
    },
    {
      path: "/client/:id",
      name: "ClientProfil",
      component: ClientProfil,
      props:true,
    },
    {
      path: "/DetailPage",
      name: "DetailPage",
      component: DetailPageView,
    },
    {
      path: "/CommentMarche",
      name: "CommentMarche",
      component: CommentMarcheView,
    },
    {
      path: "/Connexion",
      name: "Connexion",
      component: ConnexionView,
    },
    {
      path: "/InfoUtilisateur",
      name: "InfoUtilisateur",
      component: InfoUtilisateurView,
    },
  ],
})

export default router
