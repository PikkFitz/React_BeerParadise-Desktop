import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Produits = () => {

    const [produitsData, setProduitsData] = useState([]);  // Pour stocker les données des produits
    const [search, setSearch] = useState("");  // Pour stocker la recherche (searchBar)


    useEffect(() => {
        axios
            .get("https://pierre.amorce.org/api/produits", { headers: { Accept: "application/json" } })  // lien de l'API pour aller chercher tous les produits
            .then((res) => setProduitsData(res.data));
        // Avoir seulement les données des produits :
        // Méthode 1 : Dans res.data --> mettre {headers: {Accept: "application/json"}} dans le .get
        // Méthode 2 : Sans {headers: {Accept: "application/json"}} --> mettre res.data["hydra:member"] dans le .then
    }, [search])

    console.log(produitsData);


    return (
        <div>
            <div className="form-component">
                <div className="form-container">
                    <form>
                        <input
                            type="text"
                            placeholder="Entrez le nom d'un produit (ou son ID)"
                            id="search-input"
                            onChange={e => setSearch(e.target.value)}  // On stock la recherche dans setSearch
                        />
                        <input type="submit" value="Rechercher" />
                    </form>
                </div>
            </div>
            <div className="result">
                {produitsData
                    .slice(0, 24)  /* slice(0, 24) --> Pour afficher seulement 24 résultats */
                    // eslint-disable-next-line
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average  /* On tri du mieux noté au moins bien noté */
                        }
                        else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average  /* On tri du moins bien noté au mieux noté */
                        }

                    })
                    .map((movie) => {
                        return (
                            <Card movie={movie} key={movie.id} />
                        )
                    })}
            </div>
        </div>
    );
};

export default Produits;