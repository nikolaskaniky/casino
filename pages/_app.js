import { FbMessenger } from "../components/facebook/fb-messenger";
import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <FbMessenger />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
