import { useContext } from "react";
import NavBarItem from "../Details/NavBarItem";
import MenuIcon from "@mui/icons-material/Menu";
import LeftBar from "./LeftBar";
import CartContext from "../ContextApi/CartContext";
// import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const { openButton } = useContext(CartContext);

  return (
    <>
      <div id="Navbar-container" className="flexBox">
        <div className="leftBarSection">
          <div onClick={() => openButton()}>
            <MenuIcon />
          </div>
          <div className="bold">All</div>
          <LeftBar />
        </div>
        <div className="Navbar-menu">
          <ul>
            {NavBarItem.map((item) => (
              <li className="Navbar-menu-item" key={item.id}>
                {item.MenuItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="offer-section flexBox">
          <div>
            <p>KUNWAR</p>
          </div>
          <div className="between-Border"></div>
          <div className="offer-date">
            <span className="date">Randhir </span>
            <span className="count-down">Singh</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
