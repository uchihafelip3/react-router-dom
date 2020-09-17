import React from 'react';
import {Link} from 'react-router-dom'

const NotFound404 = () => {
  return (
    <div>
      A página que você está tentando acessar não existe.<br/>
      <Link to='/'><button>Ir para a home</button></Link>
    </div>
  );
}

export default NotFound404;
