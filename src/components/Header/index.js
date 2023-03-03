import appName from "../Includes/variables";
import { ImNewspaper } from "react-icons/im";
import "./styles.scss";

function Header() {
  return (
    <header className="main">
      <ImNewspaper />
      <h1>{appName}</h1>
    </header>
  );
}
export default Header;
