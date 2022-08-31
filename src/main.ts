import "./polyfills";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { connect } from "@rxjs-insights/devtools/connect";

import { AppModule } from "./app/app.module";

async function run() {
  await connect();
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((ref) => {
      // Ensure Angular destroys itself on hot reloads.
      if (window["ngRef"]) {
        window["ngRef"].destroy();
      }
      window["ngRef"] = ref;

      // Otherwise, log the boot error
    })
    .catch((err) => console.error(err));
}

run();
