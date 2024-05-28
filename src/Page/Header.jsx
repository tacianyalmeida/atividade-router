import {Link} from 'react-router-dom'
import { Nav} from '../Styled-Components/Header';
import React from 'react';

const Header = ()=>{
    return(
      <Nav style={{backgroundColor: '#1e9465'}}>
        <Link  to='/'>Home</Link>
        <Link to='sobre'>Sobre</Link>
        <Link to='contato'>Contato</Link>
      </Nav>
    )
}
export default  Header;