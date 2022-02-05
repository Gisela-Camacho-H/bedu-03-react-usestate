import React, { useState} from 'react';

export default function Exercise() {
    const [data, setData] = useState({
        title: "",
        description: ""
    })

    const [comments, setComments] = useState([])

    const [error, setError] = useState("")

    const handleChange = (event) => {
        console.log("event.target.name: ", event.target.name)
        console.log("event.target.value: ", event.target.value)
        setData({
            ...data, 
            [event.target.name]: event.target.value

        })
    }

    const handleSubmit = (event) => {

        event.preventDefault()

        if(!data.title || !data.description){
            return setError("tienes campos vacíos")
        }

        setComments([
            ...comments, 
            data
        ])

        setData({
            title: "", 
            description: ""
        })

        return setError("")
    }


    return (
        <>
        <p>Sección de ejercicios</p>

        <form onSubmit={ (evt) => {handleSubmit(evt)}}>
            <label>Título</label>
            <input 
                name="title"
                value={data.title}
                onChange={(evt) => {handleChange(evt)}}
            />

            <label>Descripción</label>
            <input 
                name="description"
                value={data.description}
                onChange={(evt) => {handleChange(evt)}}
            />

            <button type="submit">Enviar datos</button>

        </form>
        {error ? error: null}

<h2>Listado de comentarios</h2>

    <ul>
        {
            comments.map((e, index) => {
                return (
                    <li key={index}>
                        <h3>{e.title}</h3>
                        <p>{e.description}</p>
                    </li>
                )
            })
        }
    </ul>

    </>
    );
}
