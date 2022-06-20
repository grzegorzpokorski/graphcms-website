import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "./../styles/style.scss";

import Layaut from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  );
};

export default MyApp;
