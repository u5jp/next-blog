import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faList, faBorderAll } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "styles/reset.scss";
import "styles/index.scss";
import "highlight.js/styles/darcula.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
