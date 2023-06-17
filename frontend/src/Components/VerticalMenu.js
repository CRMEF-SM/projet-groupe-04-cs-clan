import '../Styles/VerticalMenu.css'

function VerticalMenu() {
  return (
    <div className="VerticalMenu">
      <ul>
        <p>Mes cours</p>
        <li><a href="#">Cours</a></li>
        <p>Mes activités</p>
        <li><a href="#">Mon profil</a></li>
        <li><a href="#">Activités</a></li>
        <p>Mon compte</p>
        <li><a href="#">Ma carte de progression</a></li>
        <li><a href="#">Mon enseignant</a></li>
        <li><a href="#">Se déconnecter</a></li>
      </ul>
     
    </div>
  );
}

export default VerticalMenu;