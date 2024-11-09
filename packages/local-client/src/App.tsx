import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Playground = lazy(() => import("./pages/Playground"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route path="/" element={<Playground />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
