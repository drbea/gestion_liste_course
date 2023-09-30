import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo de l'application */}
        <div>
          <img src="/path/to/your-logo.png" alt="Logo de l'application" className="h-8 w-auto" />
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="./admin">Accueil</Link>
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

        {/* Connexion/Inscription */}
        <div>
          <Link to="/login" className="text-white mr-4">Connexion</Link>
          <Link to="/register" className="text-white bg-blue-700 px-3 py-1 rounded-lg">Inscription</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
