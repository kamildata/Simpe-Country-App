import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";
import CountryDetail, {
  fetchCountryDetail as loader,
} from "./components/CountryDetail";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/country/:code",
    element: <CountryDetail />,
    loader: loader,
  },
]);

function App() {
  return (
    <>
      {" "}
      <Navigation />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
