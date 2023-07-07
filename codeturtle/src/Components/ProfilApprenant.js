import HeaderApprenant from "./Header";
import NomApprenant from "./NomApprenant";
import VerticalMenu from "./VerticalMenu";
import Footer from "./Footer";
import '../Styles/ProfilApprenant.css';
import { FaAward } from 'react-icons/fa';


function ProfilApprenant() {
  return (
    <div className="ProfilApprenant">
      
      <NomApprenant/>
      <div className="body">
      <VerticalMenu/>
      <div className="Profil">
        <div className="vertical-div">
          <p>Badges</p>
          <div className="badge-icon">
                <FaAward size={60} style={{ color: 'brown' }} />
          </div>
        </div>
        <div className="vertical-div">
          <p>Projets</p>
          <div className="container-button">
          <button className="projet-button">Créer un programme</button>
          <button className="projet-button">Apprendre à coder</button>
          </div>
          
        </div>
        <div className="vertical-div">
          <p>Statistiques</p>
          <div className="statistiques">
            <div className="stati">
              <p>DATE D'INSCRIPTION:</p>
              <p className="pStati">Il y'a 2 jours</p>
            </div>
            <div className="stati">
              <p>NIVEAU:</p>
              <p className="pStati">Débutant</p>
            </div>
            <div className="stati">
              <p>COURS CONSULTES:</p>
              <p className="pStati">1</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ProfilApprenant;