import { BsMoon } from "react-icons/bs";

import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <h2>Where is the world?</h2>
      <button>
        <BsMoon />
        Dark Mode
      </button>
    </nav>
  );
};

export default Navigation;
