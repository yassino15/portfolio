// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import '@fortawesome/fontawesome-free/css/all.css';
import 'animate.css/animate.min.css';
import { vAnimateSection } from './directives/animateSection';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App);
app.use(router);
app.use(i18n);
app.directive('animate-section', vAnimateSection);
app.mount('#app');
