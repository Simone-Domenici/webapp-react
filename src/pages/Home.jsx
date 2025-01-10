import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/api/movies')
        .then(res => {
            setMovies(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, []);

    return (
        <div className='container'>
            <h1 className='display-4 my-4'>Film Popolari</h1>
            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <div className='row'>
                    {movies.map((movie) => (
                        <div className='col-12 col-md-6 col-lg-4 mb-4' key={movie.id}>
                            <MovieCard {...movie} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}