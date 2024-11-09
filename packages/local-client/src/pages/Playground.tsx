import { Provider } from "react-redux";
import { store } from "../state";
import CellList from "../components/CellList";
import Footer from "../components/Footer";

const Playground = () => {
  return (
    <div className="flex min-h-screen flex-col pt-4">
      <main className="container mx-auto flex-grow">
        <Provider store={store}>
          <CellList />
        </Provider>
      </main>
      <Footer />
    </div>
  );
};

export default Playground;
