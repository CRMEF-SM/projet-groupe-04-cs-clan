import HeaderApprenant from "./HeaderApprenant";
import NomApprenant from "./NomApprenant";
import VerticalMenu from "./VerticalMenu";
import Footer from "./Footer";
import '../Styles/CourApprenant.css'
import { FaAward } from 'react-icons/fa';
import { GiTurtle, GiTurtleShell, GiSeaTurtle } from 'react-icons/gi';


function CourApprenant() {
  return (
    <div className="CourApprenant">
      <HeaderApprenant/>
      <NomApprenant/>
      <div className="body">
        <VerticalMenu/>
        <div className="Cours">
          <p className="pMesCours">Mes cours</p>
          <p className="pProgrammationLogo">Programmation logo</p>
          <hr className="horizontal-line" />
          <div className="guideContainer">
            <div className="guideTitleContainer">
            <div className="circle">
             <GiSeaTurtle size={50} style={{ color: 'Green' }}/>
            </div>
            <p>Guide programmation logo</p>
            </div>
            <div className="guideButtonContainer">
              <button className="voirCoursBtn"> Voir le cours</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CourApprenant;