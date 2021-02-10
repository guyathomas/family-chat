/** @format */

import { globalStyles } from "../styles/globals.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
