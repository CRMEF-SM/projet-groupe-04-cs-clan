import '../Styles/NomApprenant.css';
import { GiTurtle } from 'react-icons/gi';
import { FaAward } from 'react-icons/fa';

function NomApprenant() {
  return (
    <div className="NomApprenant">
        <div className='Nom'>
            <div className='Nom_logo'>
                <GiTurtle size={50} color="green" />
            </div>
             <p className="txtNom">Apprenant79</p>
        </div>
        <div className='Badg'>
             <div className="badge-icon">
                <FaAward size={50} style={{ color: 'Yellow' }} />
             </div>
             <div className="badge-icon">
                <FaAward size={50} style={{ color: 'Grey' }} />
             </div>
             <div className="badge-icon">
                <FaAward size={50} style={{ color: 'Brown' }} />
             </div>
        </div>
    </div>
  );
}

export default NomApprenant;