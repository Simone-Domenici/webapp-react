import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

function MovieCard(movie) {
  const movieImage = "http://localhost:3000/movies_cover/"+movie.image
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/api/movies/${movie.id}`)
    .then(res => {
      setReviews(res.data.reviews);
    })
    .catch(err => {
      console.error(err);
    });
  }, [movie.id]);
  
  const averageVote = reviews.length > 0
  ? (reviews.reduce((sum, review) => sum + review.vote, 0) / reviews.length).toFixed(1)
  : 'N/A';
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movieImage} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
            {movie.abstract}
        </Card.Text>
        <Card.Text>
          <StarRating rating={averageVote} />
        </Card.Text>
        <Link to={`/${movie.id}`}><Button variant="primary">See More</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;