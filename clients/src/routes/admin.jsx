//import React from 'react';
import { Link } from 'react-router-dom'
import Sidebar from "../components/"

export default function Admin() {
  return (
    <div className="flex">
        <div className="w-56 min-h-screen bg-gray-700">
            <Sidebar />
        </div>
        <div>
        <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
      {/*   Logo de l'application  */}
        <div >
        <img src="https://th.bing.com/th/id/R.5f9a21c2c9cc4a566febce07cbb5b496?rik=bJOatP0tcO3LgA&riu=http%3a%2f%2fwww.recettesbox.com%2fmenu-semainier-imprimer%2fliste-de-courses-vierge-ananas-pdf.jpg&ehk=8cXr%2fFBZ3kNpbyeaKQYPzHuuABP7CtvBN4v04LD2wbI%3d&risl=&pid=ImgRaw&r=0" alt="Logo de l'application" className="h-8 w-auto" />

        </div>

    {/*     //* Navigation  */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/admin">Accueil</Link>
            </li>
            <li>
              <Link to="/create-list">Créer une liste</Link>
            </li>
            <li>
              <Link to="/admin/gestionList">Gérer les listes</Link>
            </li>
            <li>
              <Link to="/user-profile">Profil</Link>
            </li>
          </ul>
        </nav>

       {/*   Connexion/Inscription  */}
        <div>
          <Link to="/" className="text-white mr-4">Connexion</Link>
          <Link to="/admin/registerPage" className="text-white bg-blue-700 px-3 py-1 rounded-lg">Inscription</Link>
        </div>
      </div>
      
    </header>
    <div>
          <h2>Organisez vos courses de manière simple et efficace avec UserShopList</h2>
      </div>
        </div>
    </div>
  )
}





/* import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        //Logo de l'application 
        <div>
          <img src="/path/to/your-logo.png" alt="Logo de l'application" className="h-8 w-auto" />
        </div>

        //* Navigation 
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/create-list">Créer une liste</Link>
            </li>
            <li>
              <Link to="/manage-lists">Gérer les listes</Link>
            </li>
            <li>
              <Link to="/user-profile">Profil</Link>
            </li>
          </ul>
        </nav>

        //{ Connexion/Inscription }
        <div>
          <Link to="/login" className="text-white mr-4">Connexion</Link>
          <Link to="/register" className="text-white bg-blue-700 px-3 py-1 rounded-lg">Inscription</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
 */
