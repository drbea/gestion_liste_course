import { useState, useEffect } from "react";

export default function ManageLists() {
  const [input, setInput] = useState("");
  const [shopList, setShoptlists] = useState(() => JSON.parse(localStorage.getItem("shoptlists")) || []);
  const [currendIndex, setCurrentIndex] = useState(null);


  useEffect(() => {
    if(currendIndex !== null) {
      setInput(shopList[currendIndex].label);
    }
  },[currendIndex])

  function handleShoptlist() {
    if (input === "") {
      return;
    }
    if(currendIndex === null){
      let newShoptlists = [...shopList, { label: input, isDone: false }];
      setShoptlists(newShoptlists);
      localStorage.setItem("shopLists", JSON.stringify(newShoptlists));
      setInput("");
    } else{
      let newShoptlists = [...shopList];
      newShoptlists[currendIndex].label = input;
      setShoptlists(newShoptlists);
      localStorage.setItem("shopLists", JSON.stringify(newShoptlists));
      setInput("");
      setCurrentIndex(null);
    }
  }

  const handleDelete = (index) => {
    let newShoptlists = [...shopList];
    newShoptlists.splice(index, 1);
    setShoptlists(newShoptlists);
    console.log(shopList)
    localStorage.setItem("shopLists", JSON.stringify(newShoptlists))
  }

  const handleComplete = (index) => {
    let newShoptlists = [...shopList];
    newShoptlists[index].isDone = !newShoptlists[index].isDone;
    setShoptlists(newShoptlists);
    localStorage.setItem("shopLists", JSON.stringify(newShoptlists));
  }

  return (
    <>
      <div className="p-10 w-full space-x-2 max-w-3xl flex ">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="border-2 py-2 px-4 w-full"
          value={input}
          type="text"
        />
        <button onClick={handleShoptlist} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600">
          {currendIndex === null ? "Ajouter" : "Modifier"}
        </button>
      </div>

      <div className="px-10 space-y-2 max-w-3xl">
        {shopList.map((shoptlist, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between max-w-3xl space-x-2 my-2 px-4 py-2 border-2 rounded-md shadow-md "
            >
              <input onChange={() => handleComplete(index)} className="w-8 h-8 " type="checkbox" name="done" id="" />
              <label className={`text-xl font-semibold ${shoptlist.isDone ? 'line-through': ''}`} htmlFor="done">
                {shoptlist.label}
              </label>
              <div className="space-x-2">
                <button onClick={function () {
                  setCurrentIndex(index);
                }} className="bg-yellow-300 hover:bg-yellow-500/50 px-2 py-1 rounded-md shadow">
                  modifier
                </button>
                <button onClick={() => handleDelete(index)} className="bg-red-300 hover:bg-red-500 hover:text-white px-2 py-1 rounded-md shadow">
                  Supprimer
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}







/* import React, { useState } from 'react';

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

      //{ Formulaire pour créer une nouvelle liste }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom de la liste"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
        />
        <button type="submit">Créer</button>
      </form>

      //{ Afficher la liste des listes de courses }
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

 */