import React from 'react'

export const StepThree = ({ formData, setFormData }) => {
    return (
        <div className='contentStep'>
            <label>Data de Nascimento:</label>
            <input
                type='date'
                value={formData.dataDeNascimento}
                onChange={(event) => setFormData({ ...formData, dataDeNascimento: event.target.value })}

            />
            <label>CPF:</label>
            <input
                type='number'
                placeholder='Ex. 999999999-00'
                value={formData.cpf}
                onChange={(event) => setFormData({ ...formData, cpf: event.target.value })}

            />
            <label>Renda Mensal:</label>
            <input
                type='number'
                placeholder='Ex. 2500,00'
                value={formData.rendaMensal}
                onChange={(event) => setFormData({ ...formData, rendaMensal: event.target.value })}

            />
        </div>
    )
}
