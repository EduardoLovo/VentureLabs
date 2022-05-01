import React from 'react';
import './Step.css';

export const StepOne = ({ formData, setFormData }) => {
    return (
        <div className='contentStep'>
            <label>Nome:</label>
            <input
                type='text'
                placeholder='Ex. Maria'
                value={formData.nome}
                onChange={(event) => setFormData({ ...formData, nome: event.target.value })}
            />
            <label>Sobrenome:</label>
            <input
                type='text'
                placeholder='Ex. Siqueira'
                value={formData.sobrenome}
                onChange={(event) => setFormData({ ...formData, sobrenome: event.target.value })}

            />
            <label>E-mail:</label>
            <input
                type='email'
                placeholder='Ex. maria@gmail.com'
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}

            />
            <label>Telefone:</label>
            <input
                type='number'
                placeholder='Ex. (99) 99999-9999'
                value={formData.telefone}
                onChange={(event) => setFormData({ ...formData, telefone: event.target.value })}

            />
        </div>
    )
}
