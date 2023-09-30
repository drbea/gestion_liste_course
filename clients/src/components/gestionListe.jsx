import React, { useState } from 'react';

const ManageLists = () => {
  // État pour stocker les listes de courses
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState(''); // État pour stocker le nom de la nouvelle liste

  // Fonction pour ajouter une nouvelle liste
  const addList = (newList) => {
    setLists([...lists, newList]);
  };

  // Fonction pour supprimer une liste
  const deleteList = (listId) => {
    const updatedLists = lists.filter((list) => list.id !== listId);
    setLists(updatedLists);
  };

  // Gestionnaire pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher la soumission par défaut du formulaire

    if (newListName.trim() === '') {
      // Gérer la validation si le champ est vide
      alert('Le nom de la liste ne peut pas être vide.');
      return;
    }

    // Créer une nouvelle liste avec un ID unique (vous pouvez utiliser une bibliothèque comme uuid)
    const newList = {
      id: Date.now(), // Utilisation du timestamp comme ID (à des fins de démonstration)
      name: newListName,
    };

    // Appeler la fonction pour ajouter la nouvelle liste
    addList(newList);

    // Réinitialiser le champ du formulaire après l'ajout
    setNewListName('');

    // Vous pouvez également envoyer les données au serveur ici si nécessaire
  };

  return (
    <div>
      <h2>Gestion des Listes de Courses</h2>

      {/* Formulaire pour créer une nouvelle liste */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la liste"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button type="submit">Créer</button>
      </form>

      {/* Afficher la liste des listes de courses */}
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            {list.name}
            <button onClick={() => deleteList(list.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageLists;

