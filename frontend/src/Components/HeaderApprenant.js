import '../Styles/HeaderApprenant.css'
import { FaSearch } from 'react-icons/fa';
import myImage from '../images/ninja.png';

function HeaderApprenant() {
  return (
    <div className="Header">
       <div className="navbar-logo">
        <img src='../images/ninja.png'/>
        <p>Code turtle</p>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button">Accueil</button>
        <button className="navbar-button">Code turtle ?</button>
      </div>
      <div className="navbar-search">
        <input type="text"  placeholder="Rechercher..." />
        <FaSearch className="navbar-search-icon" />
      </div>
    </div>
  );
}

export default HeaderApprenant;