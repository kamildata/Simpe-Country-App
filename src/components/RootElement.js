import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

const RootElement = () => {
  <>
    <Navigation />
    <Outlet />
  </>;
};

export default RootElement;
