import '../Styles/Header.css'
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className="Header">
       <div className="navbar-logo">
        <img src="../images/tortueIcon.png"/>
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