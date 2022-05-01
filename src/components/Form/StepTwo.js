import React from 'react'

export const StepTwo = ({ formData, setFormData }) => {
    return (
        <div className='contentStep'>
            <label>CEP:</label>
            <input
                type='number'
                placeholder='Ex. 00000-000'
                value={formData.cep}
                onChange={(event) => setFormData({ ...formData, cep: event.target.value })}
            />
            <label>Endereço 1:</label>
            <input
                type='text'
                placeholder='Ex. Rua. Porto Belo nº11'
                value={formData.endereco1}
                onChange={(event) => setFormData({ ...formData, endereco1: event.target.value })}
            />
            <label>Endereço 2:</label>
            <input
                type='text'
                placeholder='Ex. Rua das Flores nº11'
                value={formData.endereco2}
                onChange={(event) => setFormData({ ...formData, endereco2: event.target.value })}
            />
        </div>
    )
}
