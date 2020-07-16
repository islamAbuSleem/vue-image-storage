import Vue from 'vue'
import VueRouter from 'vue-router'
import imageList from '../views/imageList.vue'
import uploadForm from '../components/uploadForm.vue'
import authHandler from '../components/authHandler.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'imageList',
    component: imageList
  },
  {
    path: '/upload',
    name: 'uploadForm',
    component: uploadForm
  },
  {
    path: '/oauth2/callback',
    name: 'authHandler',
    component: authHandler
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
