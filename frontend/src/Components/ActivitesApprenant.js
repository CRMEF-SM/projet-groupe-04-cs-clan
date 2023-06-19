import HeaderApprenant from "./HeaderApprenant";
import NomApprenant from "./NomApprenant";
import VerticalMenu from "./VerticalMenu";
import Footer from "./Footer";
import '../Styles/ActivitesApprenant.css'
import { FaAward } from 'react-icons/fa';
import { GiTurtle, GiTurtleShell, GiSeaTurtle } from 'react-icons/gi';


function ActivitesApprenant() {
  return (
    <div className="ActivitesApprenant">
      <HeaderApprenant/>
      <NomApprenant/>
      <div className="body">
        <VerticalMenu/>
        <div className="Activites">
          <div className="verti-div">
            <div className="niveau">
            <FaAward size={40} style={{ color: 'Brown' }} />
            <p>Débutant</p>
            </div>
            <div className="niveauActivites">
              <button className="ActiviteBtn">
                <p>Activité 1:</p> 
                <p>La tortue du Logo</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 2:</p> 
                <p>Contrôller la tortue</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 3:</p> 
                <p>Le monde de tortue</p>
              </button>
            </div>
          </div>
          <div className="verti-div">
          <div className="niveau">
            <FaAward size={40} style={{ color: 'Grey' }} />
            <p>Intermidiare</p>
            </div>
            <div className="niveauActivites">
              <button className="ActiviteBtn">
                <p>Activité 1:</p> 
                <p>Boucles</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 2:</p> 
                <p>La largeur du stylo</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 3:</p> 
                <p>Couleurs</p>
              </button>
            </div>
          </div>
          <div className="verti-div">
          <div className="niveau">
            <FaAward size={40} style={{ color: 'Yellow' }} />
            <p>Avancé</p>
            </div>
            <div className="niveauActivites">
              <button className="ActiviteBtn">
                <p>Activité 1:</p> 
                <p>Variables</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 2:</p> 
                <p>Procédures</p>
              </button>
              <button className="ActiviteBtn">
                <p>Activité 3:</p> 
                <p>La boucle For</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ActivitesApprenant;