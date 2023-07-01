import google_logo from "../images/google-logo.png" ;
import facebook_logo from "../images/facebook-logo.png" ;
import mail_logo from "../images/mail-logo.png" ;
import React, { useState } from 'react';
import '../Styles/SignUp.css';
import Login from './Login';
const SignUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  


  const [userType, setUserType] = useState('');
  const [showAdditionalFieldsApprenant, setShowAdditionalFieldsApprenant] = useState(false);
  const [showAdditionalFieldsEnseignant, setShowAdditionalFieldsEnseignant] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

   
  const handleToggleLogin = () => {
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login />;
  }


  const handleUserTypeChange = (type) => {
    setUserType(type);
    if (type === 'Apprenant') {
      setShowAdditionalFieldsApprenant(true);
      setShowAdditionalFieldsEnseignant(false);
    } else if (type === 'Enseignant') {
      setShowAdditionalFieldsEnseignant(true);
      setShowAdditionalFieldsApprenant(false);
    }
  };

  const handleBackToSignUp = () => {
    setUserType('');
    setShowAdditionalFieldsApprenant(false);
    setShowAdditionalFieldsEnseignant(false);
    setDay('');
    setMonth('');
    setYear('');
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <div className="sign-up-container">
      <div className="left-column">
        <h1 className="inscription-header">Inscrivez-vous</h1>
        <p className="inscription-text">
          Inscrivez-vous sur Code Turtle pour bénéficier d'une aide personnalisée pour ce que vous êtes en train d'étudier ou découvrez un tout nouveau domaine. Nous enregistrerons tous vos progrès.
        </p>
      </div>
      <div className="right-column">
        {showAdditionalFieldsApprenant ? (
          <>
            <h1 className="title">Rejoignez Code Turtle en tant que {userType}</h1>
            <div className="birthday-section">
              <p className="birthday-text">Quelle est votre date de naissance ?
</p>
              <div className="dropdowns-container">
                <select value={day} onChange={handleDayChange}>
                  <option className="option-val" value="">Jour</option>
                  {Array.from({ length: 31 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select value={month} onChange={handleMonthChange}>
                  <option className="option-val" value="">Mois</option>
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <select value={year} onChange={handleYearChange}>
                  <option  className="option-val" value="">Année</option>
                  {Array.from({ length: 26 }, (_, index) => (
                    <option key={index} value={2023 - index}>
                      {2023 - index}
                    </option>
                  ))}
                </select>
              </div>
              <a href="#" className="a-compte-appr" onClick={handleToggleLogin}>  Vous avez déjà un compte ?</a>
              <a href="#" className="back-link" onClick={handleBackToSignUp}>
                Précedent
              </a>
            </div>
            
          </>
        ) : showAdditionalFieldsEnseignant ? (
          <>
            <h1 className="title">Rejoignez Code Turtle en tant que {userType}</h1>
            <div className="sign-up-options">
              <div className="sign-up-buttons">
                <button className="btn-sign-up" >
                  <img  className="logo_img" src={google_logo} alt="Google Logo" />
                  Continue with Google
                </button>
                <button className="btn-sign-up">
                  <img className="logo_img" src={facebook_logo} alt="Facebook Logo" />
                  Continue with Facebook
                </button>
                <button className="btn-sign-up">
                  <img  className="logo_img" src={mail_logo} alt="Mail Logo" />
                  Continue with Mail
                </button>
              </div>
              <a href="#" className="a-compte-ens" onClick={handleToggleLogin}>  Vous avez déjà un compte ?</a>
              <div>
              <a href="#" className="back-link" onClick={handleBackToSignUp}>
                Précedent
              </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="title">Rejoignez Code Turtle en tant que</h1>
            <div className="btn">
              <button className="btn-1" onClick={() => handleUserTypeChange('Apprenant')}>
                Apprenant
              </button>
              <button className="btn-2" onClick={() => handleUserTypeChange('Enseignant')}>
                Enseignant
              </button>
              <a href="#" className="a-compte"  onClick={handleToggleLogin}>  Vous avez déjà un compte ?</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
