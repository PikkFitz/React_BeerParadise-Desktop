import React from 'react';

const Card = ({ produit }) => {  // { produit } --> Les accolades sont nécessaires pour avoir accès directement à toutes les données de produit
// (sans accolade il aurait fallu faire produit.produit pour accéder aux données)

    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");  // date.split("-") --> Pour couper la date à chaque tiret "-"
        dd = dd.substring(0, 2);  // On prend les 2 premiers caractères de la chaine "dd"
        return [dd, mm, yy].join("/")  // On remet la date dans l'ordre ([dd, mm, yy]) et on place un "/" entre chaque partie
    }

    return (
        <div className="card">
            {/* IMAGE */}
            {/* <img
                src={movie.poster_path ? "https://image.tmdb.org/t/p/original/" + movie.poster_path : "./img/poster.jpg"}
                // Si l'image existe sur l'API on va la chercher, sinon on met une immage par défaut (./img/poster.jpg)
                alt={`affiche ${movie.title}`}
            /> */}
            {/* NOM */}
            <h3>{produit.nom} </h3><p>({produit.id})</p>
            {/* DATE DE CREATION */}
            {produit.createdAt ? <h5>Ajoutée le : {dateFormater(produit.createdAt)}</h5> : null}
            {/* DERNIERE DATE DE MODIFICATION */}
            {produit.updatedAt ? <h5>Modifiée le : {dateFormater(produit.updatedAt)}</h5> : null}
            {/* SOUS-CATEGORIE */}
            <h5>Sous-Catégorie : {produit.sousCategorie.nom} (id : {produit.sousCategorie.id})</h5> 
            {/* PRIX */}
            <h5>Prix : {produit.prix} €</h5> 
            {/* STOCK */}
            <h5>Stock : {produit.stock}</h5> 
            {/* DESCRIPTION */}
            {produit.description ? <h3>Description</h3> : ""}
            <p>{produit.description}</p>
            {/* BOUTON DE MODIFICATION */}
            {/* BOUTON DE SUPPRESSION */}
            

        </div>
    );
};

export default Card;