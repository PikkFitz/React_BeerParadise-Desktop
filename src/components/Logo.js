import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* Les images importées depuis la balise img (et seulement les balises img) sont accessibles dans "public" 
                (comme si elles étaient placées dans le dossier "public")
                Donc le chemin pour aller chercher notre image (logo) est : "./logo192.png" */}
            <i className="fa-solid fa-beer-mug-empty"></i>
            <h3>BeerParadise - Desktop</h3>
        </div>
    );
};

export default Logo;