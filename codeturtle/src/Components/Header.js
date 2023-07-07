import '../Styles/Header.css'
import { FaSearch } from 'react-icons/fa';
import logo from "../images/tortueIcon.png";

function Header() {
  return (
    <div className="Header">
       <div className="navbar-logo">
        <img src={logo}/>
        <p>Code turtle</p>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">Accueil</button>
        <button className="navbar-button">Code turtle ?</button>
        <button className="navbar-button">Connectez-vous</button>
        <button className="navbar-button">Inscrivez-vous</button>
      </div>
      <div className="navbar-search">
        <input type="text"  placeholder="Rechercher..." />
        <FaSearch className="navbar-search-icon" />
      </div>
    </div>
  );
}

export default Header;