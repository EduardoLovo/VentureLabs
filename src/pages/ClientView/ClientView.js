import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { List } from '../../List';
import './ClientView.css';

export const ClientView = () => {

    const id = useParams().id

    const client = List[id - 1]

    return (
        <div className='contentView'>
            <h1>{client.nome} {client.sobrenome}</h1>
            <div className='backgroundView'>
                <div className='lineView'>
                    <label>Nome:</label>
                    <p>{client.nome}</p>
                </div>
                <div className='lineView'>
                    <label>Sobre Nome:</label>
                    <p>{client.sobrenome}</p>
                </div>
                <div className='lineView'>
                    <label>E-mail:</label>
                    <p>{client.email}</p>
                </div>
                <div className='lineView'>
                    <label>Telefone:</label>
                    <p>{client.telefone}</p>
                </div>
                <div className='lineView'>
                    <label>Cep:</label>
                    <p>{client.cep}</p>
                </div>
                <div className='lineView'>
                    <label>Endereço 1:</label>
                    <p>{client.endereco1}</p>
                </div>
                <div className='lineView'>
                    <label>Endereço 2:</label>
                    <p>{client.endereco2}</p>
                </div>
                <div className='lineView'>
                    <label>Data de Nascimento:</label>
                    <p>{client.dataDeNascimento}</p>
                </div>
                <div className='lineView'>
                    <label>CPF:</label>
                    <p>{client.cpf}</p>
                </div>
                <div className='lineView'>
                    <label>Renda Mensal:</label>
                    <p>R$ {client.rendaMensal}</p>
                </div>

            </div>

            <div className='divBtnView'>
                <Link to={'/client/list'}><button>Voltar</button></Link>
            </div>

        </div>
    )
}
