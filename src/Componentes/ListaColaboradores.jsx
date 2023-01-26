import React, { useState } from 'react'

const ListaColaboradores = ({ lstColaboradores, valorDeLaCaja }) => {

    return (
        <div>
            <h2>Lista de Colaboradores:</h2>
            <ul>
                {lstColaboradores.filter((e) => e.nombre.includes(valorDeLaCaja))
                .map( (c) => <li key={c.id}>{c.nombre} {c.correo}</li>)}
                
            </ul>
        </div>
    )
}

export default ListaColaboradores
