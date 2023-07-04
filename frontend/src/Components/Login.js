/*
import React, { useState } from 'react';
import '../Styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Handle login submission logic here
  };

  return (
    <div className="login-container">
      <div className="left-column">
        <h1 className="login-header">Connectez-vous</h1>
        <p className="login-text">
          Connectez-vous à votre compte Code Turtle pour accéder à vos cours et suivre vos progrès.
        </p>
      </div>
      <div className="right-column">
        <h1 className="title">Connexion à Code Turtle</h1>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <button type="submit" className="btn-login">
            Se connecter
          </button>
        </form>
        <a href="#" className="back-link" onClick={handleBackToSignUp}>
          Retour à l'inscription
        </a>
      </div>
    </div>
  );
};

export default Login;
*/
import React, { useState } from 'react';
import google_logo from "../images/google-logo.png" ;
import facebook_logo from "../images/facebook-logo.png" ;
import mail_logo from "../images/mail-logo.png" ;
import '../Styles/Login.css';
import '../Styles/SignUp.css';
import contact_turtle from "../images/contact_turtle.png";
import SignUp from './SignUp';
const Login = ({ handleBackToSignUp }) => {
  const [showSignUp, setShowSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleToggSignUp = () => {
      setShowSignUp(true);
    };
  
    if (showSignUp) {
      return <SignUp />;
    }
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleLoginSubmit = (event) => {
      event.preventDefault();
  
      // Handle login submission logic here
    };
    return (
    <div className="login-container">
       <div className="left-column">
        <h1 className="login-header">Connectez-vous</h1>
        <p className="login-text">
          Ravis de vous retrouvez!
        </p>
        <img className="img-turtle"src={contact_turtle} alt="code-turtle"></img>
      </div>
      <div className="right-column">
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
         </div>    
        
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <a href='#mdpoubli' className='span'>Mot de passe oublié ?</a>
          <button type="submit" className="btn-login">
            Se connecter
          </button>
        </form>
        <a href="#" className="creer-compte" onClick={handleToggSignUp}>  Créer un compte </a>

      
    </div>
    </div>
  );
};

export default Login;