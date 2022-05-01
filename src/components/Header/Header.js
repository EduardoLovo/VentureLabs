import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
        <div className='contentHeader'>
            <div className='divHeader'>
                <h1>Menu</h1>
                <Link to='/' className='linkMenu'>Novo Cliente</Link>
                <Link to='/client/list' className='linkMenu'>Lista de Clientes</Link>
            </div>
        </div >
    )
}
