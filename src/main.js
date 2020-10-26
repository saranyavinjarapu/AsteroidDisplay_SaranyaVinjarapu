import Vue from "vue";
import App from "./App.vue";
import router from "./routes/index";
import * as firebase from "firebase";
import store from "./store";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyCwV5d-UYnZcsc90y3Ird697cMTdfANcms",
  authDomain: "ad-fb-98631.firebaseapp.com",
  databaseURL: "https://ad-fb-98631.firebaseio.com",
  projectId: "ad-fb-98631",
  storageBucket: "ad-fb-98631.appspot.com",
  messagingSenderId: "317558955613",
  appId: "1:317558955613:web:aa1bcd4abce9b7d61037b4",
  measurementId: "G-LGYSTW8FE9"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");