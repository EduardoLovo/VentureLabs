import React from 'react';
import { Link } from 'react-router-dom';
import { List } from '../../List';
import './ClientList.css';
import { FaUser } from 'react-icons/fa';

export const ListClient = () => {

    const listC = List

    return (
        <div className='bodyList'>
            <div className='contentList'>
                <h1>Lista de Clientes</h1>
                {listC.map((client, index) => (
                    <Link to={`/client/view/${client.id}`} key={client.id} client={client} className='linkCard'>
                        <div className='card' >
                            <h1><FaUser /></h1>
                            <h2 className='name'>{client.nome} {client.sobrenome}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}