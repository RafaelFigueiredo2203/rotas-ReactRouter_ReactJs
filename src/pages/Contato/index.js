import React from 'react';
import {Link} from 'react-router-dom';
function Contato() {
  return (
    <div>
      <h1>Contatos</h1>
      <span>Email: teste@teste.com</span>
      <br/>
      <Link to="/sobre">Sobre</Link><br/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Contato;
