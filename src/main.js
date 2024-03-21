import "./style.css";

import { createApp } from "vue";
//formKit
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config";

import App from "./App.vue";

createApp(App).use(plugin, defaultConfig(config)).mount("#app");
