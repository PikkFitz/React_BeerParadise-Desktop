import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Librairie importée en amont (npm i -s react-router-dom sass)
import Statistiques from './pages/Statistiques';
import About from './pages/About';
import Produits from './pages/Produits';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Produits />} />  {/* /!\ Penser à vérifier l'import de Route en haut de page /!\ */}    
          <Route path="/statistics" element={<Statistiques />} />  {/* /!\ Penser à vérifier l'import de Route en haut de page /!\ */}  
          <Route path="/about" element={<About />} />  {/* /!\ Penser à vérifier l'import de Route en haut de page /!\ */}  
          <Route path="*" element={<Produits />} />  {/* path="*" --> Si l'url n'est pas trouvé, ne correspond à rien de déclaré dans nos Routes */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
