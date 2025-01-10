import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from '../components/StarRating';


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

    const movieImage = "http://localhost:3000/movies_cover/" + movie.image

    const reviews = movie.reviews || [];
    const averageVote = reviews.length > 0
        ? (reviews.reduce((sum, review) => sum + review.vote, 0) / reviews.length).toFixed(1)
        : 'N/A';

    return (
        <>
            <div className='container d-flex flex-grow-1'>
                <div className="image-container">
                    <img src={movieImage} className="img-fluid" />
                </div>
                <div className="ms-4">
                    <h1 className='display-4'>{movie.title}</h1>
                    <p className="fst-italic">{movie.director}</p>
                    <p className="fw-semibold">{movie.genre}</p>
                    <p>{movie.abstract}</p>
                    <p className="fw-semibold">{movie.release_year}</p>
                </div>
            </div>
            <div className="container ">
                <div className="d-flex justify-content-between">
                    <h2 className='my-4'>Recensioni</h2>
                    <h3 className='my-4'>Media: <StarRating rating={averageVote} /> </h3>
                </div>
                {reviews.length > 0 ? (
                    <div>
                        {reviews.map((review, i) => (
                            <div key={i} className='card mb-3'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{review.name}</h5>
                                    <div className="d-flex align-items-center gap-2">
                                        <h6 className='card-subtitle text-muted'>Voto: </h6>
                                        <StarRating rating={review.vote} />
                                    </div>
                                    <p className='card-text'>{review.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Nessuna recensione disponibile</p>
                )}
            </div>
        </>
    );
}