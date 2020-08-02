import "../assets/styles/modernism.css";
import { AnimatePresence } from "framer-motion";

function App({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default App;
