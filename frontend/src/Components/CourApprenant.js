import HeaderApprenant from "./HeaderApprenant";
import NomApprenant from "./NomApprenant";
import VerticalMenu from "./VerticalMenu";
import Footer from "./Footer";
import '../Styles/CourApprenant.css'
import { FaAward } from 'react-icons/fa';


function CourApprenant() {
  return (
    <div className="CourApprenant">
      <HeaderApprenant/>
      <NomApprenant/>
      <div className="body">
        <VerticalMenu/>
        <div className="Cours">
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CourApprenant;