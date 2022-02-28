import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context";

function App() {
  return (
    <div>
      <ToastContainer />
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
