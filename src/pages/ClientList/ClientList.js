import React from 'react';
import { Link } from 'react-router-dom';
import { List } from '../../List';
import './ClientList.css'

export const ListClient = () => {

    const listC = List

    return (
        <div className='bodyList'>
            <div className='contentList'>
                <h1>Lista de Clientes</h1>
                {listC.map((client, index) => (
                    <Link to={`/client/view/${client.id}`} key={client.id} client={client} className='linkCard'>
                        <div className='card' >
                            <img src='https://cdn-icons-png.flaticon.com/512/1077/1077063.png' alt='img' />
                            <h2 className='name'>{client.nome} {client.sobrenome}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}