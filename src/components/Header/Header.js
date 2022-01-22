import "./Header.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Plus, Menu } from "../../icons";
import { Logo } from "../../components";
import { NewRecipeModalContext } from "../../contexts/NewRecipeModalContext";

export const Header = () => {
  const [_, setNewRecipeModalOpen] = useContext(NewRecipeModalContext);
  return (
    <div className="header">
      <button onClick={() => {}}>
        <Menu />
      </button>
      <Link to="/">
        <Logo />
      </Link>
      <button onClick={() => setNewRecipeModalOpen(true)}>
        <Plus />
      </button>
    </div>
  );
};
