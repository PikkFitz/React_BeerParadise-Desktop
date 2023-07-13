import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Form = () => {

    // URL API Site
    let apiUrl = "https://pierre.amorce.org/api/produits";

    const [produitsData, setProduitsData] = useState([]);  // Pour stocker les données des produits
    const [sousCategorieData, setSousCategorieData] = useState([]);  // Pour stocker les données des produits

    useEffect(() => {
        axios
            .get("https://pierre.amorce.org/api/sous_categories", { headers: { Accept: "application/json" } })  // lien de l'API pour aller chercher toutes les Sous-Catégories
            .then((res) => setSousCategorieData(res.data));
        // Avoir seulement les données des produits :
        // Méthode 1 : Dans res.data --> mettre {headers: {Accept: "application/json"}} dans le .get
        // Méthode 2 : Sans {headers: {Accept: "application/json"}} --> mettre res.data["hydra:member"] dans le .then
    }, [])

    const [newProduct, setNewProduct] = useState({
        nom: "",
        sousCategorie: "",
        prix: "",
        stock: "",
        description: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // On empêche le rechargement de la page lors de la soumission du formulaire

        // const selectedSousCategorie = sousCategorieData.find(
        //     (sousCategorie) => sousCategorie['@id'] === newProduct.sousCategorie
        // );
        // if (selectedSousCategorie) {
        //     setNewProduct({ ...newProduct, sousCategorie: selectedSousCategorie['@id'] });
        // } 
        // else {
        //     alert("Sélectionnez une sous-catégorie valide."); // Ajoutez une alerte pour indiquer qu'aucune sous-catégorie valide n'a été sélectionnée.
        //     return; // Arrêtez l'exécution de la fonction handleSubmit pour éviter l'envoi de la requête avec une IRI invalide.
        // }

        console.log(newProduct);

        // On envoi des données du nouveau produit à l'API
        axios
            .post(apiUrl, newProduct)
            .then((res) => {
                alert("Le produit a été ajouté avec succès !");
            })
            .catch((error) => {
                // On gère les erreurs lors de l'ajout du produit
                console.error("Erreur lors de l'ajout du produit :", error);
                console.log(error.response); // On affiche les détails de la réponse HTTP renvoyée par l'API
                alert("Une erreur s'est produite lors de l'ajout du produit. Veuillez réessayer.");
            });
    };


    return (
        <div className='container'>
            <Logo />
            <Navigation />

            <div className='form-container'>

                <h2>Ajout d'un produit</h2>


                <form className='form' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className='form-input'
                        placeholder="Nom du produit"
                        value={newProduct.nom}
                        onChange={(e) => setNewProduct({ ...newProduct, nom: e.target.value })}
                        required
                    />
                    <select
                        className='form-input'
                        value={newProduct.sousCategorie}
                        onChange={(e) => setNewProduct({ ...newProduct, sousCategorie: e.target.value })}
                        // sousCategorie: e.target.value
                        required
                    >
                        <option value="">Sélectionnez une sous-catégorie</option>
                        {sousCategorieData.map((sousCategorie) => (
                            <option key={sousCategorie.id} value={'/api/sous_categories/' + sousCategorie.id}>
                                {sousCategorie.nom}
                            </option>
                        ))}
                    </select>

                    <input
                        type="number"
                        className='form-input'
                        placeholder="Prix du produit"
                        value={newProduct.prix}
                        onChange={(e) => setNewProduct({ ...newProduct, prix: parseFloat(e.target.value) })}
                        required
                    />

                    <input
                        type="number"
                        className='form-input'
                        placeholder="Stock"
                        value={newProduct.stock}
                        onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                        required
                    />

                    <textarea
                        className='form-textarea'
                        placeholder="Description du produit"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                        required
                    ></textarea>

                    <input type="submit" className='form-submit' value="Valider" />
                </form>

            </div>
        </div>
    );
};

export default Form;