import React, { useState } from 'react';
import { StepFour } from './StepFour';
import { StepOne } from './StepOne';
import { StepThree } from './StepThree';
import { StepTwo } from './StepTwo';
import './Step.css';
import { List } from '../../List';

export const Form = () => {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        id: List.length + 1,
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        cep: "",
        endereco1: "",
        endereco2: "",
        dataDeNascimento: "",
        cpf: "",
        rendaMensal: ""
    })

    const [list, setList] = useState(List);


    const FormTitles = ["Cadastro", "Cadastro", "Cadastro", "Cadastro"];

    const PageDisplay = () => {
        if (page === 0) {
            return <StepOne formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <StepTwo formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <StepThree formData={formData} setFormData={setFormData} />
        } else {
            return <StepFour />
        }
    };

    return (
        <div className='form'>
            <div className='header'>
                <h1>{FormTitles[page]}</h1>
            </div>
            <div className='progressbar'>
                <div style={{ width: page === 0 ? "25%" : page === 1 ? "50%" : page === 2 ? "75%" : "100%" }}></div>
            </div>
            <div className='form-container'>

                <div className='body'>{PageDisplay()}</div>

                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1)
                        }}
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => {
                            if (page === 2) {
                                if (!formData.nome) {
                                    alert('Nome é obrigatorio')
                                } else if (!formData.sobrenome) {
                                    alert('Sobrenome é obrigatorio')
                                } else if (!formData.email) {
                                    alert('E-mail é obrigatorio')
                                } else if (!formData.telefone) {
                                    alert('Telefone é obrigatorio')
                                } else if (!formData.cep) {
                                    alert('Cep é obrigatorio')
                                } else if (!formData.endereco1) {
                                    alert('Endereço1  é obrigatorio')
                                } else if (!formData.dataDeNascimento) {
                                    alert('Data de nascimento é obrigatorio')
                                } else if (!formData.cpf) {
                                    alert('CPF é obrigatorio')
                                } else if (!formData.rendaMensal) {
                                    alert('Renda mensal é obrigatorio')
                                } else {
                                    list.push(formData)
                                    setPage((currPage) => currPage + 1)
                                }
                            } else {
                                setPage((currPage) => currPage + 1)
                            }
                        }
                        }
                    >
                        {page === 2 ? "Enviar" : "Proximo"}
                    </button>
                </div>
            </div>
        </div>
    )
}
