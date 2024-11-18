import './bootstrap';
import { createApp } from "vue";
//import.meta.glob(['../img/**']);

// Компоненты Vue
import HomeComponent from "./Components/HomeComponent.vue";
// Заводим приложение
const app = createApp({});
// Регистрируем компоненты
app.component("home", HomeComponent);
// Монтируем экземпляр Vue
app.mount("#app");
