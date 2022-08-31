// const { RxjsInsightsPlugin } = require("@rxjs-insights/plugin-webpack5");
import { RxjsInsightsPlugin } from "@rxjs-insights/plugin-webpack5";
import { Configuration } from "webpack";

export const webpackConfig: Configuration = {
  plugins: [new RxjsInsightsPlugin()],
};

export default webpackConfig;
