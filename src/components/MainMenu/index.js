import "./styles.scss";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
  return (
    <nav className="main">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Posts</NavLink>
      <NavLink to="/preferences">Preference</NavLink>
      <NavLink to="/about-us">About Us</NavLink>
    </nav>
  );
}
