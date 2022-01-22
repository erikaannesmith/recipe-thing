import "./Header.css";
import { Link } from "react-router-dom";
import { Plus, Menu } from "../../icons";
import { Logo } from "../../components";

export const Header = () => (
  <div className="header">
    <Menu />
    <Link to="/">
      <Logo />
    </Link>
    <Plus />
  </div>
);
