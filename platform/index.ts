import type { App } from "vue";
import * as Components from "./components";

const install = (app: App) => {
  for (const [key, component] of Object.entries(Components)) {
    app.component(component.name, component);
  }
};

export * from "./components";
export * from "./types";

export default {
  install,
};
