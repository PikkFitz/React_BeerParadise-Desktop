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
            <h3 className='nom'>{produit.nom} </h3><p>id : {produit.id}</p>
            {/* DATE DE CREATION */}
            {produit.createdAt ? <h5 className='dateCreation'>Ajoutée le : {dateFormater(produit.createdAt)}</h5> : null}
            {/* DERNIERE DATE DE MODIFICATION */}
            {produit.updatedAt ? <h5 className='dateModification'>Modifiée le : {dateFormater(produit.updatedAt)}</h5> : null}
            {/* SOUS-CATEGORIE */}
            <h5 className='sousCategorie'>Sous-cat : {produit.sousCategorie.nom} (id : {produit.sousCategorie.id})</h5>
            {/* PRIX */}
            <h5 className='prix'>Prix : {produit.prix}€</h5>
            {/* STOCK */}
            <h5 className='stock'>Stock : {produit.stock}</h5>
            {/* DESCRIPTION */}
            {produit.description ? <h4 className='description'>Description</h4> : ""}
            <p>{produit.description}</p>

            <div className="btn-container">
                {/* BOUTON DE MODIFICATION */}
                <div className="btn" id='modify' /*onClick={() => }*/>
                    Modifier
                </div>

                {/* BOUTON DE SUPPRESSION */}
                <div className="btn" id='delete' /* onClick={() => }*/>
                    Supprimer
                </div>
            </div>


        </div>
    );
};

export default Card;