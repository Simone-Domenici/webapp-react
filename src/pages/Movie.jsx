import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
        .then(res => {
            setMovie(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p>Caricamento...</p>;
    }

    if (!movie) {
        return <p>Film non trovato</p>;
    }

    return (
        <div className='container'>
            <h1 className='display-4 my-4'>{movie.title}</h1>
            <p>{movie.director}</p>
            <p>{movie.genre}</p>
            <p>{movie.abstract}</p>
            <p>{movie.release_year}</p>
        </div>
    );
}