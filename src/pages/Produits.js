import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Produits = () => {

    const navigate = useNavigate();
    const [produitsData, setProduitsData] = useState([]);  // Pour stocker les données des produits
    const [search, setSearch] = useState("");  // Pour stocker la recherche (searchBar)
    const [searchType, setSearchType] = useState("nom");  // Par défaut, recherche par ID de produit

    // URL API Site
    let apiUrl = "https://pierre.amorce.org/api/produits";

    // URL API Site local
    // let apiUrl = "https://127.0.0.1:8000/api/produits";


    useEffect(() => {

        if (searchType === "id") {  // Si recherche par ID
            apiUrl += `?&id=${search}`;
        } else {  // Si recherche par nom
            apiUrl += `?&nom=${search}`;
        }

        axios
            .get(apiUrl, { headers: { Accept: "application/json" } })  // lien de l'API pour aller chercher tous les produits
            .then((res) => setProduitsData(res.data));
        // Avoir seulement les données des produits :
        // Méthode 1 : Dans res.data --> mettre {headers: {Accept: "application/json"}} dans le .get
        // Méthode 2 : Sans {headers: {Accept: "application/json"}} --> mettre res.data["hydra:member"] dans le .then
    }, [search])

    console.log(produitsData);


    return (
        <div className="container">
            <Logo />
            <Navigation />

            <div className="btn" id='add' onClick={() => navigate('/form')}>
                Ajouter un produit
            </div>

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

                            <input type="submit" value="Rechercher" /> <br />

                            <label>
                                <input
                                    type="radio"
                                    value="nom"
                                    checked={searchType === "nom"}
                                    onChange={() => setSearchType("nom")}
                                />
                                Recherche par nom
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="id"
                                    checked={searchType === "id"}
                                    onChange={() => setSearchType("id")}
                                />
                                Recherche par ID
                            </label>

                        </form>
                    </div>
                </div>

                <div className="result">

                    {produitsData
                        .slice(0, 24)  /* slice(0, 24) --> Pour afficher seulement 24 résultats */
                        .map((produit) => {
                            return (
                                <Card produit={produit} key={produit.id} />
                            )
                        })}

                </div>
            </div>
        </div>
    );
};

export default Produits;