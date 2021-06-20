import React from 'react';
import {Link} from 'react-router-dom';
function Sobre() {
  return (
    <div>
      <h1>Sobre o curso RecatJs...</h1><br/>
      <Link to="/">Home</Link><br/>
      <Link to="/contato">Contatos</Link>
    </div>
  );
}

export default Sobre;
