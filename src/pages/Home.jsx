import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');


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

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div className='container'>
            <h1 className='display-4 my-4'>Film Popolari</h1>
            <input
                type='text'
                className='form-control mb-4'
                placeholder='Cerca film...'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            {loading ? (
                <p>Caricamento...</p>
            ) : (
                <div className='row'>
                    {filteredMovies.map((movie) => (
                        <div className='col-12 col-md-6 col-lg-4 mb-4' key={movie.id}>
                            <MovieCard {...movie} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}